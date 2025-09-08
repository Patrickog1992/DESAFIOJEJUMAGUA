'use client';

import { IntermittentFastingExperience } from '@/components/intermittent-fasting-experience';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function IntermittentFastingPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (experience: string) => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const goal = searchParams.get('goal');
    const bodyShape = searchParams.get('bodyShape');
    const fastingExperience = encodeURIComponent(experience);

    router.push(
      `/quiz?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <IntermittentFastingExperience onContinue={handleContinue} />
    </main>
  );
}

export default function IntermittentFastingPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <IntermittentFastingPageContent />
    </Suspense>
  );
}
