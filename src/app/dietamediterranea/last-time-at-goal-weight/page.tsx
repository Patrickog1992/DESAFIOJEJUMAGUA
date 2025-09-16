'use client';
import { Step14_LastTimeAtGoalWeight } from '@/components/dietamediterranea/step14-last-time-at-goal-weight';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LastTimeAtGoalWeightPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { lastTimeAtGoalWeight: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lastTimeAtGoalWeight', data.lastTimeAtGoalWeight);
    router.push(`/dietamediterranea/past-diets?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step14_LastTimeAtGoalWeight onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function LastTimeAtGoalWeightPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <LastTimeAtGoalWeightPageContent />
        </Suspense>
    )
}
