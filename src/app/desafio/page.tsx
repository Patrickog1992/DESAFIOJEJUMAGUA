'use client';

import { ChallengeIntro } from '@/components/challenge-intro';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ChallengeIntroPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const goal = searchParams.get('goal');
    const bodyShape = searchParams.get('bodyShape');
    const fastingExperience = searchParams.get('fastingExperience');

    router.push(
      `/quiz?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <ChallengeIntro onContinue={handleContinue} />
    </main>
  );
}

export default function ChallengeIntroPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ChallengeIntroPageContent />
    </Suspense>
  );
}
