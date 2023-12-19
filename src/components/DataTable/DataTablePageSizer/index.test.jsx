import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataTablePageSizer from './index';

describe('<DataTablePageSizer />', () => {
  test('renders default', () => {
    render(<DataTablePageSizer pageSizeChange={() => () => true} id="1234" />);
    expect(screen.getByLabelText('Rows per page')).toBeInTheDocument();
  });
  test('renders custom', () => {
    render(
      <DataTablePageSizer
        pageSizeChange={() => () => true}
        id="1234"
        label="Foobar"
        currentOption="150"
        options={[
          { label: '20', value: '20' },
          { label: '50', value: '50' },
          { label: '100', value: '100' },
          { defaultChecked: true, label: '150', value: '150' },
          { label: '200', value: '200' },
          { label: '250', value: '250' },
        ]}
      />,
    );
    expect(screen.getByLabelText('Foobar')).toBeInTheDocument();
  });
});
