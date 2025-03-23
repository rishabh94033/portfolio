'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import BackgroundMusic from './components/backgroundMusic';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
<BackgroundMusic />
{children}
    </SessionProvider>
  );
};