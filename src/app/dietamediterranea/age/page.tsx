'use client';
import { Step21_Age } from '@/components/dietamediterranea/step21-age';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function AgePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { age: number }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('age', data.age.toString());
    router.push(`/dietamediterranea/summary?${params.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step21_Age onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function AgePage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <AgePageContent />
        </Suspense>
    )
}
