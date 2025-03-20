import React, { useState } from 'react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Blue header */}
      <div className="bg-blue-600 h-48 w-full"></div>
      
      {/* Gray background */}
      <div className="bg-gray-200 flex-grow flex justify-center items-start">
        {/* White card */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 mt-[-100px] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left section - Form */}
            <div className="p-8 md:w-1/2">
              <h1 className="text-3xl font-bold mb-6 text-center">SIGN UP</h1>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="border border-gray-300 rounded p-2 text-sm"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="border border-gray-300 rounded p-2 text-sm"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
                
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
                
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  value={formData.password}
                  onChange={handleChange}
                />
                
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-2 rounded mt-4"
                >
                  Sign Up
                </button>
              </form>
            </div>
            
            {/* Right section - Illustration */}
            <div className="bg-gray-50 p-8 md:w-1/2 flex items-center justify-center">
              <div className="max-w-xs">
                <img 
                  src="https://wowdigital.sg/wp-content/uploads/2023/04/wow-digital-international-seo.webp" 
                  alt="Sign up illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
