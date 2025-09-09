'use client';

import { ChallengeGoalSelection } from '@/components/challenge-goal-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ChallengeGoalPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (challengeGoal: string) => {
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
    const workSchedule = searchParams.get('workSchedule');
    const dailyRoutine = searchParams.get('dailyRoutine');
    const challengeGoalQuery = encodeURIComponent(challengeGoal);

    // Redirect to the final page, preserving all query params
    router.push(
      `/final?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}&hungerTimes=${hungerTimes}&breakfastTime=${breakfastTime}&lunchTime=${lunchTime}&dinnerTime=${dinnerTime}&mealPreparation=${mealPreparation}&habitChange=${habitChange}&activityLevel=${activityLevel}&workSchedule=${workSchedule}&dailyRoutine=${dailyRoutine}&challengeGoal=${challengeGoalQuery}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <ChallengeGoalSelection onContinue={handleContinue} />
    </main>
  );
}

export default function ChallengeGoalPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ChallengeGoalPageContent />
    </Suspense>
  );
}
