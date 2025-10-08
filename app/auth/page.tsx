'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LoginForm } from '@/components/modules/auth/login-form';
import { RegisterForm } from '@/components/modules/auth/register-form';
import { ForgotPasswordForm } from '@/components/modules/auth/forgot-password-form';
import { VerificationForm } from '@/components/modules/auth/verification-form';

export type AuthView =
  | 'login'
  | 'register'
  | 'forgot-password'
  | 'verification';

export default function AuthPage() {
  const [currentView, setCurrentView] = useState<AuthView>('login');

  return (
    <div className='min-h-screen flex flex-col lg:flex-row'>
      {/* Left Column - Forms */}
      <div className='flex-1 flex flex-col items-center justify-center p-6 lg:p-12 bg-background'>
        {/* Logo */}
        <div className='mb-8'>
          <Image
            src='/LIPAD Vertical Identity - Full Color Core.png'
            alt='LIPAD Logo'
            width={120}
            height={120}
            className='object-contain'
            priority
          />
        </div>

        <div className='w-full max-w-md'>
          {currentView === 'login' && (
            <LoginForm onViewChange={setCurrentView} />
          )}
          {currentView === 'register' && (
            <RegisterForm onViewChange={setCurrentView} />
          )}
          {currentView === 'forgot-password' && (
            <ForgotPasswordForm onViewChange={setCurrentView} />
          )}
          {currentView === 'verification' && (
            <VerificationForm onViewChange={setCurrentView} />
          )}
        </div>
      </div>

      {/* Right Column - Logo Display */}
      <div className='hidden lg:flex flex-1 relative bg-gradient-to-br from-primary/10 to-accent/10 items-center justify-center'>
        <div className='text-center space-y-6 p-12'>
          <Image
            src='/LIPAD Vertical Identity - Full Color Core.png'
            alt='LIPAD Logo'
            width={300}
            height={300}
            className='object-contain mx-auto'
            priority
          />
        </div>
      </div>
    </div>
  );
}
