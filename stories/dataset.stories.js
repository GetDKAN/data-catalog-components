import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import FormatIcon from '../src/components/FormatIcon';
import FileDownload from '../src/components/FileDownload';
import Organization from '../src/components/Organization';
import Text from '../src/components/Text';
import Table from '../src/components/Table';
import Tags from '../src/components/Tags';

import data from './data/data.json';
import tables from './data/tables.json';

storiesOf('Dataset', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add(
    "Format Icon",
    () => (
      <FormatIcon
        format={select(
          "Format",
          ["CSV", "ZIP", "JSON", "PDF", "RDF", "XML", "DATA"],
          "CSV"
        )}
        height={text("Height", "50")}
        width={text("Width", "50")}
        fill={text('Fill', "")}
      >
      </FormatIcon>
    ),
    { knobs: { escapeHTML: false } }
  )
  .add('File Download', () => <FileDownload label="Label" title={data.distribution[0].title} downloadURL={data.distribution[0].downloadURL} format={data.distribution[0].format} />)
  .add('File Download - No label', () => <FileDownload title={data.distribution[0].title} downloadURL={data.distribution[0].downloadURL} format={data.distribution[0].format} />)
  .add('Organization', () => <Organization name={data.publisher.name} description={data.publisher.description} identifier={data.publisher.identifier} />)
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
  .add('Table 1', () => <Table configuration={tables.config1} data={tables.data1} title="Additional Information" th1="Field" th2="Value" tableclass="table-one" />)
  .add('Table 2', () => <Table configuration={tables.config2} data={tables.data2} title="What's in this Dataset?" th1="Rows" th2="Columns" tableclass="table-two" />)
  .add('Table 3', () => <Table configuration={tables.config3} data={tables.data3} title="Columns in this Dataset" th1="Column Name" th2="Type" tableclass="table-three" />)
  .add('Tags', () => <Tags label={"Tags"} tags={data.keyword} path="../search?keyword=" />)
