import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApiDocs from './index';


describe('<ApiDocs />', () => {

  beforeAll(() => jest.spyOn(window, 'fetch'))

  test('builds base url correctly', async () => {
    render(<ApiDocs endpoint="http://dkan.org" />);
    await act(async () => {  });
    expect(window.fetch).toHaveBeenCalledWith(
      'http://dkan.org?authentication=false',
      expect.objectContaining({
        url: 'http://dkan.org?authentication=false',
      }),
    )
  })

  test('builds base url correctly with authentication', async () => {
    render(<ApiDocs endpoint="http://dkan.org" authentication={true} />);
    await act(async () => {  });
    expect(window.fetch).toHaveBeenCalledWith(
      'http://dkan.org?authentication=true',
      expect.objectContaining({
        url: 'http://dkan.org?authentication=true',
      }),
    )
  })

  test('builds dataset url correctly', async () => {
    render(<ApiDocs endpoint="http://dkan.org" datasetID={12345} />);
    await act(async () => {  });
    expect(window.fetch).toHaveBeenCalledWith(
      'http://dkan.org/metastore/schemas/dataset/items/12345/docs',
      expect.objectContaining({
        url: 'http://dkan.org/metastore/schemas/dataset/items/12345/docs',
      }),
    )
  })
});
