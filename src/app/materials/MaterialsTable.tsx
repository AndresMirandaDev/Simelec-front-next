'use client';
import { Box, Card, Table, Text } from '@radix-ui/themes';
import React, { useState } from 'react';
import { FaBoxOpen } from 'react-icons/fa6';
import Pagination from '../components/Pagination';
import classNames from 'classnames';
const materials = [
  { id: 1, name: 'Cables de cobre', inStock: 20, unitPrice: 3000 },
  { id: 2, name: 'Transformadores', inStock: 18, unitPrice: 80000 },
  { id: 3, name: 'Interruptores de circuito', inStock: 5, unitPrice: 5000 },
  { id: 4, name: 'Postes de luz', inStock: 40, unitPrice: 15000 },
  { id: 5, name: 'Aisladores', inStock: 150, unitPrice: 2000 },
  {
    id: 6,
    name: 'Transformadores de corriente',
    inStock: 120,
    unitPrice: 12000,
  },
  { id: 7, name: 'Conductores eléctricos', inStock: 38, unitPrice: 6000 },
  { id: 8, name: 'Fusibles eléctricos', inStock: 15, unitPrice: 1000 },
  { id: 9, name: 'Medidores de energía', inStock: 120, unitPrice: 25000 },
  { id: 10, name: 'Paneles solares', inStock: 25, unitPrice: 50000 },
  { id: 11, name: 'Cajas de conexiones', inStock: 24, unitPrice: 3000 },
  { id: 12, name: 'Baterías recargables', inStock: 10, unitPrice: 15000 },
  {
    id: 13,
    name: 'Transformadores de distribución',
    inStock: 90,
    unitPrice: 75000,
  },
  { id: 14, name: 'Cables de fibra óptica', inStock: 34, unitPrice: 4000 },
  {
    id: 15,
    name: 'Terminales aislados',
    inStock: 12,
    unitPrice: 2000,
  },
  { id: 16, name: 'Postes telegráficos', inStock: 30, unitPrice: 18000 },
  { id: 17, name: 'Contadores eléctricos', inStock: 30, unitPrice: 30000 },
  { id: 18, name: 'Protectores de sobretensión', inStock: 28, unitPrice: 5000 },
  { id: 19, name: 'Condensadores', inStock: 22, unitPrice: 10000 },
  { id: 20, name: 'Cables de aluminio', inStock: 40, unitPrice: 2500 },
  {
    id: 21,
    name: 'Transformadores de potencia',
    inStock: 32,
    unitPrice: 100000,
  },
  { id: 22, name: 'Herramientas de instalación', inStock: 38, unitPrice: 6000 },
  { id: 23, name: 'Cables de comunicación', inStock: 28, unitPrice: 3500 },
  { id: 24, name: 'Conectores eléctricos', inStock: 8, unitPrice: 1200 },
  { id: 25, name: 'Bobinas de carga', inStock: 30, unitPrice: 8000 },
  { id: 26, name: 'Cableado subterráneo', inStock: 25, unitPrice: 7000 },
  {
    id: 27,
    name: 'Estructuras metálicas para líneas',
    inStock: 24,
    unitPrice: 18000,
  },
  { id: 28, name: 'Reparadores de tensión', inStock: 30, unitPrice: 3000 },
  { id: 29, name: 'Fuentes de alimentación', inStock: 22, unitPrice: 15000 },
  { id: 30, name: 'Aparatos de medida', inStock: 35, unitPrice: 12000 },
];

const MaterialsTable = () => {
  const [currentPage, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const columnHeaderStyle = 'text-neutral-100';
  return (
    <Card className="shadow-lg p-3">
      <Box className="mb-5 flex items-center justify-center">
        <Box className="mr-3 text-xl">
          <FaBoxOpen />
        </Box>
        <Text className="text-zinc-600 text-xl font-bold">Materiales</Text>
      </Box>
      <Table.Root variant="ghost">
        <Table.Header>
          <Table.Row className="bg-[var(--accent-9)]">
            <Table.ColumnHeaderCell className={columnHeaderStyle}>
              Nombre
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className={columnHeaderStyle}>
              Stock
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className={columnHeaderStyle}>
              P.unitario
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {materials
            .slice(currentPage * pageSize, currentPage * pageSize + pageSize)
            .map((m) => {
              return (
                <Table.Row key={m.id}>
                  <Table.Cell>{m.name}</Table.Cell>
                  <Table.Cell
                    className={classNames({
                      'text-red-600 font-bold': m.inStock <= 20,
                      'text-green-700 font-bold': m.inStock > 20,
                    })}
                  >
                    {m.inStock}
                  </Table.Cell>
                  <Table.Cell>${m.unitPrice}</Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table.Root>
      <Pagination
        itemCount={materials.length}
        pageSize={pageSize}
        currentPage={currentPage}
        setPage={setPage}
      />
    </Card>
  );
};

export default MaterialsTable;
