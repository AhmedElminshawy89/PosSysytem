import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import FormOrder from "./FormOrder";

const PosOrder = () => {
  const [items, setItems] = useState([
    { id: 1, name: "T-Bone Steak", variant: "1 Person", price: 66.00, quantity: 2 },
  ]);

  const handleQuantityChange = (id, delta) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const subtotal = calculateTotal();
  const discount = 8.00;
  const taxRate = 0.12;
  const tax = (subtotal * taxRate).toFixed(2);
  const total = (subtotal - discount + parseFloat(tax)).toFixed(2);

  return (
    <div className="flex-row-auto w-xl-450px">
      <FormOrder />
      <div className="card card-flush bg-body" id="kt_pos_form">
        <div className="card-header pt-5">
          <h3 className="card-title fw-bold text-gray-800 fs-2qx">Current Order</h3>
          <div className="card-toolbar">
            <button className="btn btn-light-primary fs-4 fw-bold py-4" onClick={() => setItems([])}>
              Clear All
            </button>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="table-responsive mb-8">
            <table className="table align-middle gs-0 gy-4 my-0">
              <thead>
                <tr>
                  <th style={{ minWidth: '96px', textAlign: 'start' }}>Item</th>
                  <th style={{ minWidth: '96px', textAlign: 'start' }}>Variant Name</th>
                  <th style={{ minWidth: '96px', textAlign: 'start' }}>Price</th>
                  <th style={{ minWidth: '90px', textAlign: 'start' }}>Quantity</th>
                  <th style={{ minWidth: '96px', textAlign: 'start' }}>Total</th>
                  <th style={{ minWidth: '96px', textAlign: 'start' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} data-kt-pos-element="item" data-kt-pos-item-price={item.price}>
                    <td className="pe-0" style={{ minWidth: '96px', textAlign: 'start' }}>
                      <div className="d-flex align-items-center">
                        <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="pe-0" style={{ minWidth: '96px', textAlign: 'start' }}>
                      <div className="d-flex align-items-center">
                        <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">
                          {item.variant}
                        </span>
                      </div>
                    </td>
                    <td style={{ minWidth: '96px', textAlign: 'start' }}>
                      <span className="fw-bold text-primary fs-2" data-kt-pos-element="item-total">
                        ${item.price.toFixed(2)}
                      </span>
                    </td>
                    <td className="pe-0" style={{ minWidth: '90px', textAlign: 'start' }}>
                      <div className="position-relative">
                        <button
                          type="button"
                          className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <i className="ki-outline ki-minus fs-2x"></i>
                        </button>
                        <input
                          type="text"
                          className="form-control border-0 text-center p-0 fs-3 fw-bold text-gray-800 w-30px"
                          placeholder="Amount"
                          name="manageBudget"
                          readOnly="readonly"
                          value={item.quantity}
                        />
                        <button
                          type="button"
                          className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <i className="ki-outline ki-plus fs-2x"></i>
                        </button>
                      </div>
                    </td>
                    <td style={{ minWidth: '96px', textAlign: 'start' }}>
                      <span className="fw-bold text-primary fs-2" data-kt-pos-element="item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </td>
                    <td style={{ minWidth: '96px', textAlign: 'start' }}>
                      <MdDeleteOutline className="posorder-trash-del" onClick={() => handleDeleteItem(item.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-stack bg-success rounded-3 p-6 mb-11">
            <div className="fs-6 fw-bold text-white">
              <span className="d-block lh-1 mb-2">Subtotal</span>
              <span className="d-block mb-2">Discounts</span>
              <span className="d-block mb-9">Tax(12%)</span>
              <span className="d-block fs-2qx lh-1">Total</span>
            </div>
            <div className="fs-6 fw-bold text-white text-end">
              <span className="d-block lh-1 mb-2" data-kt-pos-element="total">
                ${subtotal}
              </span>
              <span className="d-block mb-2" data-kt-pos-element="discount">
                -${discount.toFixed(2)}
              </span>
              <span className="d-block mb-9" data-kt-pos-element="tax">
                ${tax}
              </span>
              <span className="d-block fs-2qx lh-1" data-kt-pos-element="grant-total">
                ${total}
              </span>
            </div>
          </div>
          <div className="m-0">
            <h1 className="fw-bold text-gray-800 mb-5">Payment Method</h1>
            <div
              className="d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-12"
              data-kt-buttons="true"
              data-kt-buttons-target="[data-kt-button]"
            >
              <label
                className="btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4"
                data-kt-button="true"
              >
                <input
                  className="btn-check"
                  type="radio"
                  name="method"
                  value="0"
                />
                <i className="ki-outline ki-dollar fs-2hx mb-2 pe-0"></i>
                <span className="fs-7 fw-bold d-block">Cash</span>
              </label>
              <label
                className="btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 active"
                data-kt-button="true"
              >
                <input
                  className="btn-check"
                  type="radio"
                  name="method"
                  value="1"
                />
                <i className="ki-outline ki-credit-cart fs-2hx mb-2 pe-0"></i>
                <span className="fs-7 fw-bold d-block">Card</span>
              </label>
              <label
                className="btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4"
                data-kt-button="true"
              >
                <input
                  className="btn-check"
                  type="radio"
                  name="method"
                  value="2"
                />
                <i className="ki-outline ki-paypal fs-2hx mb-2 pe-0"></i>
                <span className="fs-7 fw-bold d-block">E-Wallet</span>
              </label>
            </div>
            <button className="btn btn-primary fs-1 w-100 py-4">Print Bills</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosOrder;
