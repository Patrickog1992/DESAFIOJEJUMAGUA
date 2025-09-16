'use client';
import { Step13_WeightFluctuation } from '@/components/dietamediterranea/step13-weight-fluctuation';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function WeightFluctuationPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { weightFluctuation: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('weightFluctuation', data.weightFluctuation);
    router.push(`/dietamediterranea/last-time-at-goal-weight?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step13_WeightFluctuation onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function WeightFluctuationPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <WeightFluctuationPageContent />
        </Suspense>
    )
}
