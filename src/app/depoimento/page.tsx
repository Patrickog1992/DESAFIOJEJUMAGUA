'use client';

import { TestimonialPage } from '@/components/testimonial-page';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DepoimentoPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/tempo-caminhada?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <TestimonialPage onContinue={handleContinue} />
    </main>
  );
}

export default function DepoimentoPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <DepoimentoPageContent />
    </Suspense>
  );
}
