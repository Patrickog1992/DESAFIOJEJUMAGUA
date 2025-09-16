'use client';
import { Step35_FinalOffer } from '@/components/dietamediterranea/step35-final-offer';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function FinalOfferPageContent() {
  const searchParams = useSearchParams();

  const data = {
    gender: searchParams.get('gender') as 'male' | 'female' | undefined,
    currentWeight: Number(searchParams.get('currentWeight')),
    targetWeight: Number(searchParams.get('targetWeight')),
    height: Number(searchParams.get('height')),
    goal: searchParams.get('goal') ?? undefined,
    age: Number(searchParams.get('age')),
  }

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step35_FinalOffer data={data} />
        </div>
      </main>
    </div>
  );
}

export default function FinalOfferPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <FinalOfferPageContent />
        </Suspense>
    )
}
