'use client';
import { Card } from '@radix-ui/themes';
import React from 'react';
import {
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Text,
  Tooltip,
  YAxis,
} from 'recharts';

const data01 = [
  {
    name: 'Fusibles eléctricos',
    value: 400,
  },
  {
    name: 'Interruptores de circuito',
    value: 300,
  },
  {
    name: 'Baterías recargables',
    value: 300,
  },
  {
    name: 'Transformadores',
    value: 200,
  },
  {
    name: 'Conectores eléctricos',
    value: 278,
  },
  {
    name: 'Terminales aislados',
    value: 189,
  },
];

const MostUsedMaterials = () => {
  return (
    <Card style={{ width: '100%' }} className="shadow-lg">
      <Text className="md:text-xl font-bold text-zinc-600">
        Materiales más solicitados
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default MostUsedMaterials;
