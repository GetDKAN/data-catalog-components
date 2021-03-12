import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchListItem, {getUniqueFormats} from './index';

describe('<SearchListItem />', () => {
  test('renders an item', () => {
    render(<SearchListItem
             item={
               {
                 title: 'dkan',
                 ref: '/dkan-item',
               }
             }
           />);
    expect(screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });

  test('Return uniquely formatted items', () => {

    const formats = [
      [0,
       {
         "identifier": 1,
         "format": "csv"
       }],
      [1,
       { "identifier":2,
         "format": "csv"
       }],
      [2,
       { "identifier":3,
         "format": "csv"
       }],
      [3,
       { "identifier":4,
         "format": "rdf"
       }],
      [4,
       { "identifier":5,
         "format": "xml"
       }]
    ];

    expect(
      getUniqueFormats(formats))
      .toEqual([
        {"format": "csv",
         "identifier": 1
        },
        {"format": "rdf",
         "identifier": 4
        },
        {"format": "xml",
         "identifier": 5
        }
      ]);
  });
});
