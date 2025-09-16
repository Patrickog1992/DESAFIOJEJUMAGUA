'use client';
import { Step5_Goal } from '@/components/dietamediterranea/step5-goal';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function GoalPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { goal: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('goal', data.goal);
    router.push(`/dietamediterranea/body-type?${params.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step5_Goal onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function GoalPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <GoalPageContent />
        </Suspense>
    )
}
