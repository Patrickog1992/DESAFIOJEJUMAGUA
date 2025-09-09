'use client';

import { BodyShapeSelection } from '@/components/body-shape-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function BodyShapePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (selectedShape: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('bodyShape', encodeURIComponent(selectedShape));
    
    router.push(
      `/jejum-intermitente?${params.toString()}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <BodyShapeSelection onContinue={handleContinue} />
    </main>
  );
}

export default function BodyShapePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <BodyShapePageContent />
    </Suspense>
  );
}
