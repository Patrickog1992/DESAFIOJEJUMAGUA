'use client';

import { WaterIntakeSelection } from '@/components/water-intake-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function WaterIntakePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (waterIntake: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('waterIntake', waterIntake);
    router.push(`/objetivo-desafio?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <WaterIntakeSelection onContinue={handleContinue} />
    </main>
  );
}

export default function WaterIntakePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <WaterIntakePageContent />
    </Suspense>
  );
}
