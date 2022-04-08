import React from 'react';

import Hero from '../../templates/Hero';

export default {
  title: 'Templates/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const HeroWithImage = Template.bind({});
HeroWithImage.args = {
  image:
    'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};
