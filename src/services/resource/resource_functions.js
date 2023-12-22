import axios from 'axios';
import datastore from './datastore';

// Build columns in correct structure for Datatable component.
export function prepareColumns(columns) {
  return columns.map((column) => ({
    header: column,
    id: column,
    accessor: column,
  }));
}
