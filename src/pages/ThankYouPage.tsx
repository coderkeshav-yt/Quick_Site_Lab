import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYouPage: React.FC = () => {
  const [downloadToken, setDownloadToken] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number>(600); // 10 minutes in seconds
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get('session_id');

    if (sessionId) {
      verifySession(sessionId);
    }
  }, [location]);

  // Countdown timer for download link expiration
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (downloadToken && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [downloadToken, countdown]);

  // Format countdown time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const verifySession = async (sessionId: string) => {
    setIsVerifying(true);
    setError(null);

    try {
      const response = await fetch('/verify-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      });

      const data = await response.json();

      if (data.valid) {
        setDownloadToken(data.token);
      } else {
        setError(data.message || 'Payment verification failed');
      }
    } catch (err) {
      setError('An error occurred during verification. Please contact support.');
      console.error('Verification error:', err);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleDownload = () => {
    if (downloadToken) {
      window.location.href = `/download/${downloadToken}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <Helmet>
        <title>Thank You for Your Purchase | Launchory</title>
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10 text-center border border-gray-100"
      >
        <div className="mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-14 h-14 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Thank You for Your Purchase!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your transaction has been completed successfully. We appreciate your business!
        </p>

        {isVerifying ? (
          <div className="bg-purple-50 rounded-xl p-6 mb-8">
            <div className="flex justify-center items-center space-x-3 mb-2">
              <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-purple-600"></div>
              <p className="text-lg font-medium text-purple-700">Verifying your payment...</p>
            </div>
            <p className="text-gray-600 text-sm">
              This will only take a moment. Please don't close this page.
            </p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3 text-left">
                <p className="text-lg font-medium">{error}</p>
                <p className="mt-2 text-sm">
                  If you believe this is an error, please contact our support team for assistance.
                </p>
              </div>
            </div>
          </div>
        ) : downloadToken ? (
          <div className="mb-8">
            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <p className="text-lg text-gray-700 mb-2">
                Your source code package is ready for download!
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Your download link will expire in <span className="font-medium text-red-600">{formatTime(countdown)}</span>
              </p>
              
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg flex items-center justify-center mx-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Your Code
              </motion.button>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-3">What's Next?</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Extract the ZIP file to your preferred location</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Read the included README.md file for setup instructions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Check your email for a receipt and additional information</span>
                </li>
              </ul>
            </div>
          </div>
        ) : null}

        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-gray-600 mb-4">
            Questions or need assistance? Contact our support team at{' '}
            <a href="mailto:support@launchory.com" className="text-purple-600 hover:underline font-medium">
              support@launchory.com
            </a>
          </p>
          <a href="/source-code" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            ← Return to Source Code Packages
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
