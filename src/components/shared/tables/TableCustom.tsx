'use client';

import { Table, TableProps } from '@mantine/core';
import React, { ReactNode } from 'react';

interface Props<T extends Record<string, any>> extends Omit<TableProps, 'data'> {
  data: T[];
  columns: {
    title: string;
    key: keyof T;
    render?: (value: T[keyof T]) => ReactNode;
  }[];
}

export const TableCustom = <T extends Record<string, any>>({
  columns,
  data,
  ...props
}: Props<T>) => {
  const rows = data.map((item, index) => {
    return (
      <Table.Tr key={index}>
        {columns.map((column, colIndex) => {
          const cellValue = item[column.key];
          const renderedValue = column.render ? column.render(cellValue) : cellValue;
          return <Table.Td key={colIndex}>{renderedValue}</Table.Td>;
        })}
      </Table.Tr>
    );
  });

  return (
    <Table
      striped
      withTableBorder
      withColumnBorders
      horizontalSpacing="sm"
      verticalSpacing="sm"
      {...props}
    >
      <Table.Thead>
        <Table.Tr>
          {columns.map((column, index) => (
            <Table.Th key={index}>{column.title}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
