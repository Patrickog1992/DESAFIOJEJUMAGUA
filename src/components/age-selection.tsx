import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type AgeSelectionProps = {
  onSelectAge: (ageRange: string) => void;
};

const ageRanges = ['18 - 26', '27 - 38', '39 - 50', '51 +'];

export function AgeSelection({ onSelectAge }: AgeSelectionProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto text-center shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-headline">
          Vamos ajustar o seu Jejum de acordo com sua idade
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageRanges.map((ageRange) => (
            <div
              key={ageRange}
              className={cn(
                'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary hover:ring-2 hover:ring-primary'
              )}
              onClick={() => onSelectAge(ageRange)}
            >
              <Image
                src={`https://picsum.photos/300/300?grayscale&random=${ageRange}`}
                alt={`Idade ${ageRange}`}
                width={300}
                height={300}
                className="rounded-md w-full h-auto object-cover aspect-square bg-muted"
                data-ai-hint="person portrait"
              />
              <p className="font-semibold text-lg mt-3">{ageRange}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
