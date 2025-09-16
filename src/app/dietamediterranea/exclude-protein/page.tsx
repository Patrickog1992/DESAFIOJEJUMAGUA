'use client';
import { Step25_ExcludeProducts_Protein } from '@/components/dietamediterranea/step25-exclude-protein';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ExcludeProteinPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { excludedProteins: string[] }) => {
    const params = new URLSearchParams(searchParams.toString());
    data.excludedProteins.forEach(p => params.append('excludedProteins', p));
    router.push(`/dietamediterranea/exclude-veggies?${params.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step25_ExcludeProducts_Protein onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function ExcludeProteinPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ExcludeProteinPageContent />
        </Suspense>
    )
}
