#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// Generate a random secret key
const secretKey = crypto.randomBytes(32).toString('base64');

// Environment Setup Script
console.log('🚀 Setting up environment variables...');

// Environment variables content
const envContent = `NEXT_PUBLIC_ENVIRONMENT="development"
AUTH_URL="http://localhost:3000"
AUTH_SECRET="${secretKey}"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE=your-supabase-publishable-key
`;

// Check if .env.local file already exists
const envPath = path.join(process.cwd(), '.env.local');

if (fs.existsSync(envPath)) {
  console.log(
    '⚠️  .env.local file already exists. Skipping creation to preserve existing configuration.'
  );
  console.log(
    '📝 If you need to update environment variables, please edit the .env.local file manually.'
  );
  process.exit(0);
}

try {
  fs.writeFileSync(envPath, envContent, 'utf8');
  console.log('✅ Environment variables created successfully in .env.local');
  console.log(
    '📝 Please update the Google OAuth credentials with your actual values'
  );
} catch (error) {
  console.error('❌ Error creating environment file:', error.message);
  process.exit(1);
}
