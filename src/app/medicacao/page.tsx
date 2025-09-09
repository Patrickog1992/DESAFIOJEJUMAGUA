'use client';

import { MedicationSelection } from '@/components/medication-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function MedicationPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (medication: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('medication', medication);
    router.push(`/objetivo-desafio?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <MedicationSelection onContinue={handleContinue} />
    </main>
  );
}

export default function MedicationPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <MedicationPageContent />
    </Suspense>
  );
}
