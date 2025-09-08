'use client';

import { ActivityLevelSelection } from '@/components/activity-level-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ActivityLevelPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (activityLevel: string) => {
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
    const habitChange = searchParams.get('habitChange');
    const activityLevelQuery = encodeURIComponent(activityLevel);

    router.push(
      `/quiz?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}&hungerTimes=${hungerTimes}&breakfastTime=${breakfastTime}&lunchTime=${lunchTime}&dinnerTime=${dinnerTime}&mealPreparation=${mealPreparation}&habitChange=${habitChange}&activityLevel=${activityLevelQuery}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <ActivityLevelSelection onContinue={handleContinue} />
    </main>
  );
}

export default function ActivityLevelPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ActivityLevelPageContent />
    </Suspense>
  );
}
