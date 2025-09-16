'use client';
import { Step11_EnergyLevels } from '@/components/dietamediterranea/step11-energy-levels';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function EnergyLevelsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { energyLevels: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('energyLevels', data.energyLevels);
    router.push(`/dietamediterranea/exercise-frequency?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
       <div className="flex flex-col items-center justify-center flex-grow w-full mb-8">
        <Image
            src="https://i.imgur.com/Ds0KCiY.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-8"
        />
        <div className="w-full max-w-4xl">
            <Step11_EnergyLevels onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function EnergyLevelsPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <EnergyLevelsPageContent />
        </Suspense>
    )
}
