import React from 'react';

import ShowMoreContainer from '../../components/ShowMoreContainer';

export default {
  title: 'Components/ShowMoreContainer',
  component: ShowMoreContainer,
};

const Template = (args) => <ShowMoreContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    <p>Item 1</p>,
    <p>Item 2</p>,
    <p>Item 3</p>,
    <p>Item 4</p>,
    <p>Item 5</p>,
    <p>Item 6</p>,
    <p>Item 7</p>,
    <p>Item 8</p>,
    <p>Item 9</p>,
    <p>Item 10</p>,
    <p>Item 11</p>,
    <p>Item 12</p>,
  ],
};
