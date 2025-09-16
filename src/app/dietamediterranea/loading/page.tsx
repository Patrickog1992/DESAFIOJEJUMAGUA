'use client';
import { Step28_Loading } from '@/components/dietamediterranea/step28-loading';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function LoadingPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) {
      router.push(`/dietamediterranea/good-news?${searchParams.toString()}`);
    }
  }, [isComplete, router, searchParams]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step28_Loading onComplete={() => setIsComplete(true)} />
      </div>
    </main>
  );
}

export default function LoadingPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <LoadingPageContent />
        </Suspense>
    )
}
