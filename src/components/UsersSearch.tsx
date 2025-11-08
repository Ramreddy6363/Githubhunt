import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchGitHub } from '../api/github';
import UserCard from './UserCard';
import RecentSearch from './RecentSearch';
import { useDebounce } from 'use-debounce';
import { searchGitHub } from '../api/github';
import Suggestion from './Suggestion';

type SuggestionUser = {
  id: number;
  login: string;
  avatar_url: string;
};

const UsersSearch = () => {
  const [recentUsernames, setRecentUsernames] = useState<string[]>(() => {
    const stored = localStorage.getItem('recentUsernames');
    return stored ? JSON.parse(stored) : [];
  });
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');
  const [debouncedUsername] = useDebounce(username, 300);
  const [showsuggestions, setShowSuggestions] = useState(false);

  //query to fetch user data
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['users', submittedUsername],
    queryFn: () => {
      if (!submittedUsername) return null;
      return fetchGitHub(submittedUsername);
    },
    enabled: !!submittedUsername,
  });
  // query to fetch user data for suggestions
  const { data: suggestions } = useQuery<SuggestionUser[] | null>({
    queryKey: ['search', debouncedUsername],
    queryFn: async () => {
      if (!debouncedUsername) return null;
      return searchGitHub(debouncedUsername);
    },
    enabled: debouncedUsername.length > 1,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trim = username.trim();
    if (!trim) return;
    setSubmittedUsername(trim);
    setUsername('');
    setRecentUsernames((prev) => {
      const updated = [trim, ...prev.filter((name) => name !== trim)];
      return updated.slice(0, 5);
    });
  };

  useEffect(() => {
    localStorage.setItem('recentUsernames', JSON.stringify(recentUsernames));
  }, [recentUsernames]);
  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} action="" className="mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Enter Github Username..."
              value={username}
              onChange={(e) => {
                const val = e.target.value;
                setUsername(val);
                setShowSuggestions(val.trim().length > 1);
              }}
              onBlur={() => {
                setTimeout(() => setShowSuggestions(false), 200);
              }}
              className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
            />
            {showsuggestions && suggestions && suggestions.length > 0 && (
              <Suggestion
                suggestions={suggestions}
                show={showsuggestions}
                onSelect={(username: string) => {
                  setUsername(username);
                  setShowSuggestions(false);
                  if (submittedUsername !== username) {
                    setSubmittedUsername(username);
                  } else {
                    refetch();
                  }
                  setRecentUsernames((prev) => {
                    const updated = [
                      username,
                      ...prev.filter((name) => name !== username),
                    ];
                    return updated.slice(0, 5);
                  });
                }}
              />
            )}
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Search
          </button>
        </div>
      </form>
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      {isError && (
        <div className="bg-red-500/10 backdrop-blur-md border border-red-500/30 rounded-lg p-6 text-center">
          <p className="text-red-400 font-medium">{(error as Error).message}</p>
        </div>
      )}
      {data && <UserCard user={data} />}
      {recentUsernames.length > 0 && (
        <div>
          <RecentSearch
            users={recentUsernames}
            onSelect={(username: string) => {
              setUsername(username);
              setSubmittedUsername(username);
            }}
          />
          <button
            onClick={() => {
              setUsername('');
              setSubmittedUsername('');
              setRecentUsernames([]);
            }}
            className="mt-4 w-full px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 font-medium rounded-lg border border-red-500/30 hover:border-red-500/50 transition-all duration-200"
          >
            Clear History
          </button>
        </div>
      )}
    </div>
  );
};

export default UsersSearch;
