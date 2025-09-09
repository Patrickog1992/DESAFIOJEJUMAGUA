'use client';

import { WalkingTimeSelection } from '@/components/walking-time-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function WalkingTimePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (walkingTime: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('walkingTime', walkingTime);
    router.push(`/objetivo-desafio?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <WalkingTimeSelection onContinue={handleContinue} />
    </main>
  );
}

export default function WalkingTimePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <WalkingTimePageContent />
    </Suspense>
  );
}
