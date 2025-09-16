'use client';
import { Step5_Goal } from '@/components/dietamediterranea/step5-goal';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function GoalPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { goals: string[] }) => {
    const params = new URLSearchParams(searchParams.toString());
    data.goals.forEach(goal => params.append('goal', goal));
    router.push(`/dietamediterranea/body-type?${params.toString()}`);
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
            <Step5_Goal onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function GoalPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <GoalPageContent />
        </Suspense>
    )
}
