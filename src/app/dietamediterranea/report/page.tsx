'use client';
import { Step4a_Report } from '@/components/dietamediterranea/step4a-report';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ReportPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/goal?${searchParams.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl">
        <Step4a_Report onContinue={handleContinue} />
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
