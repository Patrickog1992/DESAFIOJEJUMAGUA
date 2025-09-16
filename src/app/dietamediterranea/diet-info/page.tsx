'use client';
import { Step4_DietInfo } from '@/components/dietamediterranea/step4-diet-info';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DietInfoPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/goal?${searchParams.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step4_DietInfo onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function DietInfoPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <DietInfoPageContent />
        </Suspense>
    )
}
