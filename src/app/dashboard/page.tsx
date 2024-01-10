'use client';
import React, { useEffect, useState } from 'react';
import StockQuantityBar from '../components/stock/StockQuantityBar';
import { Box, Button, Card, Grid, Text } from '@radix-ui/themes';
import { FiAlertTriangle } from 'react-icons/fi';

import RecentActivity from './RecentActivity';
import LoadingScreen from '../components/LoadingScreen';
import { useRouter } from 'next/navigation';
import DateVisualizer from './DateVisualizer';
import MostUsedMaterials from './MostUsedMaterials';

const criticalMaterials = [
  { stock: 20, max: 100, name: 'Cables de cobre', id: 1 },
  { stock: 10, max: 50, name: 'Baterías recargables', id: 2 },
  { stock: 15, max: 30, name: 'Fusibles eléctricos', id: 3 },
  { stock: 5, max: 25, name: 'Interruptores de circuito', id: 4 },
  { stock: 18, max: 40, name: 'Transformadores', id: 5 },
  { stock: 8, max: 35, name: 'Conectores eléctricos', id: 6 },
  { stock: 12, max: 60, name: 'Terminales aislados', id: 7 },
];

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIfInitialLoad = !localStorage.getItem('isInitialLoad');

    if (checkIfInitialLoad) {
      // It's the initial load (refreshing the page)
      localStorage.setItem('isInitialLoad', 'true');
      setLoading(true); // Set loading to true when refreshing
    } else {
      // It's not the initial load
      localStorage.removeItem('isInitialLoad');
      setLoading(false); // Set loading to false after rendering
    }
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Grid gap="4" columns={{ sm: '1', md: '2' }}>
      <Card className="flex-col shadow-lg p-3">
        <Box className="mb-5 flex items-center justify-between">
          <Box className="text-xl mr-3">
            <FiAlertTriangle />
          </Box>
          <Text className="text-xl text-zinc-600 font-bold">
            Materiales Críticos
          </Text>
          <Button variant="outline">Ver Materiales</Button>
        </Box>
        {criticalMaterials.map((material) => {
          return (
            <StockQuantityBar
              key={material.id}
              name={material.name}
              stock={material.stock}
              max={material.max}
            />
          );
        })}
      </Card>
      <MostUsedMaterials />
      <RecentActivity />
    </Grid>
  );
};

export default Dashboard;
