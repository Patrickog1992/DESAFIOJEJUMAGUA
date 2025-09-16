'use client';
import { Step31_FatBurningRate } from '@/components/dietamediterranea/step31-fat-burning-rate';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function FatBurningRatePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/plan-ready?${searchParams.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step31_FatBurningRate onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function FatBurningRatePage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <FatBurningRatePageContent />
        </Suspense>
    )
}
