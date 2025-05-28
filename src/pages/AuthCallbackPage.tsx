import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const AuthCallbackPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Handle the OAuth callback
    const handleAuthCallback = async () => {
      try {
        // Process the OAuth callback
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          throw error;
        }

        if (data?.session) {
          // Redirect to the home page or dashboard after successful authentication
          history.replace('/');
        } else {
          // If no session was found, there might be an issue with the callback
          setError('Authentication failed. Please try again.');
          setTimeout(() => {
            history.replace('/auth/signin');
          }, 3000);
        }
      } catch (err: any) {
        console.error('Error during auth callback:', err);
        setError(err.message || 'Authentication failed. Please try again.');
        setTimeout(() => {
          history.replace('/auth/signin');
        }, 3000);
      }
    };

    handleAuthCallback();
  }, [history, location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-md w-full text-center">
        {error ? (
          <>
            <div className="text-red-600 mb-4">
              <svg className="h-12 w-12 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Authentication Error</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <p className="text-gray-500 text-sm">Redirecting you back to sign in...</p>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Completing Authentication</h2>
            <p className="text-gray-600">Please wait while we complete your authentication...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallbackPage;
