import Modal from "react-modal";
import "../CustomerModal.css";
import "jspdf-autotable";
import "../../../../pages/POS/Tabs/QROrder/QROrder.css";
import CountUp from "react-countup";
import { AiFillEyeInvisible } from "react-icons/ai";
import { format } from "date-fns";

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
            
        </div>
      </div>
    </Modal>
  );
};

export default AddOpeningBalance;
