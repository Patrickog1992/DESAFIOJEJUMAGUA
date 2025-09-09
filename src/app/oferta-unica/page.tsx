

'use client';

import { UniqueOffer } from '@/components/unique-offer';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function UniqueOfferPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    // This function is no longer the primary action, but can be kept for other purposes
    // or removed. For now, it will just log to the console.
    console.log('Checkout link clicked.');
  };

  const name = searchParams.get('name') || '';
  const currentWeight = Number(searchParams.get('weight'));
  const targetWeight = Number(searchParams.get('targetWeight'));
  const height = Number(searchParams.get('height'));
  const gender = searchParams.get('gender') as 'male' | 'female' | null;

  return (
    <main className="min-h-screen w-full bg-background">
      <UniqueOffer
        name={name}
        currentWeight={currentWeight}
        targetWeight={targetWeight}
        height={height}
        onContinue={handleContinue}
        gender={gender}
      />
    </main>
  );
}

export default function UniqueOfferPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <UniqueOfferPageContent />
    </Suspense>
  );
}
