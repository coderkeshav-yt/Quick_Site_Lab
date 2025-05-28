import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';

interface AuthPageProps {
  mode?: 'signin' | 'signup' | 'forgotPassword';
}

const AuthPage: React.FC<AuthPageProps> = ({ mode = 'signin' }) => {
  const history = useHistory();

  const handleAuthSuccess = () => {
    // Redirect to dashboard or home page after successful authentication
    setTimeout(() => {
      history.push('/');
    }, 1500); // Short delay to show success message
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <Helmet>
        <title>
          {mode === 'signin' ? 'Sign In' : mode === 'signup' ? 'Create Account' : 'Reset Password'} | Launchory
        </title>
      </Helmet>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column - Form */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AuthForm initialMode={mode} onSuccess={handleAuthSuccess} />
          </motion.div>

          {/* Right Column - Benefits */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {mode === 'signin' 
                  ? 'Welcome back to Launchory' 
                  : 'Join the Launchory community'}
              </h2>
              <p className="text-lg text-gray-600">
                {mode === 'signin'
                  ? 'Sign in to access your account and continue your journey.'
                  : 'Create an account to access premium features and resources.'}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Premium Source Code</h3>
                  <p className="mt-1 text-gray-600">Access high-quality source code packages for your projects.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Fast Development</h3>
                  <p className="mt-1 text-gray-600">Speed up your development process with ready-to-use templates.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Secure & Reliable</h3>
                  <p className="mt-1 text-gray-600">All our code follows best practices for security and performance.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
