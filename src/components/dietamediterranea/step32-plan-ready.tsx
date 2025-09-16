'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Props = {
  onContinue: () => void;
  currentWeight?: number;
  targetWeight?: number;
};

export function Step32_PlanReady({ onContinue, currentWeight, targetWeight }: Props) {
  const startWeight = currentWeight || 80;
  const endWeight = targetWeight || startWeight - 10;

  const totalLoss = startWeight - endWeight;
  const weeklyLoss = totalLoss / 4;

  const week1 = startWeight - weeklyLoss;
  const week2 = startWeight - weeklyLoss * 2;
  const week3 = startWeight - weeklyLoss * 3;

  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">O seu plano personalizado está pronto!</CardTitle>
        <CardDescription>Obtenha resultados visíveis em 4 semanas</CardDescription>
      </CardHeader>
      <CardContent>
          <Table>
              <TableHeader>
                  <TableRow>
                      <TableHead>O seu peso</TableHead>
                      <TableHead>Agora</TableHead>
                      <TableHead>Após 4 semanas</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                  <TableRow>
                      <TableCell>Semana 1</TableCell>
                      <TableCell>{startWeight.toFixed(1)} kg</TableCell>
                      <TableCell>{week1.toFixed(1)} kg</TableCell>
                  </TableRow>
                   <TableRow>
                      <TableCell>Semana 2</TableCell>
                      <TableCell></TableCell>
                      <TableCell>{week2.toFixed(1)} kg</TableCell>
                  </TableRow>
                   <TableRow>
                      <TableCell>Semana 3</TableCell>
                       <TableCell></TableCell>
                      <TableCell>{week3.toFixed(1)} kg</TableCell>
                  </TableRow>
                   <TableRow>
                      <TableCell>Semana 4</TableCell>
                       <TableCell></TableCell>
                      <TableCell>{endWeight.toFixed(1)} kg</TableCell>
                  </TableRow>
              </TableBody>
          </Table>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
