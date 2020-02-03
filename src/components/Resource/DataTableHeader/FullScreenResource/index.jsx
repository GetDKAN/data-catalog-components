import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import ModalWrapper from './ModalWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FullScreenResource = ({
  modalOpenBtnText,
  className,
  headerClass,
  modalClass,
  closeModalBtnText,
  closeModalClasses,
  titleText,
  appNode,
  children,
  includeDefaultStyles,
  underlayClass,
}) => {
  const [modalOpen, toggleModal] = useState(false);
  return (
    <div className="data-table-fullscreen">
      {!modalOpen
        && <button type="button" onClick={() => toggleModal(!modalOpen)}>
          <FontAwesomeIcon icon={['fas', 'expand-alt']} aria-hidden="true" title="Full Screen" />
          <span sr-only>{modalOpenBtnText}</span>
        </button>}
      {modalOpen
        && (
          <AriaModal
            onExit={() => toggleModal(!modalOpen)}
            getApplicationNode={() => document.getElementById(appNode)}
            alert
            focusDialog
            titleText={titleText}
            underlayClickExits={false}
            dialogId="react-aria-fullscreen-modal"
            verticallyCenter
            dialogClass={className}
            includeDefaultStyles={includeDefaultStyles}
            underlayClass={underlayClass}
          >
            <ModalWrapper className={modalClass} role="document">
              <header className={headerClass}>
                <h1>{titleText}</h1>
                <button
                  type="button"
                  className={closeModalClasses}
                  onClick={() => toggleModal(!modalOpen)}
                >
                  <i className="fa fa-2x fa-times" aria-hidden="true" />
                  <span className="sr-only">{closeModalBtnText}</span>
                </button>
              </header>
              <div className="data-table-fullscreen-content" style={{ outline: 0 }}>
                {children}
              </div>
            </ModalWrapper>
          </AriaModal>
        )}
    </div>
  );
};

FullScreenResource.defaultProps = {
  modalOpenBtnText: 'Full Screen',
  className: 'data-table-fullscreen',
  modalClass: 'data-table-fullscreen-modal',
  closeModalBtnText: 'Close',
  closeModalClasses: 'fullscreen-modal-close',
  titleText: 'Dataset explorer',
  appNode: '___gatsby',
  includeDefaultStyles: true,
  underlayClass: 'modal-underlay',
  headerClass: 'modal-header',
};

FullScreenResource.propTypes = {
  modalOpenBtnText: PropTypes.string,
  className: PropTypes.string,
  closeModalBtnText: PropTypes.node,
  closeModalClasses: PropTypes.string,
  titleText: PropTypes.string,
  appNode: PropTypes.string,
  modalClass: PropTypes.string,
  underlayClass: PropTypes.string,
  includeDefaultStyles: PropTypes.bool,
  headerClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FullScreenResource;
