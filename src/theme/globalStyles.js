import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import defaultTheme from './default';

library.add(fab, fas);

const GlobalStyles = createGlobalStyle`

  html {
    /*Convert font size to base 10 for easier calculations (1rem = 10px)*/
    font-size: 62.5%;
  }
`;
export default GlobalStyles;
