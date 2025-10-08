'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { AuthView } from '@/app/auth/page';
import { registerSchema, type RegisterInput } from './lib/validations/auth';

interface RegisterFormProps {
  onViewChange: (view: AuthView) => void;
}

export function RegisterForm({ onViewChange }: RegisterFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('[v0] Registration attempt:', data);
    setIsLoading(false);

    // Redirect to verification
    onViewChange('verification');
  };

  return (
    <div className='space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>
          Create an account
        </h1>
        <p className='text-muted-foreground'>
          Enter your information to get started
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='name' className='text-foreground'>
            Full Name
          </Label>
          <Input
            id='name'
            type='text'
            placeholder='John Doe'
            {...register('name')}
            className='bg-secondary border-border text-foreground'
          />
          {errors.name && (
            <p className='text-sm text-red-500'>{errors.name.message}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='register-email' className='text-foreground'>
            Email
          </Label>
          <Input
            id='register-email'
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
          <Label htmlFor='register-password' className='text-foreground'>
            Password
          </Label>
          <Input
            id='register-password'
            type='password'
            placeholder='••••••••'
            {...register('password')}
            className='bg-secondary border-border text-foreground'
          />
          {errors.password && (
            <p className='text-sm text-red-500'>{errors.password.message}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='confirm-password' className='text-foreground'>
            Confirm Password
          </Label>
          <Input
            id='confirm-password'
            type='password'
            placeholder='••••••••'
            {...register('confirmPassword')}
            className='bg-secondary border-border text-foreground'
          />
          {errors.confirmPassword && (
            <p className='text-sm text-red-500'>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type='submit'
          className='w-full text-white hover:opacity-90'
          style={{ backgroundColor: '#003087', borderColor: '#003087' }}
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>

      <p className='text-center text-sm text-muted-foreground'>
        Already have an account?{' '}
        <button
          onClick={() => onViewChange('login')}
          className='font-medium transition-colors cursor-pointer'
        >
          Sign in
        </button>
      </p>
    </div>
  );
}
