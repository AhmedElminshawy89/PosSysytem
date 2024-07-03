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
    maxWidth: "1000px",
    height: "95vh",
  },
};

const paymentOptions = [
  { value: "Cash Payment", label: "Cash Payment" },
  { value: "Credit Card", label: "Credit Card" },
];

const discountOptions = [
  { value: "Percent", label: "Percent(%)" },
  { value: "Amount", label: "Amount" },
];

const PaymentModal = ({ modalIsOpen, closeModal }) => {
  const [discountType, setDiscountType] = useState("Percent");
  const [discount, setDiscount] = useState(0.0002);
  const [payments, setPayments] = useState([]);
  const [payableAmount, setPayableAmount] = useState(0);
  const [focusedPaymentIndex, setFocusedPaymentIndex] = useState(null); // To track focused payment index

  const handleAddPayment = () => {
    // Calculate payable amount after discount
    let totalAmount = 406.98; // Assuming this is your total amount
    let discountedAmount = totalAmount;

    if (discountType === "Percent") {
      discountedAmount -= (discount / 100) * totalAmount;
    } else if (discountType === "Amount") {
      discountedAmount -= discount;
    }

    setPayableAmount(discountedAmount);

    // Reset payments to initial state with Cash Payment
    setPayments([{ method: "Cash Payment", amount: 0 }]);
  };

  const handlePaymentChange = (index, field, value) => {
    const newPayments = [...payments];
    newPayments[index][field] = value;
    setPayments(newPayments);
  };

  const handleRemovePayment = (index) => {
    const newPayments = payments.filter((_, i) => i !== index);
    setPayments(newPayments);
  };

  const handleDiscountChange = (selectedOption) => {
    setDiscountType(selectedOption.value);
  };

  const handleDiscountValueChange = (e) => {
    setDiscount(Number(e.target.value));
  };

  const handlePayNow = () => {
    // Implement payment logic here
    console.log("Paying amount:", payableAmount);
    window.open('/ordermanage/order/posorderinvoice/19', '_blank');
    closeModal(); // Close modal after payment
  };
  const handleAddNewPaymentMethod = () => {
    const newPayments = [...payments, { method: "", amount: 0 }];
    setPayments(newPayments);
    setFocusedPaymentIndex(newPayments.length - 1); // تحديد آخر طريقة دفع كمؤشر مركز
  };
  const handleKeypadClick = (key) => {
    if (focusedPaymentIndex !== null) {
      const newPayments = [...payments];
      const currentAmount = newPayments[focusedPaymentIndex].amount.toString();
      
      if (key === "C") {
        newPayments[focusedPaymentIndex].amount = 0;
      } else if (key === "00") {
        newPayments[focusedPaymentIndex].amount = parseFloat(currentAmount + "00");
      } else {
        newPayments[focusedPaymentIndex].amount = parseFloat(currentAmount + key);
      }
      
      setPayments(newPayments);
    }
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
        <h2>Select Your Payment Method</h2>
        <div className="d-flex gap-4 justify-content-between flex-column flex-md-row">
          <div className="col max-width-600">
            <div className="discount-section">
              <div className="input-group">
                <label htmlFor="discountType" className="form-label">Discount Type</label>
                <Select
                  id="discountType"
                  options={discountOptions}
                  value={discountOptions.find((option) => option.value === discountType)}
                  onChange={handleDiscountChange}
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
              <div className="input-group">
                <label htmlFor="discount" className="form-label">
                  Discount ({discountType === "Percent" ? "%" : "Amount"})
                </label>
                <input
                  type="number"
                  id="discount"
                  value={discount}
                  onChange={handleDiscountValueChange}
                />
              </div>
              <button className="payment-button" onClick={handleAddPayment}>
                Payment
              </button>
            </div>
            {payments.map((payment, index) => (
              <div className="payment-section" key={index}>
                <div className="input-group">
                  <label className="form-label">Payment Method</label>
                  <Select
                    options={paymentOptions}
                    value={paymentOptions.find((option) => option.value === payment.method)}
                    onChange={(selectedOption) =>
                      handlePaymentChange(index, "method", selectedOption.value)
                    }
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </div>
                <div className="input-group">
                  <label className="form-label">Customer Payment</label>
                  <input
                    type="number"
                    value={payment.amount}
                    onChange={(e) =>
                      handlePaymentChange(index, "amount", Number(e.target.value))
                    }
                    onFocus={() => setFocusedPaymentIndex(index)}
                  />
                </div>
                {index > 0 && (
                  <p
                    className="remove-payment-button fs-4 fw-bold cursor-pointer"
                    onClick={() => handleRemovePayment(index)}
                  >
                    x
                  </p>
                )}
              </div>
            ))}
            <div className="d-flex justify-content-end align-items-center">
                          <button className="add-payment-button" onClick={handleAddNewPaymentMethod}>
                Add New Payment Method
              </button>
            </div>
          </div>
          <div className="col max-width-300">
            <div className="summary-section">
              <p className="form-label">Total Amount: 406.98</p>
              <p className="form-label">Total Due: {payableAmount.toFixed(2)}</p>
              <p className="form-label">Payable Amount: {payableAmount.toFixed(2)}</p>
              <p className="form-label">Change Amount: 2</p>
            </div>
            <div className="keypad">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "00", "C"].map((key) => (
                <button
                  key={key}
                  className="keypad-button"
                  onClick={() => handleKeypadClick(key)}
                >
                  {key}
                </button>
              ))}
            </div>
            <button className="pay-now-button" onClick={handlePayNow}>
              Pay Now & Print Invoice
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
