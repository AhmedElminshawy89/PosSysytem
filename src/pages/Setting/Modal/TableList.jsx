import Modal from "react-modal";
import Select from "react-select";
import { customStylesSelect } from "../../../components/PosComponents/PosOrder/Modal/AddClosingBalance";
import MyTables from "./My tables";
import { useState } from "react";

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
const AddTable = ({ modalIsOpen, closeModal }) => {
    const thirdPartyOrderOptions = [{ value: "option1", label: "VIP Floor" },{ value: "option2", label: "Ground Floor" }];
    const [modalPaymentOpen, setModalPaymentIsOpen] = useState(false);

  return (
    <>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
      <h2 className="mb-5 text-start">Add Table</h2>
      <form className="customer-form">
        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="short Name">
              Table Name<span className="required-field-form-order">*</span>
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="tel"
                id="phone"
                name="short Name"
                required
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="short Name">
              Capacity
              </label>
              <input
                className="select-form-order-pos input-form-order"
                type="tel"
                id="phone"
                name="short Name"
                required
                style={{ borderRadius: ".75rem" }}
              />
            </div>
          </div>
        </div>
        <div className="form-column mb-0">
              <label className="form-label" htmlFor="country">
              Floor Select
              </label>
              <Select
                id="thirdPartyOrderID"
                name="thirdPartyOrderID"
                options={thirdPartyOrderOptions}
                isSearchable={true}
                placeholder={`Select...`}
                className="select-form-order-pos"
                styles={customStylesSelect}
              />
            </div>
            <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="short Name">
              Table Icon
              </label>
              <div className="d-flex align-items-center">
              <input
                className="select-form-order-pos input-form-order"
                type="tel"
                id="phone"
                name="short Name"
                required
                style={{ borderRadius: ".75rem" }}
              />
            <p
            onClick={() => setModalPaymentIsOpen(true)}
              className={`btn btn-primary fs-5 h-40px ms-4 mt-3`}
            >
              Show
            </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-end mt-10">
        <button
          type="submit"
          onClick={closeModal}
          className="btn-form-pos-add-customer"
        >
          Add
        </button>
      </div>
    </Modal>
    <MyTables closeModal={() => setModalPaymentIsOpen(false)}
          modalIsOpen={modalPaymentOpen} />
    </>
  );
};

export default AddTable;
