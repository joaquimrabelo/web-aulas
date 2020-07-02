import React from 'react';

import { AuthProvider } from './auth';

export default function AdminPanelProvider({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};