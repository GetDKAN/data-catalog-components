import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Header from '../src/components/Header';
import NavBar from '../src/components/NavBar';
import Logo from '../src/components/Logo';
import PageHeader from '../src/components/PageHeader';
import Title from '../src/components/Title';
import StyledButton from '../src/components/Button';
import FontAwesomeIcon from '../src/components/FontAwesomeIcon';
import Footer from '../src/components/Footer';
import ApiDocs from '../src/components/ApiDocs';
import ToggleBlock from '../src/components/ToggleBlock';

import links from './data/menu.json';

storiesOf('General', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y) 
  .add('Logo', () => <Logo />)
  .add('Header', () => <Header site="Open Data Catalog" slogan="Place your tag line here." navItems={links.main.map((item) => (<a href={item.url}>{item.label}</a>))} />)
  .add('NavBar', () => <NavBar navItems={links.main.map((item) => (<a href={item.url}>{item.label}</a>))}/>)
  .add('Page Heading', () => <PageHeader title="Datasets" />)
  .add('Title', () => (
    <Title
      title={text("Title", "I am a title")}
      headerLevel={select(
        "Header Level",
        ["h1", "h2", "h3", "h4", "h5", "h6"],
        "h1"
      )}
      classes={text("Classes", "")}
    />
  ))
  .add('Button', () => <StyledButton color="primary">primary</StyledButton>)
  .add('ToggleBlock', () => (
    <ToggleBlock
      title={text('Title', 'Block Title')}
      allowToggle={boolean('Toggle Header Button', true)}
    >
      <p>Inner content.</p>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </ToggleBlock>
  ))
  .add('Preview Button', () => <StyledButton color="primary"><FontAwesomeIcon icon="chart-bar" fill="#ffffff"/> Preview</StyledButton>)
  .add('Download Button', () => <StyledButton color="primary"><FontAwesomeIcon icon="download" fill="#ffffff"/> Download</StyledButton>)
  .add('Hero Button', () => <StyledButton className="btn-hero">Learn More</StyledButton>)
  .add('Close Button', () => <StyledButton className="close"><span aria-hidden="true"><FontAwesomeIcon icon="times" fill="#666666"/></span></StyledButton>)
  .add('FontAwesome Icons', () => <div><FontAwesomeIcon/><FontAwesomeIcon icon="facebook" fill="#617aad"/><FontAwesomeIcon icon="twitter" fill="#41b0d3"/><FontAwesomeIcon icon="chevron-right" fill="red"/></div>)
  .add('Footer', () => <Footer links={links} />)
  .add('API Documentation', () => <ApiDocs endpoint="https://petstore.swagger.io/v2/swagger.json" />);
