'use client';
import { Step12_ExerciseFrequency } from '@/components/dietamediterranea/step12-exercise-frequency';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ExerciseFrequencyPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { exerciseFrequency: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('exerciseFrequency', data.exerciseFrequency);
    router.push(`/dietamediterranea/weight-fluctuation?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step12_ExerciseFrequency onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function ExerciseFrequencyPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ExerciseFrequencyPageContent />
        </Suspense>
    )
}
