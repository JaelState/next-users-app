"use client"
import React from 'react';

export default function UserDetail({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}