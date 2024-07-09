import React from "react";
import { CgCalculator } from "react-icons/cg";

const TableCalculation = ({
  subtotal,
  discount,
  serviceCharge,
  tax,
  handleQuickOrder,
  handlePlaceOrder,
  setIsCalculatorOpen
}) => {
  return (
    <div className="table-responsive mb-8 mt--5px tableCalculation-base">
      <table className="table align-middle gs-0 gy-4 my-0">
        <thead>
          <tr>
            <th className="w-20px"></th>
            <th className="min-w-175px  fw-bold fs-3"></th>
            <th className="w-60px  fw-bold fs-3 text-center"></th>
            <th className="w-125px   text-center fw-bold fs-3"></th>
            <th className="w-60px fw-bold fs-3 text-start ps-0"></th>
          </tr>
        </thead>
        <tfoot>
          <tr
            style={{ backgroundColor: "white" }}
            className="line-seperate-calc-price-table"
          >
            <td className="pb-0"></td>
            <td className="pe-0 pb-0"></td>
            <td className="text-end pb-0">
              <span
                className="fw-bold text-primary fs-2"
                data-kt-pos-element="item-total"
              >
                <p style={{ color: "darkgray" }}>Subtotal</p>
              </span>
            </td>
            <td className="pe-0 pb-0"></td>
            <td className="text-center pb-0">
              <span
                className="fw-bold text-primary fs-2  mr--15 text-nowrap"
                data-kt-pos-element="item-total"
              >
                {subtotal}
              </span>
            </td>
          </tr>
          <tr style={{ backgroundColor: "white" }}>
            <td className="pb-0 pt-0"></td>
            <td className="pe-0 pb-0 pt-0"></td>
            <td className="text-end pb-0 pt-0">
              <span
                className="fw-bold text-primary fs-2"
                data-kt-pos-element="item-total"
              >
                <p style={{ color: "darkgray" }}>Discount</p>
              </span>
            </td>
            <td className="pe-0 pb-0 pt-0"></td>
            <td
              className="text-center
           pb-0 pt-0"
            >
              <span
                className="fw-bold text-primary fs-2  mr--15 text-nowrap"
                data-kt-pos-element="item-total"
              >
                {discount}.00
              </span>
            </td>
          </tr>
          <tr style={{ backgroundColor: "white" }}>
            <td className="pb-0  pt-0"></td>
            <td className="text-end pb-0  pt-0" colSpan={"2"}>
              <span
                className="fw-bold text-primary fs-2"
                data-kt-pos-element="item-total"
              >
                <p style={{ color: "darkgray" }}>Service Charge (15%)</p>
              </span>
            </td>
            <td className="pe-0  pb-0  pt-0"></td>
            <td className="text-center pb-0  pt-0">
              <span
                className="fw-bold text-primary fs-2  mr--15 text-nowrap"
                data-kt-pos-element="item-total"
              >
                {serviceCharge}
              </span>
            </td>
          </tr>
          <tr style={{ backgroundColor: "white" }}>
            <td className="pb-0 pt-0"></td>
            <td className="text-end pb-0 pt-0" colSpan={"2"}>
              <span
                className="fw-bold text-primary fs-2"
                data-kt-pos-element="item-total"
              >
                <p style={{ color: "darkgray" }}>Tax Charge (12%)</p>
              </span>
            </td>
            <td className="pe-0 pb-0 pt-0"></td>
            <td className="text-center pb-0  pt-0">
              <span
                className="fw-bold text-primary fs-2  mr--15 text-nowrap"
                data-kt-pos-element="item-total"
              >
                {tax}
              </span>
            </td>
          </tr>
          <tr style={{ backgroundColor: "#17c653" }}>
            <td className=" all-total-words-pos-order"></td>
            <td className="text-end" colSpan={2}>
              <span className="fw-bold text-white d-block fs-2qx lh-1 text-nowrap">
                Grand Total:
              </span>
            </td>
            <td className=" all-total-pos-order text-center" colSpan={3}>
              <span className="fw-bold text-white d-block fs-2qx lh-1 text-nowrap">
                LE {subtotal}
              </span>
            </td>
          </tr>
          <tr style={{ backgroundColor: "#fff" }}>
            <td className=" all-total-words-pos-order"></td>
            <td className="d-flex justify-content-end">
              <p
                className="btn-quick-order-pos btn-calculator-pos-order"
                onClick={() => setIsCalculatorOpen(true)}
              >
                <CgCalculator className="fs-1" />
              </p>
            </td>
            <td className="text-end max-w-210px pe-1 ps-0" colSpan={1}>
              <p className="btn-quick-order-pos " onClick={handleQuickOrder}>
                Quick Order
              </p>
            </td>
            <td className="text-center pe-0 ps-0" colSpan={3}>
              <p className="btn-place-order-pos" onClick={handlePlaceOrder}>
                Place Order
              </p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TableCalculation;
