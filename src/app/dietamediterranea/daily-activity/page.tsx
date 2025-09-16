'use client';
import { Step10_DailyActivity } from '@/components/dietamediterranea/step10-daily-activity';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DailyActivityPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { dailyActivity: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('dailyActivity', data.dailyActivity);
    router.push(`/dietamediterranea/energy-levels?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step10_DailyActivity onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function DailyActivityPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <DailyActivityPageContent />
        </Suspense>
    )
}
