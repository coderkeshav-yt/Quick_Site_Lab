import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config';

// Initialize the Supabase client
const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;

// Debug logging
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase URL length:', supabaseUrl.length);
console.log('Supabase Anon Key (first 10 chars):', 
  supabaseAnonKey ? supabaseAnonKey.substring(0, 10) + '...' : 'undefined');

const isConfigured = supabaseUrl && supabaseAnonKey;

if (!isConfigured) {
  console.warn('Supabase is not properly configured. Authentication features will be in demo mode.');
  console.warn('Please update your .env.development file with valid Supabase credentials.');
}

// Create a single supabase client for the entire app
export const supabase = createClient(
  isConfigured ? supabaseUrl : 'https://placeholder.supabase.co',
  isConfigured ? supabaseAnonKey : 'placeholder_key',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      storage: window.localStorage
    }
  }
);

// Export configuration status for components to check
export const isSupabaseConfigured = isConfigured;
