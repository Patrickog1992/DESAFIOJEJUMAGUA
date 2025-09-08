'use client';

import { HungerTimeSelection } from '@/components/hunger-time-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HungerTimePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (hungerTimes: string[]) => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const goal = searchParams.get('goal');
    const bodyShape = searchParams.get('bodyShape');
    const fastingExperience = searchParams.get('fastingExperience');
    const hungerTimesQuery = hungerTimes
      .map(t => encodeURIComponent(t))
      .join(',');

    router.push(
      `/quiz?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}&hungerTimes=${hungerTimesQuery}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <HungerTimeSelection onContinue={handleContinue} />
    </main>
  );
}

export default function HungerTimePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <HungerTimePageContent />
    </Suspense>
  );
}
