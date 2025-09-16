'use client';
import { Step15_PastDiets } from '@/components/dietamediterranea/step15-past-diets';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function PastDietsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { pastDiets: string[] }) => {
    const params = new URLSearchParams(searchParams.toString());
    data.pastDiets.forEach(diet => params.append('pastDiets', diet));
    router.push(`/dietamediterranea/comparison?${params.toString()}`);
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
            <Step15_PastDiets onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function PastDietsPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <PastDietsPageContent />
        </Suspense>
    )
}
