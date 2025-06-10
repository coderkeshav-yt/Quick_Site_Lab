import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, pass })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem('admin-auth', data.token);
        history.push('/admin');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full border border-indigo-100">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Admin Login</h2>
        {error && <div className="mb-4 text-red-600 text-center font-semibold">{error}</div>}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">User ID</label>
          <input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
            placeholder="Enter admin user ID"
            required
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
            placeholder="Enter password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage; 