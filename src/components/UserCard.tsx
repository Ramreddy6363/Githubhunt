import { FaGithubAlt } from 'react-icons/fa';
import type { GitHubUser } from '../types';

const UserCard = ({ user }: { user: GitHubUser }) => {
  return (
    <>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-2xl">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar_url}
            alt={user.name || user.login}
            className="w-32 h-32 rounded-full border-4 border-blue-500/50 shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold text-white mb-2">
            {user.name || user.login}
          </h2>
          <p className="text-gray-400 mb-4">@{user.login}</p>
          <p className="text-gray-300 text-center max-w-md mb-6">
            {user.bio || 'No bio available'}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="bg-blue-500/20 px-6 py-3 rounded-lg text-center">
              <p className="text-sm text-gray-400">Repositories</p>
              <p className="text-2xl font-bold text-white">
                {user.public_repos}
              </p>
            </div>
            <div className="bg-blue-500/20 px-6 py-3 rounded-lg text-center">
              <p className="text-sm text-gray-400">Followers</p>
              <p className="text-2xl font-bold text-white">{user.followers}</p>
            </div>
            <div className="bg-blue-500/20 px-6 py-3 rounded-lg text-center">
              <p className="text-sm text-gray-400">Following</p>
              <p className="text-2xl font-bold text-white">{user.following}</p>
            </div>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <FaGithubAlt className="text-xl" /> View Profile on GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default UserCard;
