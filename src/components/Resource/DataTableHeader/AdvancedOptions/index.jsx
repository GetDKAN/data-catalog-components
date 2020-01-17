import React, { useState } from "react";
import PropTypes from "prop-types";
import AriaModal from "react-aria-modal";
import AdvancedOptionsForm from "./AdvancedOptionsForm";
import ModalWrapper from "./ModalWrapper";

const AdvancedOptions = ({
  underlayClass,
  excludedColumns,
  columnOrder,
  columns,
  reorderColumns,
  toggleColumns,
  modalOpenBtnText,
  className,
  modalClass,
  closeModalBtnText,
  closeModalClasses,
  titleText,
  itemClasses,
  appNode,
  headerClass,
  includeDefaultStyles,
  showAction,
  actionText,
  actionsClassNames,
  actionButtonClassNames
}) => {
  const [modalOpen, toggleModal] = useState(false);
  return (
    <div className="data-table-adv-options">
      {!modalOpen && (
        <button type="button" onClick={() => toggleModal(!modalOpen)}>
          {modalOpenBtnText}
        </button>
      )}
      {modalOpen && (
        <AriaModal
          onExit={() => toggleModal(!modalOpen)}
          getApplicationNode={() => document.getElementById(appNode)}
          alert
          focusDialog
          titleText={titleText}
          underlayClickExits={false}
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
                {closeModalBtnText}
              </button>
            </header>

            <div
              className="data-table-adv-options-content"
              style={{ outline: 0 }}
            >
              <div className="column-labels">
                <span>Display column</span>
                <span>Reorder</span>
              </div>
              <AdvancedOptionsForm
                columns={columns}
                excludedColumns={excludedColumns}
                columnOrder={columnOrder}
                toggleColumns={toggleColumns}
                reorderColumns={reorderColumns}
                itemClasses={itemClasses}
              />
            </div>
            {showAction && (
              <aside className={actionsClassNames}>
                <button
                  type="button"
                  className={actionButtonClassNames}
                  key="primary"
                  onClick={() => toggleModal(!modalOpen)}
                >
                  {actionText}
                </button>
              </aside>
            )}
          </ModalWrapper>
        </AriaModal>
      )}
    </div>
  );
};

AdvancedOptions.defaultProps = {
  modalOpenBtnText: "Manage Columns",
  className: "aria-modal",
  modalClass: "data-table-adv-modal",
  closeModalBtnText: "Close",
  closeModalClasses: "advanced-options-modal-close",
  titleText: "Manage Columns",
  appNode: "___gatsby",
  itemClasses: {
    input: "draggable-item-label",
    label: "draggable-item-input"
  },
  includeDefaultStyles: true,
  actionText: "Update Columns",
  actionsClassNames: "data-table-adv-actions",
  showAction: true,
  actionButtonClassNames: "action-button",
  underlayClass: "modal-underlay",
  headerClass: "modal-header"
};

AdvancedOptions.propTypes = {
  underlayClass: PropTypes.string,
  modalOpenBtnText: PropTypes.string,
  className: PropTypes.string,
  closeModalBtnText: PropTypes.string,
  closeModalClasses: PropTypes.string,
  titleText: PropTypes.string,
  appNode: PropTypes.string,
  excludedColumns: PropTypes.objectOf(PropTypes.bool).isRequired,
  columnOrder: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  reorderColumns: PropTypes.func.isRequired,
  toggleColumns: PropTypes.func.isRequired,
  modalClass: PropTypes.string,
  itemClasses: PropTypes.shape({
    input: PropTypes.string,
    label: PropTypes.string
  }),
  actionButtonClassNames: PropTypes.string,
  showAction: PropTypes.bool,
  actionText: PropTypes.node,
  actionsClassNames: PropTypes.string,
  includeDefaultStyles: PropTypes.bool,
  headerClass: PropTypes.string
};

export default AdvancedOptions;
