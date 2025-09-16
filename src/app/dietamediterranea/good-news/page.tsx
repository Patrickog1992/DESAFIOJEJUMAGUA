'use client';
import { Step29_GoodNews } from '@/components/dietamediterranea/step29-good-news';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function GoodNewsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/summary2?${searchParams.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step29_GoodNews onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function GoodNewsPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <GoodNewsPageContent />
        </Suspense>
    )
}
