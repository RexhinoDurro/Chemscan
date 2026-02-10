'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FlaskConical, Loader2 } from 'lucide-react';
import { registerSchema, type RegisterFormData } from '@/lib/utils/validation';
import { register as registerUser, login } from '@/lib/api/django-client';
import { useAuthStore } from '@/lib/stores/authStore';

export default function RegisterPage() {
  const router = useRouter();
  const { setTokens } = useAuthStore();
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setError('');
      await registerUser(data.email, data.username, data.password);
      const tokens = await login(data.email, data.password);
      setTokens(tokens.access, tokens.refresh);
      router.push('/');
    } catch (err: any) {
      const detail = err.response?.data;
      if (detail?.email) setError(detail.email[0]);
      else if (detail?.username) setError(detail.username[0]);
      else setError('Registration failed. Please try again.');
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <FlaskConical className="h-10 w-10 text-primary-600" />
        </div>
        <CardTitle className="text-2xl">Create Account</CardTitle>
        <CardDescription>Get started with ChemScan</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">{error}</div>
          )}
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input {...register('email')} type="email" placeholder="you@example.com" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Username</label>
            <Input {...register('username')} placeholder="Choose a username" />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <Input {...register('password')} type="password" placeholder="At least 8 characters" />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <Input {...register('confirmPassword')} type="password" placeholder="Repeat password" />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
            Create Account
          </Button>
          <p className="text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/login" className="text-primary-600 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
