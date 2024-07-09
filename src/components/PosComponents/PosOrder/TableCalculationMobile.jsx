import React from "react";
import { CgCalculator } from "react-icons/cg";

const TableCalculationMobile = ({
  subtotal,
  discount,
  serviceCharge,
  tax,
  handleQuickOrder,
  handlePlaceOrder,
  setIsCalculatorOpen
}) => {
  return (
    <div className="mt-8 tableCalculation-mobile">
      <div className="table align-middle gs-0 gy-4 my-0">
        <div>
          <div
            style={{ backgroundColor: "white" }}
            className="d-flex justify-content-between"
          >
            <div className="text-end pb-0">
              <span
                className="fw-bold text-primary fs-2"
                data-kt-pos-element="item-total"
              >
                <p style={{ color: "darkgray" }}>Subtotal</p>
              </span>
            </div>
            <div className="text-center pb-0">
              <span
                className="fw-bold text-primary fs-2  mr--15 text-nowrap"
                data-kt-pos-element="item-total"
              >
                {subtotal}
              </span>
            </div>
          </div>
          <div
            style={{ backgroundColor: "white" }}
            className="d-flex justify-content-between"
          >
            <div className="text-end pb-0">
              <span
                className="fw-bold text-primary fs-2"
                data-kt-pos-element="item-total"
              >
                <p style={{ color: "darkgray" }}>Discount</p>
              </span>
            </div>
            <div className="text-center pb-0">
              <span
                className="fw-bold text-primary fs-2  mr--15 text-nowrap"
                data-kt-pos-element="item-total"
              >
                {discount}.00
              </span>
            </div>
          </div>
          <div
            style={{ backgroundColor: "white" }}
            className="d-flex justify-content-between"
          >
            <div className="text-end pb-0">
              <span
                className="fw-bold text-primary fs-2"
                data-kt-pos-element="item-total"
              >
                <p style={{ color: "darkgray" }} className="text-nowrap">Service Charge (15%)</p>
              </span>
            </div>
            <div className="text-center pb-0">
              <span
                className="fw-bold text-primary fs-2  mr--15 text-nowrap"
                data-kt-pos-element="item-total"
              >
                {serviceCharge}
              </span>
            </div>
          </div>
          <div
            style={{ backgroundColor: "white" }}
            className="d-flex justify-content-between"
          >
            <div className="text-end pb-0">
              <span
                className="fw-bold text-primary fs-2"
                data-kt-pos-element="item-total"
              >
                <p style={{ color: "darkgray" }} className="text-nowrap">Tax Charge (12%)</p>
              </span>
            </div>
            <div className="text-center pb-0">
              <span
                className="fw-bold text-primary fs-2  mr--15 text-nowrap"
                data-kt-pos-element="item-total"
              >
                {tax}
              </span>
            </div>
          </div>
          <div style={{ backgroundColor: "#17c653",borderBottomRightRadius:'20px',height:'60px' }} className=" all-total-words-pos-order d-flex justify-content-center">
            <div className="text-end" colSpan={2}>
              <span className="fw-bold text-white d-block fs-2qx lh-1 mt-2">
                Grand Total:
              </span>
            </div>
            <div className=" all-total-pos-order text-center">
              <span className="fw-bold text-white text-center d-block fs-2qx lh-1  mt-2">
                LE {subtotal}
              </span>
            </div>
          </div>
          <div>
            <div>
              <button
                className="btn btn-primary mt-4 py-5"
                style={{width:'100%'}}
                onClick={() => setIsCalculatorOpen(true)}
              >
                <CgCalculator className="fs-1" />
              </button>
            </div>
            <div>
              <p className="btn-quick-order-pos " onClick={handleQuickOrder}>
                Quick Order
              </p>
            </div>
            <div>
              <p className="btn-place-order-pos" onClick={handlePlaceOrder}>
                Place Order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCalculationMobile;
