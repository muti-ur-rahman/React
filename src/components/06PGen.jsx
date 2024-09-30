import React, { useState, useEffect } from 'react';

const PasswordGen = () => {
    const [length, setLength] = useState(8); // Default password length
    const [password, setPassword] = useState('');
    
    const generatePassword = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const handleGenerate = () => {
        const newPassword = generatePassword();
        setPassword(newPassword);
    };

    useEffect(() => {
        handleGenerate(); // Generate a new password when the length changes
    }, [length]);

    return (
        <div>
            <h1>Password Generator</h1>
            <label>
                Password Length:
                <input 
                    type="number" 
                    value={length} 
                    onChange={(e) => setLength(Number(e.target.value))}
                    min="4" 
                    max="20" 
                />
            </label>
            <button onClick={handleGenerate}>Generate Password</button>
            <h2>Your Password: {password}</h2>
        </div>
    );
};

export default PasswordGen;
