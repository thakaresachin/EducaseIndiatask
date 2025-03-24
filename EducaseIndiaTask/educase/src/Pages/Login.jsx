import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
              <div className="flex flex-col justify-between h-screen bg-gray-100 p-6 max-w-sm mx-auto">
      {/* Top Content */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900">Signin to your PopX account</h1>
        <p className="text-gray-600 mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Input Fields */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="text-purple-700 font-semibold text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-purple-700 font-semibold text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Login Button */}
      
        <button  className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold mt-6">
        <Link to={"/profile"}>
          Login
          </Link>
        </button>
    
      </div>

    </div>
    </div>
  )
}

export default Login