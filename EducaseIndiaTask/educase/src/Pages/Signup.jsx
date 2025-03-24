import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        isAgency: "yes",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = () => {
        console.log("Signup clicked, navigating...");
        localStorage.setItem("userProfile", JSON.stringify(formData));
        navigate("/profile");
    };

    return (
        <div className="flex flex-col justify-center h-screen bg-white px-6 max-w-sm mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Create your PopX account</h1>

            <div className="space-y-4">
                <div>
                    <label className="text-purple-700 font-semibold text-sm">Full Name *</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Marry Doe"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="text-purple-700 font-semibold text-sm">Phone number *</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Marry Doe"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="text-purple-700 font-semibold text-sm">Email address *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Marry Doe"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="text-purple-700 font-semibold text-sm">Password *</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Marry Doe"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="text-purple-700 font-semibold text-sm">Company name</label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Marry Doe"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Agency Selection */}
                <div>
                    <label className="text-gray-700 font-semibold text-sm">Are you an Agency? *</label>
                    <div className="flex space-x-4 mt-2">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="isAgency"
                                value="yes"
                                checked={formData.isAgency === "yes"}
                                onChange={handleChange}
                                className="form-radio text-purple-600"
                            />
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="isAgency"
                                value="no"
                                checked={formData.isAgency === "no"}
                                onChange={handleChange}
                                className="form-radio text-purple-600"
                            />
                            <span>No</span>
                        </label>
                    </div>
                </div>

                {/* Signup Button */}
                <button
                    onClick={handleSignup}
                    className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold mt-6 shadow-md"
                >
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default Signup;
