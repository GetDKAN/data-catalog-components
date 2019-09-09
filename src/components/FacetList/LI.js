/* eslint-disable */

import styled from 'styled-components';

const LI = styled.li`
  background: #FFFFFF;
  padding: 0;
  list-style-type: none;
  width: 100%;
  position: relative;
  display: block;
  &:last-of-type {
   border-bottom: 1px solid ${props => props.theme.borderColor};
 }
`;

export default LI;
