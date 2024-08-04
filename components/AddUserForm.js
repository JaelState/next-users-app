"use client";
import React, { useState } from 'react';

export default function AddUserForm({ onUserAdded }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/apii/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, age }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to add user: ${response.status} - ${response.statusText} - ${errorText}`);
            }

            const newUser = await response.json();
            onUserAdded(newUser);
            setName('');
            setEmail('');
            setAge('');
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error adding user:', error.message);
            setError(error.message); // Set error state for displaying in UI
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-700 transition-colors">
                Add User
            </button>
        </form>
    );
}
