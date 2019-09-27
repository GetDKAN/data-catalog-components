import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import defaultTheme from './default';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const GlobalStyles = createGlobalStyle`
  @import url('http://fonts.googleapis.com/css?family=Rubik:300,500,700&amp;subset=latin');

  html {
    /*Convert font size to base 10 for easier calculations (1rem = 10px)*/
    font-size: 62.5%;
  }
  body {
    background-color: ${defaultTheme.backgroundColor};
    color: ${defaultTheme.textColor};
    font-weight: 300;
    font-size: 1.6rem;
    font-family: ${defaultTheme.fontText};

    a, input, button, textarea {
      transition: all 0.2s linear;
    }
    a {
      color: ${defaultTheme.linkColor};
      &:hover {
        color: ${defaultTheme.linkHoverColor};
      }
    }
    h1,h2,h3,h4,h5 { 
      color: ${defaultTheme.headingColor};
      font-family: ${defaultTheme.fontText};
    }
    h1 { font-size: 3.0rem }  // 30px
    h2 { font-size: 2.4rem; } // 24px
    h3 { font-size: 2.0rem; } // 20px

    .container-fluid {
      padding-left: 25px;
      padding-right: 25px;
    }
    table {
      background-color: white;
    }
    .table-bordered td,
    .table-bordered th {
      border-color: ${defaultTheme.borderColor};
    }
    .form-control {
      font-size: 1.6rem;
      margin-bottom: 15px;
    }
    .theme-wrapper {
      border-bottom: 1px solid #dddddd;
      padding: 5px 0;
      margin-bottom: 10px;
      display: flex;
      .theme {
        color: #A7AAAC;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        text-transform: uppercase;
      }
    }

  }
`;
export default GlobalStyles;
