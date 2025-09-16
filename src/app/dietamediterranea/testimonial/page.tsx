'use client';
import { Step9_Testimonial } from '@/components/dietamediterranea/step9-testimonial';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function TestimonialPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = () => {
    router.push(`/dietamediterranea/daily-activity?${searchParams.toString()}`);
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
      <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Step9_Testimonial onContinue={handleContinue} />
        </div>
      </main>
    </div>
  );
}

export default function TestimonialPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <TestimonialPageContent />
        </Suspense>
    )
}
