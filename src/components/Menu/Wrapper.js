/* eslint-disable */

import styled from "styled-components";

const Wrapper = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
  &.nav-horizontal {
    li {
      display: inline-block;
    }
  }
`;

export default Wrapper;
