'use client';

import { BreakfastTimeSelection } from '@/components/breakfast-time-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function BreakfastTimePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (breakfastTime: string) => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const goal = searchParams.get('goal');
    const bodyShape = searchParams.get('bodyShape');
    const fastingExperience = searchParams.get('fastingExperience');
    const hungerTimes = searchParams.get('hungerTimes');
    const breakfastTimeQuery = encodeURIComponent(breakfastTime);

    router.push(
      `/quiz?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}&hungerTimes=${hungerTimes}&breakfastTime=${breakfastTimeQuery}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <BreakfastTimeSelection onContinue={handleContinue} />
    </main>
  );
}

export default function BreakfastTimePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <BreakfastTimePageContent />
    </Suspense>
  );
}
