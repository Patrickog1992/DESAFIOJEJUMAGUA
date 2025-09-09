'use client';

import { SleepDurationSelection } from '@/components/sleep-duration-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SleepDurationPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (sleepDuration: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sleepDuration', sleepDuration);
    router.push(`/objetivo-desafio?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <SleepDurationSelection onContinue={handleContinue} />
    </main>
  );
}

export default function SleepDurationPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SleepDurationPageContent />
    </Suspense>
  );
}
