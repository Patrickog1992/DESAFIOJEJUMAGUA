'use client';
import { Step10_DailyActivity } from '@/components/dietamediterranea/step10-daily-activity';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

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
       <div className="flex flex-col items-center justify-center flex-grow w-full mb-8">
        <Image
            src="https://i.imgur.com/Ds0KCiY.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-8"
        />
        <div className="w-full max-w-4xl">
            <Step10_DailyActivity onContinue={handleContinue} />
        </div>
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Dieta mediterrânea todos os direitos reservados</p>
      </footer>
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
