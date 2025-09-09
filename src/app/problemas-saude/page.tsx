'use client';

import { HealthProblemsSelection } from '@/components/health-problems-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HealthProblemsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (healthProblems: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('healthProblems', healthProblems.join(','));
    router.push(`/progresso-acelerado?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <HealthProblemsSelection onContinue={handleContinue} />
    </main>
  );
}

export default function HealthProblemsPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <HealthProblemsPageContent />
    </Suspense>
  );
}
