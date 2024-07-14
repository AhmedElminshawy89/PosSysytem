import Modal from "react-modal";
import "../CustomerModal.css";
import "jspdf-autotable";
import "../../../../pages/POS/Tabs/QROrder/QROrder.css";
import CountUp from "react-countup";
import { AiFillEyeInvisible } from "react-icons/ai";
import { format } from "date-fns";
import Select from "react-select";
import { Link } from "react-router-dom";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "700px",
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
const AddOpeningBalance = ({ modalIsOpen, closeModal }) => {
  //   const startDate = new Date("2024-06-22T19:08:00");
  //   const endDate = new Date("2024-07-28T05:08:00");
  const currentDate = format(new Date(), "dd MMM, yyyy HH:mm");
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
      <h2 className="mb-5">
        Start Register ( {format(currentDate, "dd MMM, yyyy HH:mm")})
      </h2>
      <div className="card" style={{ border: "none", boxShadow: "none" }}>
        <div className="card-body pt-0">
          <div className="mt-6 d-flex align-items-center gap-16 w-full-title">
            <div className="d-flex flex-column gap-3 w-full-title">
              <div className="d-flex mt-4 align-items-start flex-column">
                <label className="form-label fs-3 text-nowrap mr-90">
                  Counter Number{" "}
                  <span className="required-field-form-order">*</span>
                </label>
                <Select
                  id="waiter"
                  name="waiter"
                  options={[
                    { value: "25", label: "25" },
                    { value: "30", label: "30" },
                    { value: "35", label: "35" },
                  ]}
                  isSearchable={true}
                  placeholder="Select..."
                  className="select-form-order-pos"
                  styles={customStylesSelect}
                />
              </div>
              <div className="d-flex mt-4 align-items-start flex-column">
                <label className="form-label fs-3 text-nowrap mr-90">
                  Total Amount{" "}
                  <span className="required-field-form-order">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Total Amount"
                  className="select-form-order-pos input-form-order"
                  style={{ borderRadius: ".75rem" }}
                />
              </div>
              <div className="d-flex mt-4 align-items-start flex-column">
                <label className="form-label fs-3 text-nowrap mr-90">
                  Note <span className="required-field-form-order">*</span>
                </label>
                <textarea
                  rows={4}
                  type="text"
                  placeholder="Note"
                  className="select-form-order-pos input-form-order"
                  style={{ borderRadius: ".75rem" }}
                />
              </div>
              <div className="d-flex mt-4 align-items-start flex-row gap-4 justify-content-end">
                <Link to={'/'} className="btn btn-light-primary">Dashboard</Link>
                <button  className="btn btn-primary">Add Opening Balance</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddOpeningBalance;
