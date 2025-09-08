'use client';

import { QuizStart } from '@/components/quiz-start';
import { useRouter } from 'next/navigation';

export default function GenderSelectionPage() {
  const router = useRouter();

  const handleSelectGender = (selectedGender: 'male' | 'female') => {
    router.push(`/idade?gender=${selectedGender}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <QuizStart onSelectGender={handleSelectGender} />
    </main>
  );
}
