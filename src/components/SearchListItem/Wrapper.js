/* eslint-disable */
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  padding: 16px 48px;
  list-style: none;
  a {
    color: ${props => props.theme.headingColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  h2 {
    margin: 8px 0;
  }
  .item-theme {
    border-bottom: 1px solid ${props => props.theme.grayLight};
    color: ${props => props.theme.grayMedium};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: .25px;
    margin: 1em 0;
    padding-bottom: .75em;
    div {
      display: inline-block;
      position: relative;
      padding: 0 20px 0 25px;
    }
    img, svg {
      position: absolute;
      top:0;
      left:0;
    }
  }
  .format-types {
    display: flex;
    align-items: flex-start;
    align-content: stretch;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 0.9em;
  }
  .label {
    border-radius: 3px;
    color: white;
    font-size: 1.4rem;
    line-height: 1.6rem;
    white-space: nowrap;
    display: inline-block;
    padding: 5px 8px;
    margin: .75em 16px .75em 0;
    &:first-of-type {
      margin-left: 0;
    }
  }
  .label[data-format="csv"]     { background: ${props => props.theme.csvIcon}; }
  .label[data-format="json"]    { background: ${props => props.theme.jsonIcon}; }
  .label[data-format="pdf"]     { background: ${props => props.theme.pdfIcon}; }
  .label[data-format="rdf"],     
  .label[data-format="rdf+xml"] { background: ${props => props.theme.rdfIcon}; }
  .label[data-format="xml"]     { background: ${props => props.theme.xmlIcon}; }
  .label[data-format="zip"]     { background: ${props => props.theme.zipIcon}; }
  .label[data-format="data"]    { background: ${props => props.theme.dataIcon}; }
`;

export default Wrapper;
