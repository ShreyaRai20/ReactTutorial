import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="text-center text-yellow-400 font-semibold mt-12">
        Please login to continue.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg p-8 mt-8 text-center">
      <h2 className="text-3xl font-bold text-yellow-400">
        Welcome, <span className="underline">{user.username}</span>!
      </h2>
    </div>
  );
}

export default Profile;
