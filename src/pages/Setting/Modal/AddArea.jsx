import React, { useState } from "react";
import Modal from "react-modal";
import "../../../components/PosComponents/PosOrder/CustomerModal.css";
import  Select  from 'react-select';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "500px",
    height: "",
  },
};
export const customStylesSelect = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#eee" : "white",
    color: state.isFocused ? "#007bffcc" : "#000",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};
const AddArea = ({ modalIsOpen, closeModal }) => {
  const [chooseType, setChooseType] = useState("Apartment");
  const handleType = (text) => {
    setChooseType(text);
  };
  const thirdPartyOrderOptions = [{ value: "option1", label: "Egypt" }];
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
      <h2 className="mb-5">Add City      </h2>
      <form className="customer-form">
      <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              State  <span className="required-field-form-order">*</span>
              </label>
              <Select
                id="thirdPartyOrderID"
                name="thirdPartyOrderID"
                options={[{ value: "option1", label: "Giza "}
                ]}
                isSearchable={true}
                placeholder={`Select...`}
                className="select-form-order-pos"
                styles={customStylesSelect}
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
              City  <span className="required-field-form-order">*</span>
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
      <div className="d-flex justify-content-end mt-8">
        {/* <button
          type="button"
          onClick={closeModal}
          className="btn-cancel-modal-pos-add-customer  me-8"
        >
          Close
        </button> */}
        <button
          type="submit"
          onClick={closeModal}
          className="btn-form-pos-add-customer"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default AddArea
;
