import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+-=;'[],./<>?:{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        Password Generator
      </h1>
      <h2 className="text-xl text-white mb-6">Implemented useRef, useCallback and useEffect </h2>

      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-xl p-6">
        {/* Password display */}
        <div className="flex mb-4">
          <input
            type="text"
            ref={passwordRef}
            value={password}
            className="flex-1 px-3 py-2 rounded-l-md bg-white text-gray-800 font-mono text-lg focus:outline-none"
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className="px-4 py-2 bg-green-600 text-white font-semibold rounded-r-md hover:bg-green-700 transition"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Length slider */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Length: <span className="font-bold">{length}</span>
            </label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full cursor-pointer accent-yellow-400"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-4 text-gray-300">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-yellow-400"
              />
              Numbers
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
                className="accent-yellow-400"
              />
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
