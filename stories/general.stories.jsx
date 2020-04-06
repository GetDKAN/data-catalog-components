import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, array, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Header from '../src/templates/Header';
import NavBar from '../src/templates/NavBar';
import Menu from '../src/components/Menu';
import Logo from '../src/components/Logo';
import PageHeader from '../src/components/PageHeader';
import Title from '../src/components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DataIcon from '../src/components/DataIcon';
import Footer from '../src/templates/Footer';
import ApiDocs from '../src/components/ApiDocs';
import ToggleBlock from '../src/components/ToggleBlock';
import ShowMoreContainer from '../src/components/ShowMoreContainer';
import Announcement from '../src/templates/Announcement';
import PublisherList from '../src/components/PublisherList';
import "../src/theme/styles/index.scss";

import links from './data/menu.json';
import orgs from './data/publishers.json';

storiesOf('General', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add('Logo', () => <Logo />)
  .add('Header', () =>
    <Header
      site="Open Data Catalog"
      slogan="Place your tag line here."
      customClasses="container-fluid"
      navItems={links.main.map((item) => (<a href={item.url}>{item.label}</a>))}
    />
  )
  .add('NavBar', () => <NavBar navItems={links.main.map((item) => (<a href={item.url}>{item.label}</a>))} customClasses="container-fluid" />)
  .add('Menu (external links)', () => <Menu items={links.footer1} title={text("Title", "External links")} menuId="sampleNav"/>)
  .add('Menu (internal links', () => <Menu items={links.main} title={text("Title", "Internal links")} menuId="sampleNav"/>)
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
  .add('Show More Container', () => {
    const itemsArray = ['open', 'data', 'dkan', 'test', 'React', 'Drupal', 'foo', 'bar', 'JavaScript', 'PHP', 'source'];
    return (
      <ShowMoreContainer
        container={select('Container Type', { ul: 'ul', ol: 'ol', div: 'div' }, 'ol')}
        items={array('Show More Items', itemsArray).map((item) => (<li key={item}>{item}</li>))}
        limit={number('Limit', 10)}
        btnOpenText={text('Label when open', '')}
        btnClosedText={text('Label when closed', '')}
      />
    )
  })
  .add(
    "Data Icon",
    () => (
      <DataIcon
        icon={select(
          "Icon",
          ["density-1", "density-2", "density-3", "group"],
          "density-1"
        )}
        color={text('Color', "#41b0d3")}
        height={text("Height", "50")}
        width={text("Width", "50")}
      >
      </DataIcon>
    ),
    { knobs: { escapeHTML: false } }
  )
  .add("FontAwesome Icon", () => (
    <FontAwesomeIcon
      icon={text("Icon", "chevron-right")}
      color={text("Color", "#41b0d3")}
      size={text("Size", "lg")}
    />
  ))
  .add("FontAwesome Brand Icon", () => (
    <span>
      <FontAwesomeIcon
        icon={['fab', 'facebook']}
        color="blue"
        size="4x"
      />
      <FontAwesomeIcon
        icon={['fab', 'twitter']}
        color="aqua"
        size="4x"
      />
      <FontAwesomeIcon
        icon={['fab', 'github']}
        color="purple"
        size="4x"
      />
    </span>
  ))
  .add('Footer', () => <Footer links={links} customClasses="container-fluid" />)
  .add('API Documentation', () => <ApiDocs endpoint="https://petstore.swagger.io/v2/swagger.json" />)
  .add('Announcement', () => (
    <Announcement
      heading={text('Heading', "Note")}
      variation={select(
        "Variation",
        ["","info", "success", "warn", "error"],
        "info"
      )}>
      Pay attention this is important information.
    </Announcement>
  ))
  .add('Publisher List', () => (
    <PublisherList items={orgs} />
  ))
