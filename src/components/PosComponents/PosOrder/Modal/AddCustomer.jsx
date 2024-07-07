import React, { useState } from "react";
import Modal from "react-modal";
import "../CustomerModal.css";

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
    height: "95vh",
  },
};
const CustomerModal = ({ modalIsOpen, closeModal }) => {
  const [chooseType, setChooseType] = useState("Apartment");
  const handleType = (text) => {
    setChooseType(text);
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
      <h2 className="mb-5">Add Customer</h2>
      <form className="customer-form">
        <div className="form-group">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="firstName">
                First Name<span className="required-field-form-order">*</span>
              </label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-column">
              <label htmlFor="lastName">
                Last Name<span className="required-field-form-order">*</span>
              </label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="emailAddress">
                Email Address
                <span className="required-field-form-order">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="phone">
                Phone<span className="required-field-form-order">*</span>
              </label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            {/* <div className="form-column">
              <label htmlFor="phone"></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-7"
              />
            </div> */}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Create account password
            <span className="required-field-form-order">*</span>
          </label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <h2>Account Details</h2>
          <p className="fs-3">
            To delivery to another address please select the correct address
            from you saved addresses below or create a new address in My
            Addresses
          </p>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="addressTitle" className="form-label">
                Address Title
                <span className="required-field-form-order">*</span>
              </label>
              <input
                type="text"
                id="addressTitle"
                name="addressTitle"
                required
              />
            </div>
            <div className="form-column">
              <label className="form-label mt-3" htmlFor="country">
                Country
              </label>
              <select id="country" name="country">
                <option value="egypt">Egypt</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="state" className="form-label">
                State<span className="required-field-form-order">*</span>
              </label>
              <select id="state" name="state">
                <option value="giza">Giza</option>
              </select>
            </div>
            <div className="form-column">
              <label htmlFor="city" className="form-label mt-3">
                Town / City
              </label>
              <select id="city" name="city"></select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="form-column">
              <label className="form-label">
                Type<span className="required-field-form-order">*</span>
              </label>
              <div className="flex-type-form-modal">
                <p
                  className={chooseType === "Apartment" ? "active" : ""}
                  onClick={() => handleType("Apartment")}
                >
                  Apartment
                </p>
                <p
                  className={chooseType === "House" ? "active" : ""}
                  onClick={() => handleType("House")}
                >
                  House
                </p>
                <p
                  className={chooseType === "Office" ? "active" : ""}
                  onClick={() => handleType("Office")}
                >
                  Office
                </p>
              </div>
            </div>
            <div className="form-column">
              <label htmlFor="streetName" className="form-label">
                Street Name
                <span className="required-field-form-order">*</span>
              </label>
              <input type="text" id="streetName" name="streetName" required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="form-column">
              <label className="form-label" htmlFor="building">
                Building
                <span className="required-field-form-order">*</span>
              </label>
              <input type="text" id="building" name="building" />
            </div>
            <div className="form-column">
              <label className="form-label" htmlFor="apartmentNo">
                Apartment No.
                <span className="required-field-form-order">*</span>
              </label>
              <input type="text" id="apartmentNo" name="apartmentNo" />
            </div>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-end">
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

export default CustomerModal;
