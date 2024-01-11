'use client';
import { Card, Box, Button, Text } from '@radix-ui/themes';
import React, { useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import StockQuantityBar from '../components/stock/StockQuantityBar';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Pagination from '../components/Pagination';

const criticalMaterials = [
  { stock: 20, max: 100, name: 'Cables de cobre', id: 1 },
  { stock: 10, max: 50, name: 'Baterías recargables', id: 2 },
  { stock: 15, max: 30, name: 'Fusibles eléctricos', id: 3 },
  { stock: 5, max: 25, name: 'Interruptores de circuito', id: 4 },
  { stock: 18, max: 40, name: 'Transformadores', id: 5 },
  { stock: 8, max: 35, name: 'Conectores eléctricos', id: 6 },
  { stock: 12, max: 60, name: 'Terminales aislados', id: 7 },
];

const CriticalMaterials = () => {
  const currentPath = usePathname();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  return (
    <Card className="flex-col shadow-lg p-3">
      <Box
        className={classNames({
          'mb-5 flex items-center': true,
          'justify-center': currentPath === '/materials',
          'justify-between': currentPath !== '/materials',
        })}
      >
        <Box className="text-xl mr-3">
          <FiAlertTriangle />
        </Box>
        <Text className="text-xl text-zinc-600 font-bold">
          Materiales Críticos
        </Text>
        {currentPath !== '/materials' && (
          <Button variant="outline">Ver Materiales</Button>
        )}
      </Box>
      <Box>
        {criticalMaterials
          .slice(currentPage * pageSize, currentPage * pageSize + pageSize)
          .map((material) => {
            return (
              <StockQuantityBar
                key={material.id}
                name={material.name}
                stock={material.stock}
                max={material.max}
              />
            );
          })}
      </Box>
      <Box>
        <Pagination
          itemCount={criticalMaterials.length}
          currentPage={currentPage}
          pageSize={pageSize}
          setPage={setCurrentPage}
        />
      </Box>
    </Card>
  );
};

export default CriticalMaterials;
