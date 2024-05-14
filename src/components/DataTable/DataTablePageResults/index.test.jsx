import React from 'react';
import { render } from '@testing-library/react';
import DataTablePageResults from '.';
import { ResourceDispatch, defaultResourceState } from '../../../services/resource/resource_defaults';
import { getByTextContent } from '../../../tests/utils';

describe('<DataTablePageResults />', () => {
  const dispatch = jest.fn();
  it('renders correct initial results', () => {
    const resourceState = {
      pageSize: 10,
      currentPage: 0
    }
    render(
      <ResourceDispatch.Provider value={{dispatch, resourceState}}>
        <DataTablePageResults total={100} />
      </ResourceDispatch.Provider>
    );
    expect(getByTextContent('1 - 10 of 100 rows')).toBeInTheDocument();
  });

  it('renders correct results on subsequent pages', () => {
    const resourceState = {
      pageSize: 10,
      currentPage: 4
    }
    render(
      <ResourceDispatch.Provider value={{dispatch, resourceState}}>
        <DataTablePageResults total={100} />
      </ResourceDispatch.Provider>
    );
    expect(getByTextContent('41 - 50 of 100 rows')).toBeInTheDocument();
  });

  it('Correctly displays appended viewing to results list', () => {
    const resourceState = {
      pageSize: 10,
      currentPage: 4
    }
    render(
      <ResourceDispatch.Provider value={{dispatch, resourceState}}>
        <DataTablePageResults viewing total={100} />
      </ResourceDispatch.Provider>
    );
    expect(getByTextContent('Viewing 41 - 50 of 100 rows')).toBeInTheDocument();
  })
  
});
