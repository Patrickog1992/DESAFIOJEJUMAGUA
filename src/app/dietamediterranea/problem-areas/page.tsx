'use client';
import { Step8_ProblemAreas } from '@/components/dietamediterranea/step8-problem-areas';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function ProblemAreasPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleContinue = (data: { problemAreas: string[] }) => {
    const params = new URLSearchParams(searchParams.toString());
    data.problemAreas.forEach(area => params.append('problemAreas', area));
    router.push(`/dietamediterranea/testimonial?${params.toString()}`);
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
            <Step8_ProblemAreas onContinue={handleContinue} />
        </div>
      </div>
    </main>
  );
}

export default function ProblemAreasPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ProblemAreasPageContent />
        </Suspense>
    )
}
