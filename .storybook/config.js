import { configure } from '@storybook/react';

import { addDecorator } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from '../src/theme/globalStyles';
import Theme from '../src/theme/default'
import { ThemeProvider } from 'styled-components'


function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Router>
          {storyFn()}
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
