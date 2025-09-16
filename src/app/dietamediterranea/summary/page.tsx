'use client';
import { Step22_Summary } from '@/components/dietamediterranea/step22-summary';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SummaryPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/weight-loss-timeline?${searchParams.toString()}`);
  };

  const data = {
    gender: searchParams.get('gender') as 'male' | 'female' | undefined,
    height: Number(searchParams.get('height')),
    currentWeight: Number(searchParams.get('currentWeight')),
    goal: searchParams.get('goal') ?? undefined,
    exerciseFrequency: searchParams.get('exerciseFrequency') ?? undefined,
    age: Number(searchParams.get('age')),
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step22_Summary onContinue={handleContinue} data={data} />
      </div>
    </main>
  );
}

export default function SummaryPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <SummaryPageContent />
        </Suspense>
    )
}
