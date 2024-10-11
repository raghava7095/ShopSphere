// UserProfile.js
import React, { useState } from 'react';

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        profilePicture: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Handle file upload logic here
    };

    return (
        <div>
            <h2>User Profile</h2>
            <input 
                type="text" 
                name="name" 
                value={userDetails.name} 
                onChange={handleChange} 
                placeholder="Name" 
            />
            <input 
                type="email" 
                name="email" 
                value={userDetails.email} 
                onChange={handleChange} 
                placeholder="Email" 
            />
            <input 
                type="file" 
                onChange={handleFileChange} 
            />
            <button>Update Profile</button>
        </div>
    );
};

export default UserProfile;
