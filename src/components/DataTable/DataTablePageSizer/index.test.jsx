import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataTablePageSizer from './index';
import { ResourceDispatch, defaultResourceState } from '../../../services/resource/resource_defaults';

describe('<DataTablePageSizer />', () => {
  const resourceState = defaultResourceState;
  const dispatch = jest.fn();
  test('renders default', () => {
    render(
      <ResourceDispatch.Provider value={{dispatch, resourceState}}>
        <DataTablePageSizer pageSizeChange={() => () => true} id="1234" />
      </ResourceDispatch.Provider>
    );
    expect(screen.getByLabelText('Rows per page')).toBeInTheDocument();
  });
  test('renders custom', () => {
    render(
      <ResourceDispatch.Provider value={{dispatch, resourceState}}>
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
        />
      </ResourceDispatch.Provider>

    );
    expect(screen.getByLabelText('Foobar')).toBeInTheDocument();
  });
});
