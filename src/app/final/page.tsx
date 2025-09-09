'use client';

import { FinalPage } from '@/components/final-page';
import { Suspense } from 'react';

function FinalPageContent() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <FinalPage />
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
