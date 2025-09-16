'use client';
import { Step26_ExcludeProducts_Veggies } from '@/components/dietamediterranea/step26-exclude-veggies';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ExcludeVeggiesPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { excludedVeggies: string[] }) => {
    const params = new URLSearchParams(searchParams.toString());
    data.excludedVeggies.forEach(p => params.append('excludedVeggies', p));
    router.push(`/dietamediterranea/exclude-grains?${params.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step26_ExcludeProducts_Veggies onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function ExcludeVeggiesPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ExcludeVeggiesPageContent />
        </Suspense>
    )
}
