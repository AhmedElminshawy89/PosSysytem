mport React from "react";
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
    height:"100vh"
  },
};

const UpdateReservation = ({ isOpen, closeModal }) => {
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
          <h2 className="modal-title">Update</h2>
        </div>
        <div className="modal-body">
          <div className="mt-6 d-flex align-items-center gap-16 w-full-title">
            <div className="d-flex flex-column gap-3 w-full-title">
              <div className="d-flex align-items-center gap-20 mt-4">
                <label className="form-label fs-3">
                  Table No.<span className="required-field-form-order">*</span>
                </label>
                <label className="form-label">1</label>
              </div>
              <div className="d-flex align-items-center gap-10 mt-4">
                <label className="form-label fs-3">
                  No. of People
                  <span className="required-field-form-order">*</span>
                </label>
                <label className="form-label">2</label>
              </div>
              <div className="d-flex align-items-center mt-4">
                <label className="form-label fs-3  me-100">
                  Date<span className="required-field-form-order">*</span>
                </label>
                <label className="form-label">2024-07-13</label>
              </div>
              <div className="d-flex align-items-center gap-18 mt-4">
                <label className="form-label fs-3">
                  Start Time<span className="required-field-form-order">*</span>
                </label>
                <label className="form-label">22:00:00</label>
              </div>
              <div className="d-flex align-items-md-center gap-md-19 mt-4 flex-md-row flex-column">
                <label className="form-label fs-3 text-nowrap">
                  End Time<span className="required-field-form-order">*</span>
                </label>
                <CookingTimeInput/>
              </div>
              <div className="d-flex  mt-4 align-items-md-center
flex-md-row flex-column">
                <label className="form-label fs-3">
                  Name<span className="required-field-form-order">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="select-form-order-pos input-form-order ml-85"
                  style={{ borderRadius: ".75rem"}}
                />
              </div>
              <div className="d-flex mt-4 align-items-md-center
flex-md-row flex-column">
                <label className="form-label fs-3 text-nowrap">
                  Mobile <span className="required-field-form-order">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="select-form-order-pos input-form-order ml-75"
                  style={{ borderRadius: ".75rem"}}
                />
              </div>
              <div className="d-flex  gap-5 mt-4 align-items-md-center
flex-md-row flex-column">
                <label className="form-label fs-3 text-nowrap">
                  Email Address{" "}
                  <span className="required-field-form-order">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="select-form-order-pos input-form-order"
                  style={{ borderRadius: ".75rem" }}
                />
              </div>
              <div className="d-flex gap-2 mt-4 align-items-md-center
flex-md-row flex-column">
                <label className="form-label fs-3 text-nowrap">
                  Customer Notes{" "}
                  <span className="required-field-form-order">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Customer Notes"
                  className="select-form-order-pos input-form-order"
                  style={{ borderRadius: ".75rem" }}
                />
              </div>
              <div className="d-flex mt-4 align-items-md-center
flex-md-row flex-column">
                <label className="form-label fs-3 text-nowrap mr-90" >
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
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </Modal>
  );
};

export default AddCoupon;
