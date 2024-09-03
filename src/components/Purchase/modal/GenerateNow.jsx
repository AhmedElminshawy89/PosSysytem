import React, { useState } from "react";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { customStylesSelect } from "../../PosComponents/PosOrder/Modal/AddClosingBalance";
import Select from "react-select";
import CookingTimeInput from "../../PosComponents/PosOrder/Modal/CookingTimeInput";
import Flatpickr from "react-flatpickr";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
  },
};

const GenerateNow = ({ isOpen, closeModal }) => {
  const [dates, setDates] = useState([]);
  const handleDateChange = (selectedDates) => {
    setDates(selectedDates);
  };
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
          <h2 className="modal-title">Salary Generate
          </h2>
        </div>
        <div className="modal-body">
          <div className="mt-6 d-flex align-items-center gap-16 w-full-title">
            <div className="d-flex flex-column gap-3 w-full-title">
              <div className="d-flex align-items-start flex-column gap-0 mt-4">
                <label className="form-label fs-3 text-nowrap">
                Name
                  <span className="required-field-form-order">*</span>
                </label>
                <input
                  type="text"
                  placeholder="position"
                  className="select-form-order-pos input-form-order"
                  style={{ borderRadius: ".75rem" }}
                />
              </div>
              <div className="d-flex align-items-start mt-4 flex-column">
                <label className="form-label fs-3 text-nowrap">
                From <span className="required-field-form-order">*</span>
                </label>
                <input
                  type="date"
                  placeholder="position"
                  className="select-form-order-pos input-form-order"
                  style={{ borderRadius: ".75rem" }}
                />
              </div>
              <div className="d-flex align-items-start mt-4 flex-column">
                <label className="form-label fs-3 text-nowrap">
                To <span className="required-field-form-order">*</span>
                </label>
                <input
                  type="date"
                  placeholder="position"
                  className="select-form-order-pos input-form-order"
                  style={{ borderRadius: ".75rem" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer mt-4">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </Modal>
  );
};

export default GenerateNow;
