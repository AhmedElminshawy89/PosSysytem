import Modal from "react-modal";
import Select from "react-select";
import { customStylesSelect } from "../../../components/PosComponents/PosOrder/Modal/AddClosingBalance";
import { FaUpload } from "react-icons/fa6";
import icon from '../../../data/Img/7.png'
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
const VerifyAccount = ({ modalIsOpen, closeModal }) => {
    const thirdPartyOrderOptions = [{ value: "option1", label: "VIP Floor" },{ value: "option2", label: "Ground Floor" }];

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
        <div className="d-flex justify-content-between flex-column">
      <h2 className="mb-5 text-start">VerifyAccount</h2>
      <form className="customer-form">
        <div className="form-group">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="short Name">
              Type your Password
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
      </form>
      <div className="d-flex justify-content-end mt-10">
        <button
          type="submit"
          onClick={closeModal}
          className="btn-form-pos-add-customer"
        >
          Reset Data
        </button>
      </div>
        </div>
    </Modal>
  );
};

export default VerifyAccount;
