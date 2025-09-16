'use client';
import { Step17_MainReason } from '@/components/dietamediterranea/step17-main-reason';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function MainReasonPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { mainReason: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('mainReason', data.mainReason);
    router.push(`/dietamediterranea/height?${params.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step17_MainReason onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function MainReasonPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <MainReasonPageContent />
        </Suspense>
    )
}
