'use client';
import { Step19_CurrentWeight } from '@/components/dietamediterranea/step19-current-weight';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CurrentWeightPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const height = searchParams.get('height');

  const handleContinue = (data: { currentWeight: number }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('currentWeight', data.currentWeight.toString());
    router.push(`/dietamediterranea/target-weight?${params.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step19_CurrentWeight onContinue={handleContinue} height={height ? parseInt(height) : undefined} />
        </div>
      </main>
    </div>
  );
}

export default function CurrentWeightPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <CurrentWeightPageContent />
        </Suspense>
    )
}
