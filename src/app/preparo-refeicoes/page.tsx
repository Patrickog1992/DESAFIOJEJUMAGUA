'use client';

import { MealPreparationSelection } from '@/components/meal-preparation-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function MealPreparationPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (mealPreparation: string) => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const goal = searchParams.get('goal');
    const bodyShape = searchParams.get('bodyShape');
    const fastingExperience = searchParams.get('fastingExperience');
    const hungerTimes = searchParams.get('hungerTimes');
    const breakfastTime = searchParams.get('breakfastTime');
    const lunchTime = searchParams.get('lunchTime');
    const dinnerTime = searchParams.get('dinnerTime');
    const mealPreparationQuery = encodeURIComponent(mealPreparation);

    router.push(
      `/quiz?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}&hungerTimes=${hungerTimes}&breakfastTime=${breakfastTime}&lunchTime=${lunchTime}&dinnerTime=${dinnerTime}&mealPreparation=${mealPreparationQuery}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <MealPreparationSelection onContinue={handleContinue} />
    </main>
  );
}

export default function MealPreparationPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <MealPreparationPageContent />
    </Suspense>
  );
}
