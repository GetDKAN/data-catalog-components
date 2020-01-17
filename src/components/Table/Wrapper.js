/* eslint-disable */
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2rem 0;
  .table-striped,
  .table-hover {
    > tbody tr:nth-of-type(odd):hover,
    > tbody tr:nth-of-type(even):hover {
      background-color: #fffeee;
    }
  }
  table {
    margin: 1rem 0;
    table-layout: fixed;
    width: 100%;
    &.word-break {
      td {
        word-break: break-all;
      }
    }
    tr td,
    tr th {
      border: 1px solid ${props => props.theme.borderColor};
      font-size: 1.4rem;
      padding: 0.5rem;
    }

    tr th {
      background: ${props => props.theme.primaryDark};
      border-top-color: ${props => props.theme.primaryDark};
      border-bottom: 2px solid ${props => props.theme.grayMedium};
      color: #fff;
      font-weight: 300;
      &:first-child {
        border-left-color: ${props => props.theme.primaryDark};
      }
      &:last-child {
        border-right-color: ${props => props.theme.primaryDark};
      }
    }
  }
`;

export default Wrapper;
