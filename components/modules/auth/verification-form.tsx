'use client';

import { useState } from 'react';

import type React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { AuthView } from '@/app/auth/page';
import {
  verificationSchema,
  type VerificationInput,
} from './lib/validations/auth';

interface VerificationFormProps {
  onViewChange: (view: AuthView) => void;
}

export function VerificationForm({ onViewChange }: VerificationFormProps) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerificationInput>({
    resolver: zodResolver(verificationSchema),
  });

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    setValue('code', newCode.join(''));

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const onSubmit = async (data: VerificationInput) => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('[v0] Verification code:', data.code);
    setIsLoading(false);

    onViewChange('login');
  };

  const handleResend = async () => {
    console.log('[v0] Resending verification code');
    await new Promise(resolve => setTimeout(resolve, 500));
  };

  return (
    <div className='space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>
          Verify your email
        </h1>
        <p className='text-muted-foreground'>
          We&apos;ve sent a 6-digit code to your email
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-2'>
          <Label className='text-foreground'>Verification Code</Label>
          <div className='flex gap-2 justify-center'>
            {code.map((digit, index) => (
              <Input
                key={index}
                id={`code-${index}`}
                type='text'
                inputMode='numeric'
                maxLength={1}
                value={digit}
                onChange={e => handleChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                className='w-12 h-12 text-center text-lg font-semibold bg-secondary border-border text-foreground'
              />
            ))}
          </div>
          {errors.code && (
            <p className='text-sm text-red-500 text-center'>
              {errors.code.message}
            </p>
          )}
        </div>

        <Button
          type='submit'
          className='w-full text-white hover:opacity-90'
          style={{ backgroundColor: '#003087', borderColor: '#003087' }}
          disabled={isLoading || code.some(d => !d)}
        >
          {isLoading ? 'Verifying...' : 'Verify email'}
        </Button>
      </form>

      <div className='text-center space-y-2'>
        <p className='text-sm text-muted-foreground'>
          Didn&apos;t receive the code?{' '}
          <button
            onClick={handleResend}
            className='text-accent hover:text-accent/80 font-medium transition-colors'
          >
            Resend
          </button>
        </p>
        <button
          onClick={() => onViewChange('login')}
          className='text-sm text-muted-foreground hover:text-foreground transition-colors'
        >
          Back to login
        </button>
      </div>
    </div>
  );
}
