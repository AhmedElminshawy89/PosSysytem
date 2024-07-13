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

const AddUnavailability = ({ isOpen, closeModal }) => {
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
          <h2 className="modal-title">Add Unavailability</h2>
        </div>
        <div className="modal-body">
          <div className="mt-6 d-flex align-items-center gap-16 w-full-title">
            <div className="d-flex flex-column gap-3 w-full-title">
              <div className="d-flex align-items-start flex-column gap-0 mt-4">
                <label className="form-label fs-3 text-nowrap">
                  Unavailable Date*
                  <span className="required-field-form-order">*</span>
                </label>
                <div className="d-flex align-items-center position-relative Flatpickr w-full-title">
                  <Flatpickr
                    className="form-control w-full-title"
                    options={{
                      mode: "single",
                      dateFormat: "Y-m-d",
                      onChange: handleDateChange,
                    }}
                    value={dates}
                    placeholder="Pick date"
                  />
                  <button
                    className="form-control form-control-solid w-40px fw-bold"
                    style={{ position: "relative", left: "-18px" }}
                    onClick={() => setDates("")}
                  >
                    X
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-start  mt-4 flex-column">
                <label className="form-label fs-3 text-nowrap">
                  End Time<span className="required-field-form-order">*</span>
                </label>
                <CookingTimeInput />
              </div>
              <div className="d-flex align-items-start mt-4 flex-column">
                <label className="form-label fs-3 text-nowrap">
                  Start Time<span className="required-field-form-order">*</span>
                </label>
                <CookingTimeInput />
              </div>
              <div className="d-flex mt-4 align-items-start flex-column">
                <label className="form-label fs-3 text-nowrap mr-90">
                  Status <span className="required-field-form-order">*</span>
                </label>
                <Select
                  id="waiter"
                  name="waiter"
                  options={[
                    { value: "Booked", label: "Booked" },
                    { value: "Free", label: "Free" },
                  ]}
                  isSearchable={true}
                  placeholder="Select..."
                  className="select-form-order-pos"
                  styles={customStylesSelect}
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

export default AddUnavailability;
