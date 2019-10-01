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

// Automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

configure(loadStories, module);
