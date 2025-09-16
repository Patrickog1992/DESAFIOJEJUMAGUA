'use client';
import { Step24_MealsPerDay } from '@/components/dietamediterranea/step24-meals-per-day';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function MealsPerDayPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { mealsPerDay: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('mealsPerDay', data.mealsPerDay);
    router.push(`/dietamediterranea/exclude-protein?${params.toString()}`);
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
            <Step24_MealsPerDay onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function MealsPerDayPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <MealsPerDayPageContent />
        </Suspense>
    )
}
