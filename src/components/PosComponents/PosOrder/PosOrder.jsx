import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import FormOrder from "./FormOrder";
import { FaStickyNote } from "react-icons/fa";
import { CgCalculator } from "react-icons/cg";
import CalculatorModal from "./CalculatorModal"; // استيراد المودال

const PosOrder = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "T-Bone Steak",
      img: "/assets/media/stock/food/img-2.jpg",
      variant: "1 Person",
      price: 66.0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Whopper Burger",
      img: "https://fitmencook.com/wp-content/uploads/2023/03/Burger-King-Cheese-Whopper-Burger-Recipe11.jpg.webp",
      variant: "1 Person",
      price: 12.0,
      quantity: 2,
    },
  ]);

  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleQuantityChange = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return items
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const subtotal = calculateTotal();
  const discount = 8.0;
  const taxRate = 0.12;
  const tax = (subtotal * taxRate).toFixed(2);
  const total = (subtotal - discount + parseFloat(tax)).toFixed(2);

  return (
    <div className="flex-row-auto w-xl-450px pos-order-equal-toolpar flex-1-pos-items">
      <FormOrder />
      <div className="card card-flush bg-body mt-10" id="kt_pos_form">
        <div className="card-header pt-5">
          <h3 className="card-title fw-bold text-gray-800 fs-2qx">
            Current Order
          </h3>
          <div className="card-toolbar">
            <button
              className="btn fs-4 fw-bold py-4"
              style={{ color: "red" }}
              onClick={() => setItems([])}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="table-responsive mb-8">
            <table className="table align-middle gs-0 gy-4 my-0">
              <thead>
                <tr>
                  <th className="w-20px"></th>
                  <th className="min-w-175px th-thead-pos-order fw-bold fs-3">
                    Item
                  </th>
                  <th className="w-60px th-thead-pos-order fw-bold fs-3">
                    Price
                  </th>
                  <th className="w-125px th-thead-pos-order fw-bold fs-3">
                    Quantity
                  </th>
                  <th className="w-60px fw-bold fs-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} style={{ backgroundColor: "white" }}>
                    <td>
                      <MdDeleteOutline
                        className="posorder-trash-del"
                        onClick={() => handleDeleteItem(item.id)}
                      />
                    </td>
                    <td className="pe-0">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.img}
                          className="w-50px h-50px rounded-3 me-3"
                          alt=""
                        />
                        <span className="fw-bold text-gray-800  fs-3 me-1">
                          <span className="text-hover-primary cursor-pointer">
                            {item.name}
                          </span>
                          <FaStickyNote className="text-success cursor-pointer ml-1" />{" "}
                          <br />
                          <span className="fs-6">variant: {item.variant}</span>
                        </span>
                      </div>
                    </td>
                    <td className="text-end">
                      <span
                        className="fw-bold text-primary fs-2 d-flex gap-1"
                        data-kt-pos-element="item-total"
                      >
                        <p style={{ color: "darkgray" }}>L.E</p>
                        <p style={{ color: "darkgray" }}>
                          {item.price.toFixed(2)}
                        </p>
                      </span>
                    </td>
                    <td className="pe-0">
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
                          value={item.quantity}
                          readOnly
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
                    <td className="text-end">
                      <span
                        className="fw-bold text-primary fs-2 d-flex gap-1"
                        data-kt-pos-element="item-total"
                      >
                        <p style={{ color: "darkgray" }}>L.E</p>
                        {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr className="line-seperate-calc-price-table" />
          <div className="d-flex flex-stack rounded-3 p-6">
            <div
              className="fs-6 fw-bold total-pos-order-calc"
              style={{ color: "darkgray" }}
            >
              <span className="d-block lh-1 mb-2" style={{ fontSize: "18px" }}>
                Subtotal
              </span>
              <span className="d-block mb-2" style={{ fontSize: "18px" }}>
                Discounts
              </span>
              <span className="d-block mb-2" style={{ fontSize: "18px" }}>
                Service Charge(15%)
              </span>
              <span className="d-block mb-9" style={{ fontSize: "18px" }}>
                Tax Charge(12%)
              </span>
            </div>
            <div
              className="fs-6 fw-bold  text-end"
              style={{ color: "darkgray" }}
            >
              <span
                className="d-block lh-1 mb-2"
                data-kt-pos-element="total"
                style={{ fontSize: "18px" }}
              >
                <span>L.E</span>{" "}
                <span className="text-primary">{subtotal}</span>
              </span>
              <span
                className="d-block mb-2"
                data-kt-pos-element="discount"
                style={{ fontSize: "18px" }}
              >
                <span>L.E</span>{" "}
                <span className="text-primary">{discount.toFixed(2)}</span>
              </span>
              <span
                className="d-block mb-2"
                data-kt-pos-element="tax"
                style={{ fontSize: "18px" }}
              >
                <span>L.E</span> <span className="text-primary">{tax}</span>
              </span>
              <span
                className="d-block mb-9"
                data-kt-pos-element="tax"
                style={{ fontSize: "18px" }}
              >
                <span>L.E</span> <span className="text-primary">{tax}</span>
              </span>
            </div>
          </div>
          <div className="d-flex gap-3 width-seperate-calc-price-table">
            <div className="fs-6 fw-bold text-white total-pos-order-cat bg-success p-4">
              <span className="d-block fs-2qx lh-1">Grand Total: </span>
            </div>
            <div className="fs-6 fw-bold text-white text-start bg-success p-4 width--calc-price-table">
              <span
                className="d-block fs-2qx lh-1"
                data-kt-pos-element="grant-total"
              >
                L.E {total}
              </span>
            </div>
          </div>
          <div className="mt-5 d-flex gap-3">
            <span className=" w-100 d-flex justify-content-end ">
              <button
                className="btn btn-primary "
                onClick={() => setIsCalculatorOpen(true)}
              >
                <CgCalculator className="fs-1" />
              </button>
            </span>
            <button className="btn btn-quick-order-pos  w-100 py-4" style={{textWrap:'nowrap'}}>
              Quick Order
            </button>
            <button className="btn fs-1 w-87 py-4 btn-place-order-pos"  style={{textWrap:'nowrap'}}>
              Place Order
            </button>
          </div>
        </div>
      </div>
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onRequestClose={() => setIsCalculatorOpen(false)}
      />
    </div>
  );
};

export default PosOrder;
