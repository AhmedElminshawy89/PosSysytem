import Modal from "react-modal";

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
const CancelOrder = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
      <h2 className="mb-5 text-center">Cancel Order</h2>
      <form className="customer-form">
      <div className="form-group mt-5 mb-0 d-flex align-items-center gap-4">
              <label htmlFor="firstName" className="form-label">Order ID</label>
              <span className="form-label">12</span>
        </div>
        <div className="form-group mt-0">
              <label htmlFor="firstName" className="form-label">Cancel Reason</label>
              <textarea type="text" id="FoodNote" name="FoodNote" required rows={4}/>
        </div>
      </form>
      <div className="d-flex justify-content-start">
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
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default CancelOrder;
