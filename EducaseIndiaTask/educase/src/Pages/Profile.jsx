import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa"; // Import camera icon

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userProfile"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <div className="flex flex-col h-screen bg-gray-100 p-6 max-w-sm mx-auto">
            <h1 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h1>

            {user ? (
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    {/* Profile Image with Camera Icon */}
                    <div className="relative w-20 h-20 mx-auto mb-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Profile"
                            className="w-20 h-20 rounded-full border border-gray-300"
                        />
                        <div className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full">
                            <FaCamera size={14} />
                        </div>
                    </div>

                    {/* Name and Email */}
                    <h2 className="text-lg font-semibold">{user.fullName}</h2>
                    <p className="text-gray-600 text-sm">{user.email}</p>

                    {/* Description Text */}
                    <p className="mt-4 text-gray-700 text-sm">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
