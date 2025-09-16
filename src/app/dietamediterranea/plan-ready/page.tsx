'use client';
import { Step32_PlanReady } from '@/components/dietamediterranea/step32-plan-ready';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PlanReadyPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/what-you-get?${searchParams.toString()}`);
  };

  const currentWeight = searchParams.get('currentWeight');
  const targetWeight = searchParams.get('targetWeight');

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step32_PlanReady
            onContinue={handleContinue}
            currentWeight={currentWeight ? Number(currentWeight) : undefined}
            targetWeight={targetWeight ? Number(targetWeight) : undefined}
          />
      </div>
    </main>
  );
}

export default function PlanReadyPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <PlanReadyPageContent />
        </Suspense>
    )
}
