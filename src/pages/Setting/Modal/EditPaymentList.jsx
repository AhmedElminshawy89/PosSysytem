import Modal from "react-modal";
import Select from "react-select";
import { customStylesSelect } from "../../../components/PosComponents/PosOrder/Modal/AddClosingBalance";

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
const EditPaymentList = ({ modalIsOpen, closeModal }) => {
    const thirdPartyOrderOptions = [{ value: "option1", label: "Active" },{ value: "option2", label: "Inactive" }];

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
      <h2 className="mb-5 text-start">Payment Method List</h2>
      <form className="customer-form">
        <div className="form-group">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="short Name">
              Short Name
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
        <div className="form-column">
              <label className="form-label" htmlFor="country">
                Status
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
      </form>
      <div className="d-flex justify-content-end mt-10">
        <button
          type="submit"
          onClick={closeModal}
          className="btn-form-pos-add-customer"
        >
          Update
        </button>
      </div>
    </Modal>
  );
};

export default EditPaymentList;
