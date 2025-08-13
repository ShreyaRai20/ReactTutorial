import UserContextProvider from './context/UserContext';
import Login from './Login';
import Profile from './Profile';

function ContextPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-4">
      <UserContextProvider>
        <h1 className="text-yellow-400 text-4xl font-bold mb-10">
          Implemented useContext
        </h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default ContextPage;
