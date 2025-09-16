'use client';
import { Step28_Loading } from '@/components/dietamediterranea/step28-loading';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoadingPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleComplete = () => {
    router.push(`/dietamediterranea/good-news?${searchParams.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step28_Loading onComplete={handleComplete} />
        </div>
      </main>
    </div>
  );
}

export default function LoadingPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <LoadingPageContent />
        </Suspense>
    )
}
