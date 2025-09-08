'use client';

import { DinnerTimeSelection } from '@/components/dinner-time-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DinnerTimePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (dinnerTime: string) => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const goal = searchParams.get('goal');
    const bodyShape = searchParams.get('bodyShape');
    const fastingExperience = searchParams.get('fastingExperience');
    const hungerTimes = searchParams.get('hungerTimes');
    const breakfastTime = searchParams.get('breakfastTime');
    const lunchTime = searchParams.get('lunchTime');
    const dinnerTimeQuery = encodeURIComponent(dinnerTime);

    router.push(
      `/quiz?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}&hungerTimes=${hungerTimes}&breakfastTime=${breakfastTime}&lunchTime=${lunchTime}&dinnerTime=${dinnerTimeQuery}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <DinnerTimeSelection onContinue={handleContinue} />
    </main>
  );
}

export default function DinnerTimePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <DinnerTimePageContent />
    </Suspense>
  );
}
