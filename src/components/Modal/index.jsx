import React from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';

const Modal = ({
  nodeId, children, closeText, openText, title,
}) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const getNode = () => document.getElementById(nodeId);
  const titleId = title.replace(/\s/g, '_').toLowerCase();
  const popup = modalOpen
    ? (
      <AriaModal
        titleText={title}
        onExit={() => setModalOpen(false)}
        getApplicationNode={getNode}
        initialFocus={`#dc-modal-${titleId}-close`}
      >
        <div
          className="dc-modal"
          id={`dc-modal-${titleId}`}
        >
          <header className="dc-modal-header">
            <h2
              id={`dc-modal-${titleId}-header-title`}
              className="dc-modal-header-title"
            >
              {title}
            </h2>
            <button
              type="button"
              id={`dc-modal-${titleId}-header-close`}
              onClick={() => setModalOpen(false)}
              className="dc-modal-close-button"
            >
              {closeText}
            </button>
          </header>
          <div className="dc-modal-body">
            {children}
          </div>
          <footer className="dc-modal-footer">
            <button
              type="button"
              id={`dc-modal-${titleId}-close`}
              onClick={() => setModalOpen(false)}
              className="dc-modal-close-button btn btn-primary"
            >
              {closeText}
            </button>
          </footer>
        </div>
      </AriaModal>
    )
    : false;

  return (
    <div className="dc-modal-container">
      <button
        className="dc-modal-open-button btn btn-primary"
        id={`dc-modal-${titleId}-open`}
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        {openText}
      </button>
      {popup}
    </div>
  );
};

Modal.defaultProps = {
  closeText: 'Close Modal',
  openText: 'Open Modal',
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  closeText: PropTypes.string,
  openText: PropTypes.string,
  nodeId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
