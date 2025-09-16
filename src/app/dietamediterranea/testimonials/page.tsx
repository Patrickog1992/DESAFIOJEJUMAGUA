'use client';
import { Step34_Testimonials } from '@/components/dietamediterranea/step34-testimonials';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function TestimonialsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/final-offer?${searchParams.toString()}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Step34_Testimonials onContinue={handleContinue} />
      </div>
    </main>
  );
}

export default function TestimonialsPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <TestimonialsPageContent />
        </Suspense>
    )
}
