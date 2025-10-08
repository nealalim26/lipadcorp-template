import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-background px-4'>
      <div className='max-w-2xl w-full text-center space-y-12'>
        {/* Logo */}
        <div className='flex justify-center'>
          <Image
            src='/LIPAD Vertical Identity - Full Color Core.png'
            alt='LIPAD Logo'
            width={300}
            height={300}
            className='object-contain'
            priority
          />
        </div>

        {/* Coming Soon Content */}
        <div className='space-y-6'>
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground'>
              Coming Soon
            </h1>
            <p className='text-lg text-muted-foreground max-w-lg mx-auto'>
              We&apos;re working hard to bring you a comprehensive human
              resources management solution. Stay tuned for updates!
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
            <Button
              asChild
              size='lg'
              style={{ backgroundColor: '#003087', borderColor: '#003087' }}
            >
              <Link href='/auth'>Get Early Access</Link>
            </Button>
            <Button
              variant='outline'
              size='lg'
              asChild
              style={{ borderColor: '#003087', color: '#003087' }}
            >
              <Link href='mailto:neal.alim@lipadcorp.com'>Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className='pt-8 border-t border-border'>
          <p className='text-sm text-muted-foreground'>
            Luzon International Premiere Airport Development Corporation
          </p>
        </div>
      </div>
    </div>
  );
}
