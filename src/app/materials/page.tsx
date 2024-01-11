import { Box, Button, Flex, Grid } from '@radix-ui/themes';
import React from 'react';
import CriticalMaterials from './CriticalMaterials';
import MaterialsTable from './MaterialsTable';
import Link from 'next/link';
import MostUsedMaterials from '../dashboard/MostUsedMaterials';

const MaterialsPage = () => {
  return (
    <Grid columns={{ xs: '1', sm: '1', md: '1', lg: '2', xl: '2' }} gap="4">
      <Flex gap="2">
        <Button>Añadir material</Button>
        <Button>Abastecimento de material</Button>
      </Flex>
      <Box className="lg:col-span-2">
        <MaterialsTable />
      </Box>
      <CriticalMaterials />
      <MostUsedMaterials />
    </Grid>
  );
};

export default MaterialsPage;
