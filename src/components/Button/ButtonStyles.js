/* eslint-disable */

import { css } from "styled-components";

const ButtonStyles = css`
  background-color: ${props => props.theme.primary};
  border: none;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 1px;
  margin: 8px;
  padding: 4px 30px;
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.primaryDark};
  }

  &.btn-hero {
    background-color: ${props => props.theme.secondary};
    border: none;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.primaryDark};
    text-transform: uppercase;
    padding: 8px 30px 6px;
    &:hover,
    &:focus {
      background: white;
    }
  }

  &.close {
    background-color: transparent;
    color: #000;
    padding: 10px;
  }
`;

export default ButtonStyles;
