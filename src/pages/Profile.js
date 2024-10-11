// src/pages/Profile.js
import React, { useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        profilePicture: 'https://via.placeholder.com/150',
    });

    const [newProfilePicture, setNewProfilePicture] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the updated user info to your backend
        console.log('Updated User Info:', user);
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white">
            <h1 className="text-2xl font-bold mb-4 text-center">User Profile</h1>
            <div className="flex justify-center mb-4">
                <img
                    src={newProfilePicture || user.profilePicture}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border border-gray-300"
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Profile Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;
