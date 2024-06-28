import React, { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import "./PaymentModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "95vh",
  },
};

const discountOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
];

const SplitModal = ({ modalIsOpen, closeModal }) => {
  const [discountType, setDiscountType] = useState("0");
  const [selectedBox, setSelectedBox] = useState(null);

  const handleDiscountChange = (selectedOption) => {
    setDiscountType(selectedOption.value);
    setSelectedBox(null); // Reset selected box when changing discount type
  };

  const renderBoxes = () => {
    const numBoxes = parseInt(discountType); // Convert discountType to integer

    return Array.from({ length: numBoxes }, (_, index) => (
      <div
        key={index}
        className={`box-split-order ${
          selectedBox === index ? "border-active-blue" : ""
        }`}
        onClick={() => setSelectedBox(index)}
      >
        {selectedBox === index ? (
          <>
            <p className="fs-2 fw-bold">Order</p>
            <p className="fs-3">Order {index + 1}</p>
            <div className="table-responsive">
              <table className="table-order">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-center fs-3 fw-bold">ITEM</th>
                    <th className="text-center fs-3 fw-bold">VARIANT NAME</th>
                    <th className="text-center fs-3 fw-bold">UNIT PRICE</th>
                    <th className="text-center fs-3 fw-bold">QTY</th>
                    <th className="text-center fs-3 fw-bold">TOTAL PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center p-3 fs-3">Chicken Dumpling</td>
                    <td className="text-center p-3 fs-3">1:3</td>
                    <td className="text-center p-3 fs-3">800:00</td>
                    <td className="text-center p-3 fs-3">1</td>
                    <td className="text-center p-3 fs-3">800</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td colSpan={2} className="text-center p-3 fs-3 fw-bold">
                      Total
                    </td>
                    <td colSpan={3} className="text-center p-3 fs-3 fw-bold">
                      800:00
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td colSpan={2} className="text-center p-3 fs-3 fw-bold">
                      Vat
                    </td>
                    <td colSpan={3} className="text-center p-3 fs-3 fw-bold">
                      120:000
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td colSpan={2} className="text-center p-3 fs-3 fw-bold">
                      Service Charge
                    </td>
                    <td colSpan={3} className="text-center p-3 fs-3 fw-bold">
                      0:000
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td colSpan={2} className="text-center p-3 fs-3 fw-bold">
                      Grand Total
                    </td>
                    <td colSpan={3} className="text-center p-3 fs-3 fw-bold">
                      920:000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor={`customerName${index}`} className="form-label">
                Customer
              </label>
              <Select
                id={`customerName${index}`}
                options={[
                  { value: "Ahmed", label: "Ahmed" },
                  { value: "Mohamed", label: "Mohamed" },
                ]}
                onChange={() => {}}
                className="react-select-container w-300px"
                classNamePrefix="react-select"
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="pay-now-button w-250px">
                Pay Now & Print Invoice
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="fs-2 fw-bold">Order</p>
            <p className="fs-3">Order {index + 1}</p>
            <div className="table-responsive">
              <table className="table-order">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-center fs-3 fw-bold">ITEM</th>
                    <th className="text-center fs-3 fw-bold">VARIANT NAME</th>
                    <th className="text-center fs-3 fw-bold">UNIT PRICE</th>
                    <th className="text-center fs-3 fw-bold">QTY</th>
                    <th className="text-center fs-3 fw-bold">TOTAL PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center p-3 fs-3">Chicken Dumpling</td>
                    <td className="text-center p-3 fs-3">1:3</td>
                    <td className="text-center p-3 fs-3">800:00</td>
                    <td className="text-center p-3 fs-3">1</td>
                    <td className="text-center p-3 fs-3">800</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td colSpan={2} className="text-center p-3 fs-3 fw-bold">
                      Total
                    </td>
                    <td colSpan={3} className="text-center p-3 fs-3 fw-bold">
                      800:00
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td colSpan={2} className="text-center p-3 fs-3 fw-bold">
                      Vat
                    </td>
                    <td colSpan={3} className="text-center p-3 fs-3 fw-bold">
                      120:000
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td colSpan={2} className="text-center p-3 fs-3 fw-bold">
                      Service Charge
                    </td>
                    <td colSpan={3} className="text-center p-3 fs-3 fw-bold">
                      0:000
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td colSpan={2} className="text-center p-3 fs-3 fw-bold">
                      Grand Total
                    </td>
                    <td colSpan={3} className="text-center p-3 fs-3 fw-bold">
                      920:000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor={`customerName${index}`} className="form-label">
                Customer
              </label>
              <Select
                id={`customerName${index}`}
                options={[
                  { value: "Ahmed", label: "Ahmed" },
                  { value: "Mohamed", label: "Mohamed" },
                ]}
                onChange={() => {}}
                className="react-select-container w-300px"
                classNamePrefix="react-select"
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="pay-now-button w-250px">
                Pay Now & Print Invoice
              </button>
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Payment Modal"
      ariaHideApp={false}
    >
      <div className="payment-modal">
        <div className="d-flex gap-4 justify-content-between flex-column flex-lg-row-reverse">
          <div className="col">
            <div className="discount-section">
              <div className="input-group">
                <label htmlFor="discountType" className="form-label">
                  Select number of orders:
                </label>
                <Select
                  id="discountType"
                  options={discountOptions}
                  value={discountOptions.find(
                    (option) => option.value === discountType
                  )}
                  onChange={handleDiscountChange}
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
            </div>
            <div className="boxes-split-order-grid">{renderBoxes()}</div>
          </div>
          <div className="col-lg-3 col pe-3 ps-3">
            <div className=" d-flex justify-content-between align-items-center cursor-pointer border-bottom">
              <p className="fs-4 ps-3">Chicken Dumpling</p>
              <p className="fs-4 pe-3">1</p>
            </div>
            <div className="pt-4 d-flex justify-content-between align-items-center cursor-pointer border-bottom">
              <p className="fs-4 ps-3">Nasi Goreng</p>
              <p className="fs-4 pe-3">1</p>
            </div>{" "}
            <div className="pt-4 d-flex justify-content-between align-items-center cursor-pointer border-bottom">
              <p className="fs-4 ps-3">Chicken quesadillas</p>
              <p className="fs-4 pe-3">1</p>
            </div>{" "}
            <div className="pt-4 d-flex justify-content-between align-items-center cursor-pointer border-bottom">
              <p className="fs-4 ps-3">Satay Chicken</p>
              <p className="fs-4 pe-3">1</p>
            </div>{" "}
            <div className="pt-4 d-flex justify-content-between align-items-center cursor-pointer border-bottom">
              <p className="fs-4 ps-3">Oriental Dish</p>
              <p className="fs-4 pe-3">1</p>
            </div>
            <div className="pt-4 d-flex justify-content-between align-items-center cursor-pointer border-bottom">
              <p className="fs-4 ps-3">Fruit Salad</p>
              <p className="fs-4 pe-3">1</p>
            </div>
            <div className="pt-4 d-flex justify-content-between align-items-center cursor-pointer border-bottom">
              <p className="fs-4 ps-3">Coca-cola</p>
              <p className="fs-4 pe-3">1</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SplitModal;
