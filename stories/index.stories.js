import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import IconList from '../src/components/IconList';
import IconListItem from '../src/components/IconListItem'

import SearchList from '../src/components/SearchList';
import SearchListItem from '../src/components/SearchListItem';
import InputLarge from '../src/components/InputLarge';
import FacetList from '../src/components/FacetList';
import SearchInput from '../src/components/SearchInput';

import Hero from '../src/components/Hero';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import NavBar from '../src/components/NavBar';
import Logo from '../src/components/Logo';
import StyledButton from '../src/components/Button';
import PageHeader from '../src/components/PageHeader';
import Blocks from '../src/components/Blocks';
import StepsBlock from '../src/components/Blocks/StepsBlock';
import StatBlock from '../src/components/Blocks/StatBlock';
import FileDownload from '../src/components/FileDownload';
import Organization from '../src/components/Organization';
import String from '../src/components/String';
import Text from '../src/components/Text';
import Title from '../src/components/Title';
import Table from '../src/components/Table';
import Tags from '../src/components/Tags';
import FormatIcon from '../src/components/FormatIcon';
import FontAwesomeIcon from '../src/components/FontAwesomeIcon';

import data from './_data.json';
import home from './_home.json';
import tables from './_tables.json';
import search from './_search.json';
import links from './_menu.json';

storiesOf('General', module)
    .add('Logo', () => <Logo />)
    .add('Header', () => <Header site="Open Data Catalog" slogan="Place your tag line here." navItems={links.main.map((item) => (<a href={item.url}>{item.label}</a>))} />)
    .add('Page Heading', () => <PageHeader title="Datasets" />)
    .add('NavBar', () => <NavBar navItems={links.main.map((item) => (<a href={item.url}>{item.label}</a>))}/>)
    .add('Button', () => <StyledButton color="primary">primary</StyledButton>)
    .add('Preview Button', () => <StyledButton color="primary"><FontAwesomeIcon icon="chart-bar" fill="#ffffff"/> Preview</StyledButton>)
    .add('Download Button', () => <StyledButton color="primary"><FontAwesomeIcon icon="download" fill="#ffffff"/> Download</StyledButton>)
    .add('Hero Button', () => <StyledButton className="btn-hero">Learn More</StyledButton>)
    .add('Close Button', () => <StyledButton className="close"><span aria-hidden="true"><FontAwesomeIcon icon="times" fill="#666666"/></span></StyledButton>)
    .add('FontAwesome Icons', () => <div><FontAwesomeIcon/><FontAwesomeIcon icon="facebook" fill="#617aad"/><FontAwesomeIcon icon="twitter" fill="#41b0d3"/><FontAwesomeIcon icon="chevron-right" fill="red"/></div>)

storiesOf('Home', module)
    .add('Topics List - external images', () => <IconList items={home.topics} paneTitle="Dataset Topics" component={IconListItem} listClass="icon-list" containerClass="container" titleAlign="left" />)
    .add('Topics List - internal images', () => <IconList items={home.topics2} paneTitle="Section Title" component={IconListItem} listClass="icon-list" containerClass="container" />)
    .add('Hero with image', () => <Hero image="https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />)
    .add('Hero without image', () => <Hero  />)
    .add('Basic Blocks', () => <Blocks items={home.basic} />) 
    .add('Stat Blocks', () => <Blocks items={home.stats} component={StatBlock} className="StatBlock" />) 
    .add('Step Blocks', () => <Blocks items={home.api} component={StepsBlock} className="StepsBlock" paneTitle="Getting Started with Open Data" />)


const selectedFacets = search.selectedFacets;
const facetsResults = search.facetsResults;
const query = search.query;
const facets = search.facets;
const facetCallback = search.facetCallback;

const facetListProps = {
  query,
  facets,
  facetsResults,
  selectedFacets,
  facetCallback,
  Link,
  url: "search"
};

storiesOf('Search', module)
  .add('Item', () => <SearchListItem item={search.items[0]}/>)
  .add('List', () => <SearchList items={search.items} message="2 Datasets found" />)
  .add('Input Large', () => <InputLarge value={query} />)
  .add('Facet List', () => <Router><FacetList {... facetListProps} /></Router>)
  .add('Search Input', () => <SearchInput className="front-page-search" placeholder="Search the data" />)

storiesOf('Footer', module)
    .add('Footer', () => <Footer links={links} />)

storiesOf('Dataset', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add('Format Icon', () => <FormatIcon />)
  .add('File Download', () => <FileDownload label="Label" resource={data.distribution[0]} />)
  .add('File Download - No label', () => <FileDownload resource={data.distribution[0]} />)
  .add('Organization', () => <Organization name={data.publisher.name} description={data.publisher.description} identifier={data.publisher.identifier} />)
  .add('String', () => <String label={"I am a label"} value={"I am a string."} />)
  .add('String - No label', () => <String value={"I am a string."} />)
  .add(
    "Text",
    () => (
      <Text
        wrapper={{ tag: text("Tag", ""), classes: text("Classes", "") }}
        label={text("Label", "I am a label")}
        value={text("Value", "<u>I am an underlined string.</u>")}
      >
        {text("Children", "")}
      </Text>
    ),
    { knobs: { escapeHTML: false } }
  )
  .add("Title", () => (
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
  .add('Table 1', () => <Table configuration={tables.config1} data={tables.data1} title="Additional Information" th1="Field" th2="Value" tableclass="table-one" />)
  .add('Table 2', () => <Table configuration={tables.config2} data={tables.data2} title="What's in this Dataset?" th1="Rows" th2="Columns" tableclass="table-two" />)
  .add('Table 3', () => <Table configuration={tables.config3} data={tables.data3} title="Columns in this Dataset" th1="Column Name" th2="Type" tableclass="table-three" />)
  .add('Tags', () => <Tags label={"Tags"} tags={data.keyword} path="../search?keyword=" />)
