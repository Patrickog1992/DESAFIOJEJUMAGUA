'use client';
import { Step16_Comparison } from '@/components/dietamediterranea/step16-comparison';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ComparisonPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/main-reason?${searchParams.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step16_Comparison onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function ComparisonPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ComparisonPageContent />
        </Suspense>
    )
}
