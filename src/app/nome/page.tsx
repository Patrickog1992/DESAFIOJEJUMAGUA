'use client';

import { NameSelection } from '@/components/name-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function NameSelectionPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('name', name);
    router.push(`/objetivo?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <NameSelection onContinue={handleContinue} />
    </main>
  );
}

export default function NameSelectionPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <NameSelectionPageContent />
    </Suspense>
  );
}
