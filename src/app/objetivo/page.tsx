'use client';

import { GoalSelection } from '@/components/goal-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function GoalSelectionPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (selectedGoals: string[]) => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const height = searchParams.get('height');
    const goalsQuery = selectedGoals.map(g => encodeURIComponent(g)).join(',');

    router.push(
      `/formato-corpo?gender=${gender}&ageRange=${ageRange}&height=${height}&goal=${goalsQuery}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <GoalSelection onContinue={handleContinue} />
    </main>
  );
}

export default function GoalSelectionPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <GoalSelectionPageContent />
    </Suspense>
  );
}
