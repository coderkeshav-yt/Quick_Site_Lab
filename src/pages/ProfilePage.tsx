import React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import UserProfile from '../components/auth/UserProfile';
import Breadcrumb from '../components/ui/Breadcrumb';

const ProfilePage: React.FC = () => {
  const { user, loading } = useAuth();

  // Redirect to sign in if not authenticated
  if (!loading && !user) {
    return <Redirect to="/auth/signin" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <Helmet>
        <title>Your Profile | Launchory</title>
      </Helmet>

      <div className="container mx-auto max-w-6xl">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              {
                label: 'Home',
                path: '/',
                icon: (
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                )
              },
              {
                label: 'Profile',
              }
            ]}
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <UserProfile />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
