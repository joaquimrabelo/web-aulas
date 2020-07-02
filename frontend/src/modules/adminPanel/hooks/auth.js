import React, { createContext, useState, useCallback, useContext } from 'react';

import api from '../../../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('WebAulas:painel:token');
    const user = localStorage.getItem('WebAulas:painel:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {

    const response = await api.post('painel/login', { email, password });

    const { token, user, auth } = response.data;

    if (auth) {
      localStorage.setItem('WebAulas:painel:token', token);
      localStorage.setItem('WebAulas:painel:user', JSON.stringify(user));
      setUserData({ token, user });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('WebAulas:painel:token');
    localStorage.removeItem('WebAulas:painel:user');
    setUserData({});
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user: userData.user,
      token: userData.token,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useContext precisa ser usado com o AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };