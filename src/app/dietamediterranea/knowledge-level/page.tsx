'use client';
import { Step3_KnowledgeLevel } from '@/components/dietamediterranea/step3-knowledge-level';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function KnowledgeLevelPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { knowledge: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('knowledge', data.knowledge);
    router.push(`/dietamediterranea/diet-info?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step3_KnowledgeLevel onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function KnowledgeLevelPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <KnowledgeLevelPageContent />
        </Suspense>
    )
}
