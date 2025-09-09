'use client';

import { TargetWeightSelection } from '@/components/target-weight-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function TargetWeightPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const height = searchParams.get('height');
  const gender = searchParams.get('gender');

  const handleContinue = (targetWeight: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('targetWeight', targetWeight);
    router.push(`/objetivo?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <TargetWeightSelection
        onContinue={handleContinue}
        height={height ? parseInt(height, 10) : null}
        gender={gender as 'male' | 'female' | null}
      />
    </main>
  );
}

export default function TargetWeightPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <TargetWeightPageContent />
    </Suspense>
  );
}
