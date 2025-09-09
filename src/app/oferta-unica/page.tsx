
'use client';

import { UniqueOffer } from '@/components/unique-offer';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function UniqueOfferPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    // This would typically go to a checkout page
    // For now, we can just log it or redirect to the start
    console.log('Redirecting to checkout...');
    router.push('/');
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
