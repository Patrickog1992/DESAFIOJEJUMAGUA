'use client';
import { Step27_ExcludeProducts_Grains } from '@/components/dietamediterranea/step27-exclude-grains';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ExcludeGrainsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { excludedGrains: string[] }) => {
    const params = new URLSearchParams(searchParams.toString());
    data.excludedGrains.forEach(p => params.append('excludedGrains', p));
    router.push(`/dietamediterranea/loading?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step27_ExcludeProducts_Grains onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function ExcludeGrainsPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ExcludeGrainsPageContent />
        </Suspense>
    )
}
