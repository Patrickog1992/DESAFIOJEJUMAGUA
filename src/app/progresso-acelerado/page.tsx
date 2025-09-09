'use client';

import { AcceleratedTimeline } from '@/components/accelerated-timeline';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function AcceleratedTimelinePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/plano-carregando?${params.toString()}`);
  };

  const name = searchParams.get('name') || '';
  const currentWeight = Number(searchParams.get('weight'));
  const targetWeight = Number(searchParams.get('targetWeight'));

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <AcceleratedTimeline
        name={name}
        currentWeight={currentWeight}
        targetWeight={targetWeight}
        onContinue={handleContinue}
      />
    </main>
  );
}

export default function AcceleratedTimelinePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <AcceleratedTimelinePageContent />
    </Suspense>
  );
}
