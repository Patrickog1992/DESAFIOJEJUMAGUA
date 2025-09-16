'use client';
import { Step24_MealsPerDay } from '@/components/dietamediterranea/step24-meals-per-day';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function MealsPerDayPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { mealsPerDay: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('mealsPerDay', data.mealsPerDay);
    router.push(`/dietamediterranea/exclude-protein?${params.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step24_MealsPerDay onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function MealsPerDayPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <MealsPerDayPageContent />
        </Suspense>
    )
}
