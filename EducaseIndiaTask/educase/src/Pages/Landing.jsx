import React from 'react'
import { Link } from 'react-router-dom'
Link
export const Landing = () => {
  return (
    <div>
       <div className="flex flex-col justify-between h-screen bg-gray-100 p-6 max-w-sm mx-auto">
      {/* Blank Space at the Top */}
      <div className="flex-1"></div>

      {/* Bottom Content */}
      <div className="text-center pb-10">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-600 mt-2 text-sm px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Buttons */}
        <div className="mt-6 space-y-3">
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold">
            <Link to={'/Signup'}>
            Create Account
            </Link>
          </button>
          <button className="w-full bg-purple-200 text-purple-700 py-3 rounded-lg font-semibold">
          <Link to={'/login'}>
            Already Registered? Login
            </Link>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      
    </div>
    </div>
  )
}
