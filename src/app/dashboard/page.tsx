'use client';
import React, { useEffect, useState } from 'react';
import StockQuantityBar from '../components/stock/StockQuantityBar';
import { Box, Button, Card, Flex, Grid, Text } from '@radix-ui/themes';
import { FiAlertTriangle } from 'react-icons/fi';

import RecentActivity from './RecentActivity';
import LoadingScreen from '../components/LoadingScreen';
import { useRouter } from 'next/navigation';
import DateVisualizer from './DateVisualizer';
import MostUsedMaterials from './MostUsedMaterials';
import CriticalMaterials from '../materials/CriticalMaterials';

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
    <Grid gap="4" columns={{ xs: '1', sm: '1', md: '1', lg: '2', xl: '2' }}>
      <CriticalMaterials />
      <MostUsedMaterials />
      <Box className="md:col-span-2">
        <RecentActivity />
      </Box>
    </Grid>
  );
};

export default Dashboard;
