'use client';

import { FinalPage } from '@/components/final-page';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function FinalPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    // Preserve all existing query parameters
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/idade?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <FinalPage onContinue={handleContinue} />
    </main>
  );
}

export default function FinalPageRoute() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <FinalPageContent />
    </Suspense>
  );
}
