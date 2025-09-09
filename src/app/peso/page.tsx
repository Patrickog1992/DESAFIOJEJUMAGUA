'use client';

import { WeightSelection } from '@/components/weight-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function WeightSelectionPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const height = searchParams.get('height');

  const handleContinue = (weight: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('weight', weight);
    router.push(`/objetivo?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <WeightSelection
        onContinue={handleContinue}
        height={height ? parseInt(height, 10) : null}
      />
    </main>
  );
}

export default function WeightSelectionPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <WeightSelectionPageContent />
    </Suspense>
  );
}
