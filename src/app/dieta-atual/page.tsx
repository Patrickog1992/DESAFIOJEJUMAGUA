'use client';

import { CurrentDietSelection } from '@/components/current-diet-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CurrentDietPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (diet: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('currentDiet', diet);
    router.push(`/objetivo-desafio?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <CurrentDietSelection onContinue={handleContinue} />
    </main>
  );
}

export default function CurrentDietPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CurrentDietPageContent />
    </Suspense>
  );
}
