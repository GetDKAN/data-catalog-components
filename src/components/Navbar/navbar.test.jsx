import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './index';
import DynamicLink from '../DynamicLink/index';

const testItems = [
  <a className="usa-current" href="#linkOne" key="one">
    Simple link one
  </a>,
  <a href="#linkTwo" key="two">
    Simple link two
  </a>,
  ]

const nav = {
    "main": [
      {
        "label": "Home",
        "url": "/",
        "target": "_top"
      },
      {
        "label": "Datasets",
        "url": "/search",
        "target": "_top"
      },
      {
        "label": "Publishers",
        "url": "/publishers",
        "target": "_top"
      },
      {
        "label": "About",
        "url": "/about",
        "target": "_top"
      },
      {
        "label": "API",
        "url": "/api",
        "target": "_top"
      }
    ]
  };

describe('Should render a  Navigation bar.', () => {
  test('renders', () => {
    render(<Navbar navLinks={nav.main} items={testItems} />);
  });
});
