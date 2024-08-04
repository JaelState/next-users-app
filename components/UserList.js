"use client";

import React from 'react';

export default function UserList({ users = [] }) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user._id}>
                    {user.name} ({user.email}) - Age: {user.age}
                </li>
            ))}
        </ul>
    );
}


