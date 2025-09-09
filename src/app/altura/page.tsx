'use client';

import { HeightSelection } from '@/components/height-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HeightSelectionPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');
  const ageRange = searchParams.get('ageRange');

  const handleContinue = (height: string) => {
    if (gender && ageRange) {
      const params = new URLSearchParams({
        gender,
        ageRange,
        height,
      });
      router.push(`/peso?${params.toString()}`);
    } else {
      router.push('/');
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <HeightSelection onContinue={handleContinue} />
    </main>
  );
}

export default function HeightSelectionPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <HeightSelectionPageContent />
    </Suspense>
  );
}
