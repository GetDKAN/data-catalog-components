import styled from "styled-components";

const ModalWrapper = styled.div`
  .advanced-options-modal-close {
    background: none;
    padding-left: 0;
    text-decoration: none;
    &::before {
      font-family: fontAwesome !important;
      content: "\f00d";
      font-weight: 400;
      font-size: 22px;
    }
    &:hover,
    &:focus {
      background: none;
    }
  }

  .dialog-title {
    font-size: 18px;
  }

  .ds-c-dialog__header {
    padding: 16px 24px;
  }

  .column-labels {
    background: #eeeeee;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
  }

  .ds-c-dialog__actions {
    margin: 0;
    padding: 8px 24px;
    display: flex;
    justify-content: flex-end;
    button {
      color: white;
      border-radius: 25px;
      font-size: 14px;
    }
  }

  fieldset.target {
    input:checked + label::before {
      background-color: none;
      border-color: blue;
    }
  }
`;

export default ModalWrapper;
