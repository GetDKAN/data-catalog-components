import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import AdvancedOptionsForm from './AdvancedOptionsForm';
import Wrapper from './Wrapper';
import ModalWrapper from './ModalWrapper';

const AdvancedOptions = ({
  excludedColumns,
  columnOrder,
  columns,
  reorderColumns,
  toggleColumns,
  modalOpenBtnText,
  wrapperClass,
  modalClass,
  closeModalBtnText,
  closeModalClasses,
  ariaTitleText,
  appNode,
  formOptions
}) => {
  const [modalOpen, toggleModal] = useState(false);
  return(
    <Wrapper className={wrapperClass}>
      {!modalOpen &&
        <button onClick={() => toggleModal(!modalOpen)}>{modalOpenBtnText}</button>
      }
      {modalOpen &&
        <AriaModal
          onExit={() => toggleModal(!modalOpen)}
          getApplicationNode={() => document.getElementById(appNode)}
          alert={true}
          focusDialog={true}
          titleText={ariaTitleText}
          underlayClickExits={false}
          verticallyCenter={true}
        >
          <ModalWrapper className={modalClass}>
            <button
              className={closeModalClasses}
              onClick={() => toggleModal(!modalOpen)}
            >
              {closeModalBtnText}
            </button>
            <div style={{ outline: 0 }}>
              <AdvancedOptionsForm
                columns={columns}
                excludedColumns={excludedColumns}
                columnOrder={columnOrder}
                toggleColumns={toggleColumns}
                reorderColumns={reorderColumns}
                {...formOptions}
              />
            </div>
          </ModalWrapper>
        </AriaModal>
      }
    </Wrapper>
  );
}

AdvancedOptions.defaultProps = {
  modalOpenBtnText: 'Manage Columns',
  wrapperClass: 'dkan-data-table-adv-options',
  modalClass: 'dkan-data-table-adv-modal',
  closeModalBtnText: 'Close',
  closeModalClasses: 'advanced-options-modal-close',
  ariaTitleText: 'Manage Columns',
  appNode: '___gatsby'
};
AdvancedOptions.propTypes = {
  modalOpenBtnText: PropTypes.string,
  wrapperClass: PropTypes.string,
  closeModalBtnText: PropTypes.string,
  closeModalClasses: PropTypes.string,
  ariaTitleText: PropTypes.string,
  appNode: PropTypes.string,
  excludedColumns: PropTypes.object.isRequired,
  columnOrder: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  reorderColumns: PropTypes.func.isRequired,
  toggleColumns: PropTypes.func.isRequired,
  formOptions: PropTypes.object
};



export default AdvancedOptions;
