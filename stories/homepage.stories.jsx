import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import Hero from '../src/components/Hero';
import IconList from '../src/components/IconList';
import IconListItem from '../src/components/IconListItem'
import Blocks from '../src/components/Blocks';
import StepsBlock from '../src/components/Blocks/StepsBlock';
import StatBlock from '../src/components/Blocks/StatBlock';
import "../src/theme/styles/index.scss";
import home from './data/home.json';

storiesOf('Home', module)
    .add('Topics List - external images', () => <IconList items={home.topics} paneTitle="Dataset Topics" component={IconListItem} listClass="icon-list" containerClass="container" titleAlign="left" />)
    .add('Topics List - internal images', () => <IconList items={home.topics2} paneTitle="Section Title" component={IconListItem} listClass="icon-list" containerClass="container" />)
    .add('Hero with image', () => <Hero image="https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />)
    .add('Hero without image', () => <Hero  />)
    .add('Basic Blocks', () => <Blocks items={home.basic} />) 
    .add('Stat Blocks', () => <Blocks items={home.stats} component={StatBlock} className="StatBlock" />) 
    .add('Step Blocks', () => <Blocks items={home.api} component={StepsBlock} className="StepsBlock" paneTitle="Getting Started with Open Data" />)
