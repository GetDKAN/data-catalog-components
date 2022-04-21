import React from 'react';

import SearchFacet from '../../components/SearchFacets/SearchFacet';

export default {
  title: 'Components/SearchFacet',
  component: SearchFacet,
};

const Template = (args) => <SearchFacet {...args} />;

export const Default = Template.bind({});
Default.args = {
  facetType: 'animal',
  label: 'Animal',
  facets: [
    { type: 'animal', name: 'Cat', total: 0 },
    { type: 'animal', name: 'Dog', total: 1 },
    { type: 'animal', name: 'Cow', total: 2 },
  ],
  selected: ['Cat'],
  dispatch: () => null,
  reset: { active: true },
};
