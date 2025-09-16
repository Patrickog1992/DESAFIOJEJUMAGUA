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

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step32_PlanReady onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function PlanReadyPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <PlanReadyPageContent />
        </Suspense>
    )
}
