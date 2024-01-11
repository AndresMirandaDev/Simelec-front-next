'use client';
import { Card } from '@radix-ui/themes';
import React from 'react';
import {
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const MaterialsChart = () => {
  const data = [
    { amount: 20000, project: 'Projecto 1' },
    { amount: 1500000, project: 'Projecto 2' },
    { amount: 3000000, project: 'Projecto 3' },
    { amount: 1200000, project: 'Projecto 4' },
    { amount: 800000, project: 'Projecto 5' },
    { amount: 1000000, project: 'Projecto 6' },
    { amount: 1300000, project: 'Projecto 7' },
    { amount: 700000, project: 'Projecto 8' },
  ];
  return (
    <Card style={{ width: '100%' }} className="shadow-lg">
      <Text className="md:text-2xl">Gastos por projecto</Text>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <XAxis dataKey={'project'} className="hidden md:block" />

          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <Bar
            dataKey={'amount'}
            style={{ fill: 'var(--accent-9)' }}
            barSize={40}
          />
          <Line dataKey={'amount'} stroke="orange" />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default MaterialsChart;
