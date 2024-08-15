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
const PaymentMethodSetUp = ({ modalIsOpen, closeModal }) => {
    const thirdPartyOrderOptions = [{ value: "option1", label: "Active" },{ value: "option2", label: "Inactive" }];

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Customer Modal"
      ariaHideApp={true}
    >
      <h2 className="mb-5 text-start">Update Payment Method      </h2>
      <form className="customer-form">
        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="short Name">
              Payment Method Name <span className="required-field-form-order">*</span>
              </label>
              <Select
                id="thirdPartyOrderID"
                name="thirdPartyOrderID"
                options={[{ value: "option1", label: "Stripe Payment"},{ value: "option2", label: "Two Checkout"}
                    ,{ value: "option3", label: "Paypal"}
                ]}
                isSearchable={true}
                placeholder={`Select...`}
                className="select-form-order-pos"
                styles={customStylesSelect}
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="short Name">
              Marchant ID 
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
              Password
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
              Email Address
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
              Currency  <span className="required-field-form-order">*</span>
              </label>
              <Select
                id="thirdPartyOrderID"
                name="thirdPartyOrderID"
                options={[{ value: "option1", label: "(USD)U.S.Dollar"},{ value: "option2", label: "(EUR) Euro"}
                    ,{ value: "option3", label: "(AUD) Australia Dollar"}
                ]}
                isSearchable={true}
                placeholder={`Select...`}
                className="select-form-order-pos"
                styles={customStylesSelect}
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-0">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="short Name">
              Is Live or Test  <span className="required-field-form-order">*</span>
              </label>
              <Select
                id="thirdPartyOrderID"
                name="thirdPartyOrderID"
                options={[{ value: "option1", label: "Test Mode"},{ value: "option2", label: "Live"}
                ]}
                isSearchable={true}
                placeholder={`Select...`}
                className="select-form-order-pos"
                styles={customStylesSelect}
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

export default PaymentMethodSetUp;
