'use client';
import { Step23_WeightLossTimeline } from '@/components/dietamediterranea/step23-weight-loss-timeline';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function WeightLossTimelinePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/meals-per-day?${searchParams.toString()}`);
  };
  
  const data = {
    currentWeight: Number(searchParams.get('currentWeight')),
    targetWeight: Number(searchParams.get('targetWeight')),
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step23_WeightLossTimeline onContinue={handleContinue} data={data} />
      </div>
    </main>
  );
}

export default function WeightLossTimelinePage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <WeightLossTimelinePageContent />
        </Suspense>
    )
}
