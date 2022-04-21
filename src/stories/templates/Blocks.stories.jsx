import React from 'react';

import Blocks from '../../templates/Blocks';
import BasicBlock from '../../templates/Blocks/BasicBlock';
import StatBlock from '../../templates/Blocks/StatBlock';
import StepsBlock from '../../templates/Blocks/StepsBlock';
import items from '../../examples/blocks.json';
import home from '../data/home.json';

export default {
  title: 'Templates/Blocks',
  component: Blocks,
};

const Template = (args) => <Blocks {...args} />;

export const Basic = Template.bind({});
Basic.storyName = 'Default';
Basic.args = {
  items: items.basic,
  component: BasicBlock,
  containerClass: 'container',
  blockClass: 'BasicBlock',
  paneTitle: 'A series of block content',
};

export const BasicBlocks = Template.bind({});
BasicBlocks.args = {
  items: home.basic,
  component: BasicBlock,
  blockClass: 'BasicBlock',
};

export const StatBlocks = Template.bind({});
StatBlocks.args = {
  items: home.stats,
  component: StatBlock,
  blockClass: 'StatBlock',
};

export const StepBlocks = Template.bind({});
StepBlocks.args = {
  items: home.api,
  component: StepsBlock,
  blockClass: 'StepBlock',
  paneTitle: 'Getting Started with Open Data',
};
