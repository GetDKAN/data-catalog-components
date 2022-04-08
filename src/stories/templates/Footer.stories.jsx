import React from 'react';

import Footer from '../../templates/Footer';

export default {
  title: 'Templates/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: {
    footer1: [
      {
        label: 'DKAN Docs',
        url: 'https://getdkan.github.io/dkan2/index.html',
        target: '_blank',
      },
      {
        label: 'DKAN Demo',
        url: 'https://demo.getdkan.com',
        target: '_blank',
      },
      {
        label: 'CivicActions',
        url: 'https://civicactions.com',
        target: '_blank',
      },
      {
        label: 'Data.gov',
        url: 'https://data.gov',
      },
    ],
    footer2: [
      {
        label: 'Project Open Data',
        url: 'https://project-open-data.cio.gov',
      },
      {
        label: 'DCAT',
        url: 'https://www.w3.org/TR/vocab-dcat/',
        target: '_blank',
      },
      {
        label: 'Drupal',
        url: 'Drupal.org',
        target: '_blank',
      },
      {
        label: 'Open Source Open Data',
        url: 'http://opensourceopendata.org',
        target: '_blank',
      },
    ],
  }
};
