'use client';

import { LunchTimeSelection } from '@/components/lunch-time-selection';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function LunchTimePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (lunchTime: string) => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const goal = searchParams.get('goal');
    const bodyShape = searchParams.get('bodyShape');
    const fastingExperience = searchParams.get('fastingExperience');
    const hungerTimes = searchParams.get('hungerTimes');
    const breakfastTime = searchParams.get('breakfastTime');
    const lunchTimeQuery = encodeURIComponent(lunchTime);

    router.push(
      `/jantar?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}&hungerTimes=${hungerTimes}&breakfastTime=${breakfastTime}&lunchTime=${lunchTimeQuery}`
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
        <LunchTimeSelection onContinue={handleContinue} />
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function LunchTimePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <LunchTimePageContent />
    </Suspense>
  );
}
