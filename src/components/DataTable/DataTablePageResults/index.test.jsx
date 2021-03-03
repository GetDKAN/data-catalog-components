import React from 'react';
import { shallow } from 'enzyme';
import DataTablePageResults from '.';

describe('<DataTablePageResults />', () => {
  const defaultWrapper = shallow(
    <DataTablePageResults
      totalRows={100}
        limit={25}
        offset={0}
    />,
  );

  const customWrapper = shallow(
    <DataTablePageResults
      total={100}
      pageSize={10}
      currentPage={4}
    />,
  );

  it('renders correct initial results', () => {
    expect(defaultWrapper.find('p').text()).toBe('1 - 10 of 100 rows');
  });

  it('renders correct results on subsequent pages', () => {
    expect(customWrapper.find('p').text()).toBe('41 - 50 of 100 rows');
  });
});

// describe('<DataTableRowDetails />', () => {
//   test('Renders a default string with offset and currentPage at 0', () => {
//     render(
//       <DataTableRowDetails
//         totalRows={100}
//         limit={25}
//         offset={0}
//         currentPage={0}
//       />,
//     );
//     expect(screen.getByText('1 - 25 of 100 rows')).toBeTruthy();
//   });

//   test('Renders a default string with offset and currentPage at 0', () => {
//     render(
//       <DataTableRowDetails
//         totalRows={100}
//         limit={10}
//         offset={50}
//         currentPage={5}
//       />,
//     );
//     expect(screen.getByText('51 - 60 of 100 rows')).toBeTruthy();
//   });
// });