import React from "react";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { customStylesSelect } from "../../PosComponents/PosOrder/Modal/AddClosingBalance";
import Select from "react-select";
import CookingTimeInput from "../../PosComponents/PosOrder/Modal/CookingTimeInput";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "900px",
    height:'100vh'
  },
};

const AddLoan = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Grant Loan

          </h2>
        </div>
        <form className="customer-form">
        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Employee Name <span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Permitted By <span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Loan Details<span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Approved Date <span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="date"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Repayment From <span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Amount <span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>   
             <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Interest Percentage <span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Installment Period <span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>             <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Repayment Total <span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>     
                <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Installment <span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              Status <span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>
      </form>
        <div className="modal-footer mt-4">
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </Modal>
  );
};

export default AddLoan;
