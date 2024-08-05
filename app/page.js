"use client";
import { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import AddUserForm from '../components/AddUserForm';

async function fetchData() {
  try {
    const response = await fetch(`/apii/users`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch users: ${response.status} - ${response.statusText} - ${errorText}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error.message, error.stack); // Improved logging
    throw error;
  }
}

export default function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUsers() {
      try {
        const userData = await fetchData();
        setUsers(userData);
        setError(null);
      } catch (error) {
        setError('Failed to fetch users. Please try again.');
        console.error('Error fetching users:', error.message, error.stack); // Improved logging
      }
    }
    getUsers();
  }, []);

  const handleUserAdded = async (newUser) => {
    try {
      setUsers([...users, newUser]);
    } catch (error) {
      console.error('Error adding user:', error.message, error.stack); // Improved logging
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">User Management System</h1>
      <AddUserForm onUserAdded={handleUserAdded} />
      {error && <p className="text-red-500">{error}</p>}
      <UserList users={users} />
    </div>
  );
}
