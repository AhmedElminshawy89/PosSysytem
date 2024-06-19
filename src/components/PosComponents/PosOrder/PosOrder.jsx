import React from "react";
import Select from "../../Global/Select/Select";

const PosOrder = () => {
  return (
    <div className="flex-row-auto w-xl-450px">
		<form action="">
			<div className="d-flex gap-2 flex-column flex-md-row">
				<Select label="Customer Name" options={["John Doe", "Jane Smith"]} name="customerName" />
				<Select label="Service Charge Type" options={["serv1", "serv2"]} name="Service Charge Type" />
			</div>
			<div className="d-flex gap-2 flex-column flex-md-row">
				<Select label="Customer Type" options={["Type 1", "Type 2"]} name="Customer Type" />
				<Select label="Delivery Company " options={["option1", "option2"]} name="Delivery Company " />
			</div>
			<div className="d-flex gap-2 flex-column flex-md-row">
				<Select label="Third-party Order ID " options={["option1", "option2"]} name="Third-party Order ID    " />
			</div>
		</form>
      <div className="card card-flush bg-body" id="kt_pos_form">
        <div className="card-header pt-5">
          <h3 className="card-title fw-bold text-gray-800 fs-2qx">
            Current Order
          </h3>
          <div className="card-toolbar">
            <a className="btn btn-light-primary fs-4 fw-bold py-4">Clear All</a>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="table-responsive mb-8">
            <table className="table align-middle gs-0 gy-4 my-0">
              <thead>
                <tr>
                  <th className="min-w-175px"></th>
                  <th className="w-125px"></th>
                  <th className="w-60px"></th>
                </tr>
              </thead>
              <tbody>
                <tr data-kt-pos-element="item" data-kt-pos-item-price="33">
                  <td className="pe-0">
                    <div className="d-flex align-items-center">
                      <img
                        src="/assets/media/stock/food/img-2.jpg"
                        className="w-50px h-50px rounded-3 me-3"
                        alt=""
                      />
                      <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">
                        T-Bone Stake
                      </span>
                    </div>
                  </td>
                  <td className="pe-0">
                    <div
                      className="position-relative d-flex align-items-center"
                      data-kt-dialer="true"
                      data-kt-dialer-min="1"
                      data-kt-dialer-max="10"
                      data-kt-dialer-step="1"
                      data-kt-dialer-decimals="0"
                    >
                      <button
                        type="button"
                        className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                        data-kt-dialer-control="decrease"
                      >
                        <i className="ki-outline ki-minus fs-3x"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px"
                        data-kt-dialer-control="input"
                        placeholder="Amount"
                        name="manageBudget"
                        readonly="readonly"
                        value="2"
                      />
                      <button
                        type="button"
                        className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                        data-kt-dialer-control="increase"
                      >
                        <i className="ki-outline ki-plus fs-3x"></i>
                      </button>
                    </div>
                  </td>
                  <td className="text-end">
                    <span
                      className="fw-bold text-primary fs-2"
                      data-kt-pos-element="item-total"
                    >
                      $66.00
                    </span>
                  </td>
                </tr>
                <tr data-kt-pos-element="item" data-kt-pos-item-price="7.5">
                  <td className="pe-0">
                    <div className="d-flex align-items-center">
                      <img
                        src="/assets/media/stock/food/img-9.jpg"
                        className="w-50px h-50px rounded-3 me-3"
                        alt=""
                      />
                      <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">
                        Soup of the Day
                      </span>
                    </div>
                  </td>
                  <td className="pe-0">
                    <div
                      className="position-relative d-flex align-items-center"
                      data-kt-dialer="true"
                      data-kt-dialer-min="1"
                      data-kt-dialer-max="10"
                      data-kt-dialer-step="1"
                      data-kt-dialer-decimals="0"
                    >
                      <button
                        type="button"
                        className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                        data-kt-dialer-control="decrease"
                      >
                        <i className="ki-outline ki-minus fs-3x"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px"
                        data-kt-dialer-control="input"
                        placeholder="Amount"
                        name="manageBudget"
                        readonly="readonly"
                        value="1"
                      />
                      <button
                        type="button"
                        className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                        data-kt-dialer-control="increase"
                      >
                        <i className="ki-outline ki-plus fs-3x"></i>
                      </button>
                    </div>
                  </td>
                  <td className="text-end">
                    <span
                      className="fw-bold text-primary fs-2"
                      data-kt-pos-element="item-total"
                    >
                      $7.50
                    </span>
                  </td>
                </tr>
                <tr data-kt-pos-element="item" data-kt-pos-item-price="13.5">
                  <td className="pe-0">
                    <div className="d-flex align-items-center">
                      <img
                        src="/assets/media/stock/food/img-3.jpg"
                        className="w-50px h-50px rounded-3 me-3"
                        alt=""
                      />
                      <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">
                        Pancakes
                      </span>
                    </div>
                  </td>
                  <td className="pe-0">
                    <div
                      className="position-relative d-flex align-items-center"
                      data-kt-dialer="true"
                      data-kt-dialer-min="1"
                      data-kt-dialer-max="10"
                      data-kt-dialer-step="1"
                      data-kt-dialer-decimals="0"
                    >
                      <button
                        type="button"
                        className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                        data-kt-dialer-control="decrease"
                      >
                        <i className="ki-outline ki-minus fs-3x"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px"
                        data-kt-dialer-control="input"
                        placeholder="Amount"
                        name="manageBudget"
                        readonly="readonly"
                        value="2"
                      />
                      <button
                        type="button"
                        className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                        data-kt-dialer-control="increase"
                      >
                        <i className="ki-outline ki-plus fs-3x"></i>
                      </button>
                    </div>
                  </td>
                  <td className="text-end">
                    <span
                      className="fw-bold text-primary fs-2"
                      data-kt-pos-element="item-total"
                    >
                      $27.00
                    </span>
                  </td>
                </tr>
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
                $100.50
              </span>
              <span className="d-block mb-2" data-kt-pos-element="discount">
                -$8.00
              </span>
              <span className="d-block mb-9" data-kt-pos-element="tax">
                $11.20
              </span>
              <span
                className="d-block fs-2qx lh-1"
                data-kt-pos-element="grant-total"
              >
                $93.46
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
            <button className="btn btn-primary fs-1 w-100 py-4">
              Print Bills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosOrder;
