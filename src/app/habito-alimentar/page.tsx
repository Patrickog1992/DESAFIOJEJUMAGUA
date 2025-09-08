'use client';

import { HabitChangeSelection } from '@/components/habit-change-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HabitChangePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (habitChange: string) => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const goal = searchParams.get('goal');
    const bodyShape = searchParams.get('bodyShape');
    const fastingExperience = searchParams.get('fastingExperience');
    const hungerTimes = searchParams.get('hungerTimes');
    const breakfastTime = searchParams.get('breakfastTime');
    const lunchTime = searchParams.get('lunchTime');
    const dinnerTime = searchParams.get('dinnerTime');
    const mealPreparation = searchParams.get('mealPreparation');
    const habitChangeQuery = encodeURIComponent(habitChange);

    router.push(
      `/quiz?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}&hungerTimes=${hungerTimes}&breakfastTime=${breakfastTime}&lunchTime=${lunchTime}&dinnerTime=${dinnerTime}&mealPreparation=${mealPreparation}&habitChange=${habitChangeQuery}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <HabitChangeSelection onContinue={handleContinue} />
    </main>
  );
}

export default function HabitChangePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <HabitChangePageContent />
    </Suspense>
  );
}
