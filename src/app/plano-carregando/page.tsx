'use client';

import { LoadingPlan } from '@/components/loading-plan';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoadingPlanPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleComplete = () => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/resultado-plano?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <LoadingPlan onComplete={handleComplete} />
    </main>
  );
}

export default function LoadingPlanPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <LoadingPlanPageContent />
    </Suspense>
  );
}
