import styled from 'styled-components';

const FormGroup = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  border-collapse: separate;
  .form-text.form-control {
    display: inline-block;
    margin-top: 0;
    width: 70%;
    height: 34px;
    font-weight: 300;
    font-size: 1.6rem;
  }
  .input-group-btn {
    display: inline-block;
    button {
      background-color: ${(props) => props.theme.primary};
      border: none;
      border-radius: 100px;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-weight: 500;
      font-size: 1.6rem;
      letter-spacing: 1px;
      margin: 0 8px;
      padding: 4px 15px;
      text-align: center;
      text-decoration: none;
      text-shadow: none;
      touch-action: manipulation;
      vertical-align: middle;
      white-space: nowrap;
      &:hover,
      &:focus {
        background-color: ${(props) => props.theme.primaryDark};
      }
    }
  }
`;

export default FormGroup;
