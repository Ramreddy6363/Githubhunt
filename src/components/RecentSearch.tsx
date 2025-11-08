import { FaUser } from 'react-icons/fa';
import { useQueryClient } from '@tanstack/react-query';
import { fetchGitHub } from '../api/github';

type RecentSearchProps = {
  users: string[];
  onSelect: (username: string) => void;
};

const RecentSearch = ({ users, onSelect }: RecentSearchProps) => {
  const queryClient = useQueryClient();

  return (
    <div className="mt-8">
      <h2 className="text-white text-xl font-semibold mb-4 flex items-center justify-center gap-2 ">
        <FaUser className="text-blue-400" />
        Recent Searches
      </h2>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
        <ul className="space-y-2">
          {users.map((name) => (
            <li key={name}>
              <button
                onClick={() => {
                  onSelect(name);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-lg text-gray-300 hover:text-white transition-all duration-200 group"
                onMouseEnter={() => {
                  queryClient.prefetchQuery({
                    queryKey: ['users', name],
                    queryFn: () => fetchGitHub(name),
                  });
                }}
              >
                <FaUser className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">@{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentSearch;
