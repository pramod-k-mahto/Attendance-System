import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Student');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Blue header */}
      <div className="bg-blue-600 h-48 w-full"></div>

      {/* Gray background */}
      <div className="bg-gray-200 flex-grow flex justify-center items-start">
        {/* White card */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 mt-[-100px] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left section */}
            <div className="p-8 md:w-1/2 flex flex-col items-center">
              <h1 className="text-3xl font-bold mb-6 text-center">WELCOME</h1>

              <form className="w-full space-y-4">
                <input
                  type="text"
                  placeholder="Enter your email/Phone number"
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <p className="text-xs text-gray-500 cursor-pointer hover:underline">
                  Forgot Password?
                </p>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Sign In
                </button>

                <div className="text-center text-xs text-gray-500">
                  <p>OR</p>
                </div>

                <div className="text-center text-xs">
                  <p>
                    Don't have an account?{' '}
                    <span className="text-blue-600 cursor-pointer hover:underline">
                      Sign Up
                    </span>
                  </p>
                </div>

                <div className="flex justify-center space-x-6 mt-4">
                  {/* OAuth icons */}
                  <img
                    src="https://mitt.audkenni.is/images/LoginMynd.png"
                    alt="Google"
                    className="h-6 w-6 cursor-pointer"
                  />
                  <img
                    src="/path-to-github-icon.png"
                    alt="GitHub"
                    className="h-6 w-6 cursor-pointer"
                  />
                  <img
                    src="/path-to-linkedin-icon.png"
                    alt="LinkedIn"
                    className="h-6 w-6 cursor-pointer"
                  />
                </div>
              </form>
            </div>

            {/* Right section with illustration */}
            <div className="bg-gray-50 p-8 md:w-1/2 flex items-center justify-center">
              <div className="max-w-xs">
                <img
                  src="https://mitt.audkenni.is/images/LoginMynd.png"
                  alt="Security illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Bottom tabs */}
          <div className="flex border-t">
            <button
              className={`flex-1 py-2 text-center text-sm ${
                userType === 'Admin' ? 'bg-gray-100' : ''
              }`}
              onClick={() => setUserType('Admin')}
            >
              Admin Login
            </button>
            <button
              className={`flex-1 py-2 text-center text-sm ${
                userType === 'Instructor' ? 'bg-gray-100' : ''
              }`}
              onClick={() => setUserType('Instructor')}
            >
              Instructor
            </button>
            <button
              className={`flex-1 py-2 text-center text-sm ${
                userType === 'Student' ? 'bg-gray-100' : ''
              }`}
              onClick={() => setUserType('Student')}
            >
              Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
