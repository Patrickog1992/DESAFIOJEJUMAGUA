'use client';

import { DailyRoutineSelection } from '@/components/daily-routine-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DailyRoutinePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (dailyRoutine: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('dailyRoutine', dailyRoutine);
    router.push(`/tempo-caminhada?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <DailyRoutineSelection onContinue={handleContinue} />
    </main>
  );
}

export default function DailyRoutinePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <DailyRoutinePageContent />
    </Suspense>
  );
}
