import styled from 'styled-components';

const ModalWrapper = styled.div`
  .advanced-options-modal-close {
      background: none;
      padding-left: 0;
      text-decoration: none;
      &::before {
        font-family: fontAwesome !important;
        content: '\f00d';
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

`;

export default ModalWrapper;
