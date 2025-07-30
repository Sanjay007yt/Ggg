import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import { authHelpers } from './lib/supabase';

function App() {
  const [currentView, setCurrentView] = useState<'login' | 'signup' | 'dashboard'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      const { data: { user } } = await authHelpers.getCurrentUser();
      if (user) {
        setIsAuthenticated(true);
        setCurrentView('dashboard');
      }
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = authHelpers.onAuthStateChange((event, session) => {
      if (session?.user) {
        setIsAuthenticated(true);
        setCurrentView('dashboard');
      } else {
        setIsAuthenticated(false);
        setCurrentView('login');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleSignupSuccess = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isAuthenticated && currentView === 'dashboard') {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="transition-all duration-300 ease-in-out">
            {currentView === 'login' ? (
              <LoginForm 
                onSwitchToSignup={() => setCurrentView('signup')} 
                onLoginSuccess={handleLoginSuccess}
              />
            ) : (
              <SignupForm 
                onSwitchToLogin={() => setCurrentView('login')} 
                onSignupSuccess={handleSignupSuccess}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;