import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const CustomerModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
      <h2 className='text-center mb-5'>Add Customer</h2>
      <form>
        <div className='mb-5'>
          <label htmlFor="customerName" className='form-label'>Customer Name *</label><br/>
          <input type="text" id="customerName"
          className='select-form-order-pos input-form-order' name="customerName" placeholder='' required />
        </div>
        <div>
          <label htmlFor="emailAddress" className='form-label'>Email Address *</label><br/>
          <input type="email" id="emailAddress"
          className='select-form-order-pos input-form-order' name="emailAddress" placeholder='' required />
        </div>
        <div>
          <label htmlFor="mobile" className='form-label'>Mobile *</label>
          <input type="tel" id="mobile"
          className='select-form-order-pos input-form-order' name="mobile" required />
        </div>
        <div>
          <label htmlFor="address" className='form-label'>Address</label>
          <input type="text" id="address" className='select-form-order-pos input-form-order' name="address" />
        </div>
        <div>
          <label htmlFor="favoriteAddress" className='form-label'>Favorite Address</label>
          <input type="text" id="favoriteAddress" className='select-form-order-pos input-form-order' name="favoriteAddress" />
        </div>
        <button type="button" onClick={closeModal}
        className='btn btn-flex btn-outline btn-color-gray-700
        mr-15 btn-active-color-primary bg-body mt-10 h-40px fs-7 fw-bold'>Close</button>
        <button type="submit" onClick={closeModal} 
        className='btn btn-flex btn-primary h-40px fs-7 fw-bold mt-10'>Save</button>
      </form>
    </Modal>
  );
};

export default CustomerModal;
