'use client';

import { WorkScheduleSelection } from '@/components/work-schedule-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function WorkSchedulePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (workSchedule: string) => {
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
    const activityLevel = searchParams.get('activityLevel');
    const workScheduleQuery = encodeURIComponent(workSchedule);

    router.push(
      `/quiz?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}&hungerTimes=${hungerTimes}&breakfastTime=${breakfastTime}&lunchTime=${lunchTime}&dinnerTime=${dinnerTime}&mealPreparation=${mealPreparation}&habitChange=${habitChange}&activityLevel=${activityLevel}&workSchedule=${workScheduleQuery}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <WorkScheduleSelection onContinue={handleContinue} />
    </main>
  );
}

export default function WorkSchedulePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <WorkSchedulePageContent />
    </Suspense>
  );
}
