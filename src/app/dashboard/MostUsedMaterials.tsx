'use client';
import { Box, Card } from '@radix-ui/themes';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Text,
  Tooltip,
} from 'recharts';

import { FaBoxesPacking } from 'react-icons/fa6';

const data01 = [
  {
    name: 'Fusibles eléctricos',
    value: 400,
    fill: '#f6f6f6',
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

const COLORS = [
  '#0000BB',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#4CAF50',
  '#2196F3',
  '#FF5252',
  '#FF4081',
  '#E040FB',
  '#FFD740',
  '#536DFE',
  '#FF6E40',
  '#69F0AE',
  '#00BFA5',
  '#FF8A65',
  '#FFD54F',
  '#8E24AA',
  '#00E676',
  '#795548',
];

const MostUsedMaterials = () => {
  return (
    <Card style={{ width: '100%' }} className="shadow-lg p-3">
      <Box className="flex justify-center items-center">
        <Box className="text-xl mr-3">
          <FaBoxesPacking />
        </Box>
        <Text className="md:text-xl font-bold text-zinc-600 text-center">
          Materiales más solicitados
        </Text>
      </Box>
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
            paddingAngle={2}
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default MostUsedMaterials;
