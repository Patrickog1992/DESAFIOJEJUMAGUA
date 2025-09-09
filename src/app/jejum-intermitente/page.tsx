'use client';

import { IntermittentFastingExperience } from '@/components/intermittent-fasting-experience';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function IntermittentFastingPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (experience: string) => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const goal = searchParams.get('goal');
    const bodyShape = searchParams.get('bodyShape');
    const fastingExperience = encodeURIComponent(experience);

    router.push(
      `/desafio?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center justify-center flex-grow w-full mb-8">
        <Image
          src="https://i.imgur.com/OIEU6Mk.png"
          alt="Logo"
          width={100}
          height={100}
          className="mb-8"
        />
        <IntermittentFastingExperience onContinue={handleContinue} />
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function IntermittentFastingPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <IntermittentFastingPageContent />
    </Suspense>
  );
}
