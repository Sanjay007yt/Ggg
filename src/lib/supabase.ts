import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface Profile {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  updated_at: string;
}

// Auth helper functions
export const authHelpers = {
  signUp: async (email: string, password: string, fullName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });
      
      if (error) {
        console.error('Signup error:', error);
        return { data: null, error };
      }
      
      return { data, error: null };
    } catch (err) {
      console.error('Unexpected signup error:', err);
      return { 
        data: null, 
        error: { message: 'An unexpected error occurred during signup. Please try again.' }
      };
    }
  },

  signIn: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error('Login error:', error);
        // Provide user-friendly error messages
        let userMessage = error.message;
        if (error.message.includes('Invalid login credentials')) {
          userMessage = 'Invalid email or password. Please check your credentials and try again.';
        }
        return { data: null, error: { ...error, message: userMessage } };
      }
      
      return { data, error: null };
    } catch (err) {
      console.error('Unexpected login error:', err);
      return { 
        data: null, 
        error: { message: 'An unexpected error occurred during login. Please try again.' }
      };
    }
  },

  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      return { error };
    } catch (err) {
      console.error('Logout error:', err);
      return { error: { message: 'An error occurred during logout.' } };
    }
  },

  getCurrentUser: async () => {
    try {
      return await supabase.auth.getUser();
    } catch (err) {
      console.error('Get user error:', err);
      return { data: { user: null }, error: { message: 'Failed to get current user.' } };
    }
  },

  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback);
  },

  // Helper to get user profile
  getUserProfile: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) {
        console.error('Profile fetch error:', error);
        return { data: null, error };
      }
      
      return { data, error: null };
    } catch (err) {
      console.error('Unexpected profile fetch error:', err);
      return { 
        data: null, 
        error: { message: 'Failed to fetch user profile.' }
      };
    }
  },
};