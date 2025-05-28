import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link 
        to="/auth/signin"
        className="text-gray-800 hover:text-purple-600 font-medium transition-colors duration-200 px-4 py-2"
      >
        Sign In
      </Link>
      <Link 
        to="/auth/signup"
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default AuthButtons;
