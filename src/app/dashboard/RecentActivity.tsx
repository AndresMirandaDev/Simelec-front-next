import { Badge, Box, Card, Table, TableBody, Text } from '@radix-ui/themes';
import React from 'react';
const activity = [
  {
    order: '#27445',
    status: 'dispatched',
    date: '2024-01-10', // Replace with a real date
    project: 'Project 1',
    totalAmount: 300000,
  },
  {
    order: '#27446',
    status: 'pending',
    date: '2024-01-11',
    project: 'Project 2',
    totalAmount: 500000,
  },
  {
    order: '#27447',
    status: 'arrived',
    date: '2024-01-12',
    project: 'Project 3',
    totalAmount: 800000,
  },
  {
    order: '#27448',
    status: 'dispatched',
    date: '2024-01-13',
    project: 'Project 4',
    totalAmount: 400000,
  },
  {
    order: '#27449',
    status: 'pending',
    date: '2024-01-14',
    project: 'Project 5',
    totalAmount: 600000,
  },
];

const RecentActivity = () => {
  const statusBadge: { dispatched: string; pending: string; arrived: string } =
    {
      dispatched: 'Despachado',
      pending: 'Pendiente',
      arrived: 'Entregada',
    };

  const columnHeaderStyle = 'text-neutral-100';

  return (
    <Card className="p-3 shadow-lg">
      <Box className="mb-5">
        <Text className="text-zinc-600 text-xl font-bold">
          Actividad Reciente
        </Text>
      </Box>
      <Table.Root variant="ghost" size="3">
        <Table.Header>
          <Table.Row className="bg-[var(--accent-9)]">
            <Table.ColumnHeaderCell className={columnHeaderStyle}>
              Orden
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className={columnHeaderStyle}>
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className={columnHeaderStyle}>
              Fecha
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className={columnHeaderStyle}>
              Proyecto
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className={columnHeaderStyle}>
              Monto
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <TableBody>
          {activity.map((a) => {
            return (
              <Table.Row key={a.order}>
                <Table.Cell className="font-bold text-zinc-600">
                  {a.order}
                </Table.Cell>
                <Table.Cell>
                  <Badge
                    color={
                      a.status === 'dispatched'
                        ? 'purple'
                        : a.status === 'pending'
                        ? 'yellow'
                        : 'green'
                    }
                  >
                    {statusBadge[a.status]}
                  </Badge>
                </Table.Cell>
                <Table.Cell className="text-zinc-600">
                  {new Date(a.date).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell className="text-zinc-600">{a.project}</Table.Cell>
                <Table.Cell className="text-zinc-600">
                  ${a.totalAmount}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </TableBody>
      </Table.Root>
    </Card>
  );
};

export default RecentActivity;
