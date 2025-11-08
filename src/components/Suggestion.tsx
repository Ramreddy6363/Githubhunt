type SuggestionUser = {
  id: number;
  login: string;
  avatar_url: string;
};

type SuggestionProps = {
  suggestions: SuggestionUser[] | null;
  show: boolean;
  onSelect: (username: string) => void;
};

const Suggestion = ({ suggestions, show, onSelect }: SuggestionProps) => {
  if (!show || !suggestions) return null;

  return (
    <>
      <ul className="absolute z-10 w-full bg-gray-800/95 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl mt-2 overflow-hidden">
        {suggestions.slice(0, 5).map((user: SuggestionUser) => (
          <li
            key={user.id}
            className="px-4 py-3 hover:bg-blue-600/30 cursor-pointer transition-colors duration-150 border-b border-white/10 last:border-b-0"
            onClick={() => {
              onSelect(user.login);
            }}
          >
            <div className="flex items-center gap-3">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-10 h-10 rounded-full border-2 border-blue-500/30"
              />
              <span className="text-white font-medium">@{user.login}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Suggestion;
