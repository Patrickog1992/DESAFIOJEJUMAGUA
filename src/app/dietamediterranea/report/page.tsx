'use client';
import { Step4a_Report } from '@/components/dietamediterranea/step4a-report';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function ReportPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/goal?${searchParams.toString()}`);
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
        <div className="w-full max-w-2xl">
            <Step4a_Report onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function ReportPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ReportPageContent />
        </Suspense>
    )
}
