'use client';

import { AgeSelection } from '@/components/age-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function AgeSelectionPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');

  const handleContinue = (age: string) => {
    if (gender) {
      router.push(`/objetivo?gender=${gender}&ageRange=${encodeURIComponent(age)}`);
    } else {
      // Fallback in case gender is not in the URL, though it should be.
      router.push('/');
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <AgeSelection onContinue={handleContinue} />
    </main>
  );
}

export default function AgeSelectionPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <AgeSelectionPageContent />
    </Suspense>
  );
}