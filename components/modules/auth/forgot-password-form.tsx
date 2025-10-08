'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import type { AuthView } from '@/app/auth/page';
import {
  forgotPasswordSchema,
  type ForgotPasswordInput,
} from './lib/validations/auth';

interface ForgotPasswordFormProps {
  onViewChange: (view: AuthView) => void;
}

export function ForgotPasswordForm({ onViewChange }: ForgotPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordInput) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('[v0] Password reset request:', data);
    setSubmittedEmail(data.email);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className='space-y-6'>
        <div className='space-y-2 text-center'>
          <div className='mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4'>
            <svg
              className='w-6 h-6 text-accent'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
          </div>
          <h1 className='text-3xl font-bold tracking-tight text-foreground'>
            Check your email
          </h1>
          <p className='text-muted-foreground'>
            We&apos;ve sent a password reset link to{' '}
            <strong className='text-foreground'>{submittedEmail}</strong>
          </p>
        </div>

        <Button
          onClick={() => onViewChange('login')}
          variant='outline'
          className='w-full border-border text-foreground hover:bg-secondary'
        >
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back to login
        </Button>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <button
        onClick={() => onViewChange('login')}
        className='flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors'
      >
        <ArrowLeft className='w-4 h-4 mr-2' />
        Back to login
      </button>

      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>
          Forgot password?
        </h1>
        <p className='text-muted-foreground'>
          No worries, we&apos;ll send you reset instructions
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='reset-email' className='text-foreground'>
            Email
          </Label>
          <Input
            id='reset-email'
            type='email'
            placeholder='name@example.com'
            {...register('email')}
            className='bg-secondary border-border text-foreground'
          />
          {errors.email && (
            <p className='text-sm text-red-500'>{errors.email.message}</p>
          )}
        </div>

        <Button
          type='submit'
          className='w-full text-white hover:opacity-90'
          style={{ backgroundColor: '#003087', borderColor: '#003087' }}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Reset password'}
        </Button>
      </form>
    </div>
  );
}
