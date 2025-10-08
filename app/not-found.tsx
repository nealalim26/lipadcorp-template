import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-background px-4'>
      <div className='max-w-md w-full text-center space-y-8'>
        {/* Logo */}
        <div className='flex justify-center'>
          <Image
            src='/LIPAD Vertical Identity - Full Color Core.png'
            alt='LIPAD Logo'
            width={200}
            height={200}
            className='object-contain'
            priority
          />
        </div>

        {/* Error Content */}
        <div className='space-y-4'>
          <div className='space-y-2'>
            <h1 className='text-6xl font-bold text-primary'>404</h1>
            <h2 className='text-2xl font-semibold text-foreground'>
              Page Not Found
            </h2>
            <p className='text-muted-foreground'>
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              style={{ backgroundColor: '#003087', borderColor: '#003087' }}
            >
              <Link href='/'>Go Home</Link>
            </Button>
            <Button
              variant='outline'
              asChild
              style={{ borderColor: '#003087', color: '#003087' }}
            >
              <Link href='/auth'>Sign In</Link>
            </Button>
          </div>
        </div>

        {/* Additional Help */}
        <div className='pt-8 border-t border-border'>
          <p className='text-sm text-muted-foreground'>
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
