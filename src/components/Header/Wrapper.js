import styled from 'styled-components';

const Wrapper = styled.div`
  .logo {
    display: inline-block;
    vertical-align: bottom;
  }
  .site-name {
    display: inline-block;
    vertical-align: bottom;
    line-height: 1em;
    margin-bottom: 10px;
    a {
      color: ${(props) => props.theme.headingColor};
      font-size: 1.8rem;
    }
  }
  .slogan {
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    .logo,
    .site-name {
      display: block;
    }
  }
`;

export default Wrapper;
