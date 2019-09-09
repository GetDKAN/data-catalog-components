/* eslint-disable */

import styled from 'styled-components';

const FacetBlockDiv = styled.div`
  margin-bottom: 30px;
  a {
    line-height: 22px;
    padding: 9px 16px;
    position: relative;
    display: block;
    border-left: 1px solid ${props => props.theme.borderColor};
    border-right: 1px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.textColor};
    &:hover {
      text-decoration: none;
      background: rgba(0, 0, 0, 0.03);
    }
    &:hover:after {
      content: "\\f055";
      color: ${props => props.theme.success};
      font-family: "FontAwesome";
      position: absolute;
      top: 8px;
      right: 8px;
    }
    &.active {
      background-color: rgba(0, 0, 0, 0.03);
    }
    &.active:after {
      content: "\\f00d";
      font-family: "FontAwesome";
      position: absolute;
      top: 8px;
      right: 8px;
    }
    &.active:hover:after {
      color: ${props => props.theme.danger};
    }
  }
`;

export default FacetBlockDiv;
