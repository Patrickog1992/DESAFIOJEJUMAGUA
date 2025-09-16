'use client';
import { Step15_PastDiets } from '@/components/dietamediterranea/step15-past-diets';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PastDietsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { pastDiets: string[] }) => {
    const params = new URLSearchParams(searchParams.toString());
    data.pastDiets.forEach(diet => params.append('pastDiets', diet));
    router.push(`/dietamediterranea/comparison?${params.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step15_PastDiets onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function PastDietsPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <PastDietsPageContent />
        </Suspense>
    )
}
