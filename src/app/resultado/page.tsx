'use client';

import { QuizResults } from '@/components/quiz-results';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ResultsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const score = parseInt(searchParams.get('score') || '0', 10);
  const total = parseInt(searchParams.get('total') || '0', 10);

  const handleRestart = () => {
    router.push('/');
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <QuizResults score={score} total={total} onRestart={handleRestart} />
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ResultsPageContent />
    </Suspense>
  );
}
