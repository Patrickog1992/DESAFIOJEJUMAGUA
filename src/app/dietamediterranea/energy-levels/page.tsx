'use client';
import { Step11_EnergyLevels } from '@/components/dietamediterranea/step11-energy-levels';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function EnergyLevelsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { energyLevels: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('energyLevels', data.energyLevels);
    router.push(`/dietamediterranea/exercise-frequency?${params.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step11_EnergyLevels onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function EnergyLevelsPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <EnergyLevelsPageContent />
        </Suspense>
    )
}
