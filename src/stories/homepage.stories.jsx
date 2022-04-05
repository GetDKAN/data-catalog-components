import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import Hero from '../templates/Hero';
import IconList from '../components/IconList';
import IconListItem from '../components/IconListItem'
import Blocks from '../templates/Blocks';
import BasicBlock from '../templates/Blocks/BasicBlock';
import StepsBlock from '../templates/Blocks/StepsBlock';
import StatBlock from '../templates/Blocks/StatBlock';
import "../theme/styles/index.scss";
import home from './data/home.json';

storiesOf('Home', module)
    .add('Topics List - external images', () => <IconList items={home.topics} paneTitle="Dataset Topics" component={IconListItem} listClass="icon-list" containerClass="container" titleAlign="left" />)
    .add('Topics List - internal images', () => <IconList items={home.topics2} paneTitle="Section Title" component={IconListItem} listClass="icon-list" containerClass="container" />)
    .add('Hero with image', () => <Hero image="https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />)
    .add('Hero without image', () => <Hero  />)
    .add('Basic Blocks', () => <Blocks items={home.basic} component={BasicBlock} />)
    .add('Stat Blocks', () => <Blocks items={home.stats} component={StatBlock} blockClass="StatBlock" />)
    .add('Step Blocks', () => <Blocks items={home.api} component={StepsBlock} blockClass="StepsBlock" paneTitle="Getting Started with Open Data" />)
