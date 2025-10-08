'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { AuthView } from '@/app/auth/page';
import { loginSchema, type LoginInput } from './lib/validations/auth';

interface LoginFormProps {
  onViewChange: (view: AuthView) => void;
}

export function LoginForm({ onViewChange }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('[v0] Login attempt:', data);
    setIsLoading(false);
  };

  return (
    <div className='space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>
          Welcome back
        </h1>
        <p className='text-muted-foreground'>
          Enter your credentials to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='email' className='text-foreground'>
            Email
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='name@example.com'
            {...register('email')}
            className='bg-secondary border-border text-foreground'
          />
          {errors.email && (
            <p className='text-sm text-red-500'>{errors.email.message}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='password' className='text-foreground'>
            Password
          </Label>
          <Input
            id='password'
            type='password'
            placeholder='••••••••'
            {...register('password')}
            className='bg-secondary border-border text-foreground'
          />
          {errors.password && (
            <p className='text-sm text-red-500'>{errors.password.message}</p>
          )}
        </div>

        <Button
          type='submit'
          className='w-full text-white hover:opacity-90'
          style={{ backgroundColor: '#003087', borderColor: '#003087' }}
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>

      <div className='space-y-4'>
        <button
          onClick={() => onViewChange('forgot-password')}
          className='text-sm transition-colors cursor-pointer'
        >
          Forgot your password?
        </button>

        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t border-border' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>Or</span>
          </div>
        </div>

        <p className='text-center text-sm text-muted-foreground'>
          Don&apos;t have an account?{' '}
          <button
            onClick={() => onViewChange('register')}
            className='font-medium transition-colors cursor-pointer'
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
