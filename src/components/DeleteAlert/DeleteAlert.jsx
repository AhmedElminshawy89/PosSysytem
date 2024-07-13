import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const DeleteAlertModal = ({ isOpen, closeModal, onDeleteConfirm }) => {
  const handleDelete = () => {
    onDeleteConfirm();
    closeModal();
    toast.success("Item deleted successfully!");
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
          <h2 className="modal-title">Delete Confirmation</h2>
          {/* <button onClick={closeModal} className="btn btn-danger px-2 py-1">
            <AiOutlineClose size={20} />
          </button> */}
        </div>
        <div className="modal-body">
          <p className="mt-2 fs-4 mb-2">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
        </div>
        <div className="modal-footer mt-4">
          <button onClick={closeModal} className="btn btn-outline  me-4">
            Cancel
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAlertModal;
