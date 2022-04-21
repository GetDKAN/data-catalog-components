import React from 'react';

import ToggleBlock from '../../components/ToggleBlock';

export default {
  title: 'Components/ToggleBlock',
  component: ToggleBlock,
};

const Template = (args) => <ToggleBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Block Title',
  allowToggle: true,
  children: (
    <>
      <p>Inner content.</p>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </>
  ),
};
