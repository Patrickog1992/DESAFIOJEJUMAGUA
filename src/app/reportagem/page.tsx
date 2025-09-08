'use client';

import { ReportPage } from '@/components/report-page';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ReportPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    const gender = searchParams.get('gender');
    const ageRange = searchParams.get('ageRange');
    const goal = searchParams.get('goal');
    const bodyShape = searchParams.get('bodyShape');
    const fastingExperience = searchParams.get('fastingExperience');

    router.push(
      `/quiz?gender=${gender}&ageRange=${ageRange}&goal=${goal}&bodyShape=${bodyShape}&fastingExperience=${fastingExperience}`
    );
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <ReportPage onContinue={handleContinue} />
    </main>
  );
}

export default function ReportagemPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ReportPageContent />
    </Suspense>
  );
}
