'use client';
import { Box, Flex, Grid, Text } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';
import ExpensesChart from './ExpensesChart';
import MaterialsChart from './MaterialsChart';
import TotalExpenses from './TotalExpenses';
import LoadingScreen from '../components/LoadingScreen';

const SalesPage = () => {
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
    <Grid columns={{ sm: '1', md: '2' }} flow="row" gap="4">
      <ExpensesChart />
      <MaterialsChart />
      <TotalExpenses />
    </Grid>
  );
};

export default SalesPage;
