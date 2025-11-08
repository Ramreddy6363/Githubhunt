import UsersSearch from './components/UsersSearch';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="mb-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
              GitHub Hunt
            </h1>
            <p className="text-gray-300 text-lg">
              Discover GitHub profiles with ease
            </p>
          </div>
          <UsersSearch />
        </div>
      </div>
    </div>
  );
};

export default App;
