'use client';
import { Step26_ExcludeProducts_Veggies } from '@/components/dietamediterranea/step26-exclude-veggies';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function ExcludeVeggiesPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { excludedVeggies: string[] }) => {
    const params = new URLSearchParams(searchParams.toString());
    data.excludedVeggies.forEach(p => params.append('excludedVeggies', p));
    router.push(`/dietamediterranea/exclude-grains?${params.toString()}`);
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
            <Step26_ExcludeProducts_Veggies onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function ExcludeVeggiesPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ExcludeVeggiesPageContent />
        </Suspense>
    )
}
