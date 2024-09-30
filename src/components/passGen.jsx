import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12); // Default length
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);

  const generatePassword = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}';
    
    let chars = alphabet;
    if (includeNumbers) chars += numbers;
    if (includeSpecial) chars += specialChars;
    
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>

      {/* Password Input */}
      <div className="relative mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your password will appear here"
        />
        <button
          onClick={copyToClipboard}
          className="absolute right-0 p-2 bg-blue-500 text-white rounded"
        >
          Copy
        </button>
      </div>

      {/* Length Slider */}
      <div className="mb-4">
        <label htmlFor="length" className="block mb-2">Password Length: {length}</label>
        <input
          type="range"
          id="length"
          min="6"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Checkbox Options */}
      <div className="flex items-center gap-4 mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="mr-2"
          />
          Include Numbers
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeSpecial}
            onChange={() => setIncludeSpecial(!includeSpecial)}
            className="mr-2"
          />
          Include Special Characters
        </label>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
