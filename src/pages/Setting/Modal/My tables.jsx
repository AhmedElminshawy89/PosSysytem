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
const MyTables = ({ modalIsOpen, closeModal }) => {
    const thirdPartyOrderOptions = [{ value: "option1", label: "VIP Floor" },{ value: "option2", label: "Ground Floor" }];

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
        <div className="d-flex align-items-center justify-content-between">
      <h2 className="mb-5 text-start">MyTables</h2>
      <p
              to="/purchase/purchase/create"
              className={`btn btn-primary fs-5 h-40px`}
            >
              <FaUpload className="fs-6 me-2" />
              Upload Files
            </p>
        </div>
        <div className="d-flex gap-4 flex-wrap mt-6">
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
        </div>
    </Modal>
  );
};

export default MyTables;
