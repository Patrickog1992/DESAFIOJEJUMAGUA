'use client';
import { Step33_WhatYouGet } from '@/components/dietamediterranea/step33-what-you-get';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function WhatYouGetPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/testimonials?${searchParams.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step33_WhatYouGet onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function WhatYouGetPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <WhatYouGetPageContent />
        </Suspense>
    )
}
