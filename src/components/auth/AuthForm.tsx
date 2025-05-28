import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import { FiMail, FiLock, FiUser, FiAlertCircle, FiCheckCircle, FiKey, FiUserPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

type AuthMode = 'signin' | 'signup' | 'forgotPassword';

type AuthModeWithoutForgot = Exclude<AuthMode, 'forgotPassword'>;

interface AuthFormProps {
  initialMode?: AuthMode;
  onSuccess?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ initialMode = 'signin', onSuccess }) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | '' }>({ text: '', type: '' });
  const [errors, setErrors] = useState<{email?: string; password?: string; name?: string; confirmPassword?: string}>({});
  const history = useHistory();
  
  // Clear errors when changing fields or mode
  useEffect(() => {
    setErrors({});
  }, [email, password, name, confirmPassword, mode]);
  
  // Clear message when changing mode
  useEffect(() => {
    setMessage({ text: '', type: '' });
  }, [mode]);

  const validateForm = () => {
    const newErrors: {email?: string; password?: string; name?: string; confirmPassword?: string} = {};
    let isValid = true;
    
    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    // Password validation
    if (mode !== 'forgotPassword') {
      if (!password) {
        newErrors.password = 'Password is required';
        isValid = false;
      } else if (password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
      }
    }
    
    // Name validation for signup
    if (mode === 'signup' && !name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    // Confirm password validation for signup
    if (mode === 'signup') {
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
        isValid = false;
      } else if (confirmPassword !== password) {
        newErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      console.log('Attempting to sign up with:', { email, name });
      
      // First, sign up the user with email and password
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            email: email // Make sure email is included in user_metadata
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      console.log('Auth sign up response:', { authData, signUpError });

      if (signUpError) {
        console.error('Sign up error:', signUpError);
        throw signUpError;
      }

      // If we get here, the user was created in the auth.users table
      // Now, let's make sure the user is also in the public.users table
      if (authData.user) {
        console.log('User created in auth, now creating/updating profile...');
        
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: authData.user.id,
            email: email,
            full_name: name,
            updated_at: new Date().toISOString(),
          })
          .select();

        console.log('Profile upsert response:', { profileData, profileError });

        if (profileError) {
          console.error('Error creating/updating profile:', profileError);
          throw profileError;
        }
      }

      setMessage({ 
        text: 'Registration successful! Please check your email to confirm your account.', 
        type: 'success' 
      });
      
      // Clear form
      setEmail('');
      setPassword('');
      setName('');
      setConfirmPassword('');
      
      // Redirect to login after successful registration
      setTimeout(() => {
        setMode('signin');
        if (onSuccess) onSuccess();
      }, 3000);
    } catch (error: any) {
      console.error('Sign up error details:', error);
      let errorMessage = 'An error occurred during sign up';
      
      if (error.message) {
        if (error.message.includes('already registered')) {
          errorMessage = 'This email is already registered. Please sign in instead.';
        } else if (error.message.includes('password')) {
          errorMessage = 'Password must be at least 6 characters long.';
        } else {
          errorMessage = error.message;
        }
      }
      
      console.log('Error message to show:', errorMessage);
      setMessage({ 
        text: errorMessage, 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      console.log('Attempting to sign in with:', { email });
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log('Sign in response:', { data, error });

      if (error) {
        console.error('Sign in error:', error);
        throw error;
      }

      
      console.log('Sign in successful, user:', data.user);
      setMessage({ text: 'Sign in successful!', type: 'success' });
      
      // Redirect to home page after successful login
      setTimeout(() => {
        history.push('/');
        if (onSuccess) onSuccess();
      }, 1000);
    } catch (error: any) {
      console.error('Sign in error details:', error);
      const errorMessage = error.error_description || error.message || 'Invalid email or password';
      console.log('Error message to show:', errorMessage);
      setMessage({ 
        text: errorMessage, 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email only for password reset
    const newErrors: {email?: string} = {};
    let isValid = true;
    
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    setErrors(newErrors);
    if (!isValid) return;
    
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setMessage({ 
        text: 'Password reset instructions sent to your email', 
        type: 'success' 
      });
      
      // Clear email field after successful request
      setEmail('');
    } catch (error: any) {
      setMessage({ 
        text: error.error_description || error.message || 'Error sending reset instructions', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {/* Form Header */}
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {mode === 'signin' ? 'Welcome Back' : 
             mode === 'signup' ? 'Create Account' : 'Reset Password'}
          </motion.h2>
          <p className="text-gray-600">
            {mode === 'signin' ? 'Sign in to access your account' : 
             mode === 'signup' ? 'Join Launchory to get started' : 
             'Enter your email to reset your password'}
          </p>
        </div>

        {/* Alert Message */}
        {message.text && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 mb-6 rounded-lg flex items-start ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
          >
            <div className="flex-shrink-0 mr-3">
              {message.type === 'success' ? (
                <FiCheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <FiAlertCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
            <div>
              {message.text}
            </div>
          </motion.div>
        )}

        {/* Form Content */}
        <form onSubmit={
          mode === 'signin' 
            ? handleSignIn 
            : (mode === 'signup' 
              ? handleSignUp 
              : handleForgotPassword)
        }>
          <div className="space-y-5">
            {/* Name Field - Only for Sign Up */}
            {mode === 'signup' && (
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'} rounded-xl transition-all duration-200`}
                    placeholder="John Doe"
                    required={mode === 'signup'}
                  />
                  {errors.name && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <FiAlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'} rounded-xl transition-all duration-200`}
                  placeholder="you@example.com"
                  required
                />
                {errors.email && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <FiAlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Field - Not for Forgot Password */}
            {mode !== 'forgotPassword' && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-gray-700 font-medium">
                    Password
                  </label>
                  {mode === 'signin' && (
                    <button 
                      type="button" 
                      onClick={() => setMode('forgotPassword')}
                      className="text-sm text-purple-600 hover:text-purple-800"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.password ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'} rounded-xl transition-all duration-200`}
                    placeholder="••••••••"
                    required={mode === 'signin' || mode === 'signup'}
                  />
                  {errors.password && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <FiAlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            )}
            
            {/* Confirm Password Field - Only for Sign Up */}
            {mode === 'signup' && (
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.confirmPassword ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'} rounded-xl transition-all duration-200`}
                    placeholder="••••••••"
                    required={mode === 'signup'}
                  />
                  {errors.confirmPassword && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <FiAlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    {mode === 'signin' ? 'Signing in...' : 
                     mode === 'signup' ? 'Creating account...' : 
                     'Sending reset link...'}
                  </>
                ) : (
                  <>
                    {mode === 'signin' && (
                      <FiKey className="h-5 w-5 mr-2" />
                    )}
                    {mode === 'signup' && (
                      <FiUserPlus className="h-5 w-5 mr-2" />
                    )}
                    {mode === 'forgotPassword' && (
                      <FiMail className="h-5 w-5 mr-2" />
                    )}
                    {mode === 'signin' ? 'Sign In' : 
                     mode === 'signup' ? 'Create Account' : 
                     'Send Reset Link'}
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Mode Toggle */}
        <div className="text-center mt-6">
          {mode === 'signin' && (
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('signup');
                  setEmail('');
                  setPassword('');
                }}
                className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
              >
                Sign Up
              </button>
            </p>
          )}
          
          {mode === 'signup' && (
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('signin');
                  setEmail('');
                  setPassword('');
                  setName('');
                  setConfirmPassword('');
                }}
                className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
              >
                Sign In
              </button>
            </p>
          )}
          
          {mode === 'forgotPassword' && (
            <p className="text-gray-600">
              Remember your password?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('signin');
                  setEmail('');
                }}
                className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
              >
                Back to Sign In
              </button>
            </p>
          )}
        </div>

        {/* Social Login Options */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl bg-white text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-200"
              onClick={() => {
                supabase.auth.signInWithOAuth({
                  provider: 'google',
                  options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                  },
                });
              }}
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" width="24" height="24">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                </g>
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl bg-white text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-200"
              onClick={() => {
                supabase.auth.signInWithOAuth({
                  provider: 'github',
                  options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                  },
                });
              }}
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
