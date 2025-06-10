import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AdminPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('admin-auth')) {
      history.push('/admin-login');
    }
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    history.push('/admin-login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 py-10">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-3xl w-full border border-indigo-100 text-center">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            Logout
          </button>
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Admin access granted.</h2>
      </div>
    </div>
  );
};

export default AdminPage; 