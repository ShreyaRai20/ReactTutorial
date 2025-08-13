import React, { useContext, useRef } from 'react';
import { UserContext } from './context/UserContext';

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const usernameRef = useRef()
  const passwordRef = useRef()
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // setUser({ username, password });
    setUser({ username: usernameRef.current.value,password: passwordRef.current.value });

    usernameRef.current.value = ''
    passwordRef.current.value = ''
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          // value={username}
          // value=''
          ref={usernameRef}
          // onChange={(e) => setUsername(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 rounded-md bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="password"
          // value=''
          ref={passwordRef}
          // onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 rounded-md bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-gray-900 font-semibold py-2 rounded-md hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
