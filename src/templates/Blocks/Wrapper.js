/* eslint-disable */

import styled from "styled-components";

const Wrapper = styled.div`
  .pane-content {
    display: flex;
    align-items: flex-start;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    h2,
    h3 {
      margin-top: 0;
    }
    padding-top: 50px;
  }

  h2 {
    text-align: center;
    padding-top: 50px;
    margin: 0;
  }

  &.BasicBlock {
    h2 {
      padding-bottom: 1.6rem;
    }
    .basic-block {
      padding: 0 20px;
      min-width: 33%;
    }
  }
  &.StatBlock {
    background-color: ${props => props.theme.primaryLight};
    color: #ffffff;
    position: relative;
    .pane-content {
      padding-top: 0;
    }
    .stat-block {
      margin-top: 50px;
      margin-bottom: 50px;
      h2 {
        font-size: 64px;
        display: inline-block;
        color: white;
        font-weight: 300;
        margin: 0 0 0 15px;
        padding: 0;
      }
      i {
        color: ${props => props.theme.primary};
        font-size: 48px;
        display: inline-block;
      }
      p {
        text-align: center;
        margin: 0;
      }
    }
  }
  &.StepsBlock {
    background-color: #ffffff;
    .steps-block {
      position: relative;
      padding: 0 20px;
      margin-bottom: 50px;
      text-align: center;
      max-width: 33%;
      h3 {
        margin-top: 65px;
        text-align: center;
      }
    }
    .steps-step {
      position: absolute;
      width: 50px;
      height: 50px;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 100%;
      border: 1px solid ${props => props.theme.primaryDust};
      line-height: 50px;
      font-size: 20px;
      color: ${props => props.theme.primaryDark};
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    .pane-content {
      flex-wrap: wrap;
      .steps-block {
        max-width: 100%;
      }
    }
  }
`;

export default Wrapper;
