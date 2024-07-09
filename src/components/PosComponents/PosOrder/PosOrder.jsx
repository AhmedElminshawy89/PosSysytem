import React, { useRef, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import FormOrder from "./Modal/FormOrder";
import { FaStickyNote } from "react-icons/fa";
import CalculatorModal from "./Modal/CalculatorModal"; // استيراد المودال
import AddNote from "./Modal/AddNote";
import PersonModal from "./Modal/PersonModal";
import Select from "react-select";
import Swal from "sweetalert2";
import { TbWorld } from "react-icons/tb";
import { toast } from "react-toastify";
import CookingTimeInput from "./Modal/CookingTimeInput";
import jsPDF from "jspdf";
import { useHotkeys } from "react-hotkeys-hook";
import PaymentModal from "../../../pages/POS/Tabs/OnGoingOrder/CompleteOrder";
import { useNavigate } from "react-router-dom";
import { customStylesSelect } from "./Modal/AddCustomer";
import TableCalculation from "./TableCalculation";
import TableCalculationMobile from "./TableCalculationMobile";
const PosOrder = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Beef Stew (Kabab Halla)",
      img: "/assets/media/stock/food/img-1.jpg",
      variant: "1 Piece",
      price: 150.5,
      quantity: 2,
    },
    {
      id: 2,
      name: "Beef Stew (Kabab Halla)",
      img: "/assets/media/stock/food/img-1.jpg",
      variant: "1 Piece",
      price: 150.5,
      quantity: 2,
    },
    {
      id: 3,
      name: "Beef Stew (Kabab Halla)",
      img: "/assets/media/stock/food/img-1.jpg",
      variant: "1 Piece",
      price: 150.5,
      quantity: 2,
    },
    {
      id: 4,
      name: "Beef Stew (Kabab Halla)",
      img: "/assets/media/stock/food/img-1.jpg",
      variant: "1 Piece",
      price: 150.5,
      quantity: 2,
    },
    {
      id: 5,
      name: "Beef Stew (Kabab Halla)",
      img: "/assets/media/stock/food/img-1.jpg",
      variant: "1 Piece",
      price: 150.5,
      quantity: 2,
    },
    {
      id: 6,
      name: "Beef Stew (Kabab Halla)",
      img: "/assets/media/stock/food/img-1.jpg",
      variant: "1 Piece",
      price: 150.5,
      quantity: 2,
    },
    {
      id: 7,
      name: "Beef Stew (Kabab Halla)",
      img: "/assets/media/stock/food/img-1.jpg",
      variant: "1 Piece",
      price: 150.5,
      quantity: 2,
    },
    {
      id: 8,
      name: "Beef Stew (Kabab Halla)",
      img: "/assets/media/stock/food/img-1.jpg",
      variant: "1 Piece",
      price: 150.5,
      quantity: 2,
    },
    {
      id: 9,
      name: "Beef Stew (Kabab Halla)",
      img: "/assets/media/stock/food/img-1.jpg",
      variant: "1 Piece",
      price: 150.5,
      quantity: 2,
    },
    {
      id: 10,
      name: "Beef Stew (Kabab Halla)",
      img: "/assets/media/stock/food/img-1.jpg",
      variant: "1 Piece",
      price: 150.5,
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
  const [modalPersonIsOpen, setModalPersonIsOpen] = useState(false);
  const openModalPerson = () => setModalPersonIsOpen(true);
  const closeModalPerson = () => setModalPersonIsOpen(false);

  const subtotal = calculateTotal();
  const discount = 30.0;
  const serviceChargeRate = 0.15;
  const taxRate = 0.12;
  const serviceCharge = (subtotal * serviceChargeRate).toFixed(2);
  const tax = (subtotal * taxRate).toFixed(2);
  const total = (
    subtotal -
    discount +
    parseFloat(serviceCharge) +
    parseFloat(tax)
  ).toFixed(2);

  const [customerType, setCustomerType] = useState(null);
  const [modalPersonIsOpen2, setModalPersonIsOpen2] = useState(false);
  const [modalPaymentIsOpen2, setModalPaymentIsOpen2] = useState(false);
  const [customerName, setCustomerName] = useState(null);
  const [waiter, setWaiter] = useState(null);
  const [table, setTable] = useState(null);

  const [customerNameSelected, setCustomerNameSelected] = useState(false);
  const [customerTypeSelected, setCustomerTypeSelected] = useState(false);
  const [waiterSelected, setWaiterSelected] = useState(false);
  const [tableSelected, setTableSelected] = useState(false);

  const handleCustomerName = (selectedOption) => {
    setCustomerName(selectedOption);
    setCustomerNameSelected(false); // Update selected state
  };

  const handleCustomerTypeChange = (selectedOption) => {
    setCustomerType(selectedOption);
    setCustomerTypeSelected(false); // Update selected state
  };

  const handleWaiter = (selectedOption) => {
    setWaiter(selectedOption);
    setWaiterSelected(false); // Update selected state
  };

  const handleTable = (selectedOption) => {
    setTable(selectedOption);
    setTableSelected(false); // Update selected state
  };

  const customerNameOptions = [
    { value: "John Doe", label: "John Doe" },
    { value: "Jane Smith", label: "Jane Smith" },
  ];

  const serviceChargeTypeOptions = [
    { value: "None", label: "None" },
    { value: "Local", label: "Local" },
    { value: "Tourist", label: "Tourist" },
  ];

  const customerTypeOptions = [
    { value: "Dine In", label: "Dine In" },
    { value: "Online Customer", label: "Online Customer" },
    { value: "Third Party Platform", label: "Third Party Platform" },
    { value: "Take Away / Pickup", label: "Take Away / Pickup" },
    { value: "QR Customer", label: "QR Customer" },
  ];

  const deliveryCompanyOptions = [
    { value: "option1", label: "option1" },
    { value: "option2", label: "option2" },
  ];

  const thirdPartyOrderOptions = [
    { value: "option1", label: "option1" },
    { value: "option2", label: "option2" },
  ];

  const TableOption = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "G8-B", label: "G8-B" },
    { value: "4", label: "4" },
    { value: "G8-A", label: "G8-A" },
    { value: "G8-C", label: "G8-C" },
  ];

  const openModalPerson2 = () => setModalPersonIsOpen2(true);
  const closeModalPerson2 = () => setModalPersonIsOpen2(false);
  const closeModalPayment2 = () => setModalPaymentIsOpen2(false);
  const navigate = useNavigate();
  // const generateInvoice = () => {
  //   const restaurantName = "Token NO:04";
  //   const location = "Diana Martin";
  //   const date = new Date().toLocaleDateString();
  //   const items = [
  //     {
  //       name: "1 Chicken Butter",
  //       desc: "Fried",
  //       quantity: "1 Person",
  //       price: "2000 x 1",
  //     },
  //     { name: "1 Piece", desc: "Fried", quantity: "1 Person", price: "LE 2" },
  //   ];
  //   const subtotal = "LE 230";
  //   const vat = "LE 32.2";
  //   const serviceCharge = "LE 13.11";
  //   const discount = "LE 0";
  //   const grandTotal = "LE 275.31";
  //   const totalDue = "LE 275.31";
  //   const changeDue = "LE 0";
  //   const totalPayment = "LE 275.31";
  //   const billingTo = "Christina VANCE";
  //   const billBy = "Super Admin";
  //   const table = "Table:";
  //   const orderNumber = "Order No.: 12";
  //   const thankYou = "Thank you very much";
  //   const poweredBy = "Powered By: Brandmarks, www.brandmarks360.com";

  //   const doc = new jsPDF({
  //     orientation: "portrait",
  //     unit: "mm",
  //     format: "a4",
  //   });
  //   doc.addFileToVFS("Amiri-Regular.ttf", "Amiri-Regular.ttf");
  //   doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
  //   doc.setFont("Amiri");
  //   doc.setFontSize(12);

  //   doc.setFont("helvetica", "bold");
  //   doc.text(restaurantName, 110, 20, { align: "center" });
  //   doc.text(location, 105, 30, { align: "center" });

  //   doc.setFont("helvetica", "normal");
  //   doc.text(`Date: ${date}`, 15, 40, { align: "left" });

  //   doc.setLineWidth(0.5);
  //   doc.line(10, 45, 200, 45);

  //   const columns = ["Item", "", "", "Total"];
  //   const rows = items.map((item) => [item.name, "", "", item.price]);

  //   doc.autoTable({
  //     startY: 50,
  //     head: [columns],
  //     body: rows,
  //     theme: "plain",
  //     columnStyles: {
  //       0: { fontStyle: "bold" },
  //       1: { fontStyle: "normal" },
  //       2: { fontStyle: "normal" },
  //       3: { fontStyle: "normal", align: "right" },
  //     },
  //   });

  //   let currentY = doc.autoTable.previous.finalY + 10;
  //   doc.setFont("helvetica", "bold");
  //   doc.text("", 15, currentY);
  //   doc.text("", 120, currentY);
  //   doc.setLineWidth(0.5);
  //   currentY += 7;
  //   doc.text(`Subtotal:`, 15, currentY);
  //   doc.text(subtotal, 158, currentY);

  //   currentY += 7;
  //   doc.text(`Vat(14.00%):`, 15, currentY);
  //   doc.text(vat, 158, currentY);

  //   currentY += 7;
  //   doc.text(`Service Charge:`, 15, currentY);
  //   doc.text(serviceCharge, 158, currentY);

  //   currentY += 7;
  //   doc.text(`Discount:`, 15, currentY);
  //   doc.text(discount, 158, currentY);

  //   currentY += 7;
  //   doc.setFont("helvetica", "bold");
  //   doc.text(`Grand Total:`, 15, currentY);
  //   doc.text(grandTotal, 158, currentY);

  //   currentY += 7;
  //   doc.setFont("helvetica", "normal");
  //   doc.text(`Total Due:`, 15, currentY);
  //   doc.text(totalDue, 158, currentY);

  //   currentY += 7;
  //   doc.text(`Change Due:`, 15, currentY);
  //   doc.text(changeDue, 158, currentY);

  //   currentY += 7;
  //   doc.text(`Total payment:`, 15, currentY);
  //   doc.text(totalPayment, 158, currentY);

  //   currentY += 20;
  //   doc.text(`Billing To: ${billingTo}`, 15, currentY);
  //   doc.text(`Bill By: ${billBy}`, 158, currentY);

  //   currentY += 10;
  //   doc.text(`${table}`, 158, currentY);
  //   currentY += 7;
  //   doc.text(`${orderNumber}`, 158, currentY);
  //   currentY += 7;
  //   doc.text(`${thankYou}`, 105, currentY, { align: "center" });
  //   currentY += 7;
  //   doc.text(`${poweredBy}`, 105, currentY, { align: "center" });

  //   doc.autoPrint();
  //   doc.output("dataurlnewwindow");
  // };
  const handlePlaceOrder = () => {
    if (!customerType) {
      Swal.fire({
        icon: "warning",
        title: "Order Failed!!!",
        text: "Order incomplete due to some reason. Please Try Again. Thank You!!",
      });
      return;
    }

    const showError = (message) => {
      toast.warning(message);
    };

    if (
      customerType.value === "Dine In" ||
      customerType.value === "QR Customer"
    ) {
      if (!customerName) {
        showError("Please Select Customer Name!!!");
        setCustomerNameSelected(true);
        return;
      } else {
        setCustomerNameSelected(false);
      }
      if (!waiter) {
        showError("Please select a Waiter!");
        setWaiterSelected(true);
        return;
      } else {
        setWaiterSelected(false);
      }
      if (!table) {
        showError("Please select a Table!");
        setTableSelected(true);
        return;
      } else {
        setTableSelected(false);
      }
    }

    if (
      customerType.value === "Online Customer" ||
      customerType.value === "Take Away / Pickup"
    ) {
      if (!customerName) {
        showError("Please Select Customer Name!!!");
        setCustomerNameSelected(true);
        return;
      } else {
        setCustomerNameSelected(false);
      }
      if (!waiter) {
        showError("Please select a Waiter!");
        setWaiterSelected(true);
        return;
      } else {
        setWaiterSelected(false);
      }
    }
    if (customerType.value === "Third Party Platform") {
      if (!customerName) {
        showError("Please Select Customer Name!!!");
        setCustomerNameSelected(true);
        return;
      } else {
        setCustomerNameSelected(false);
      }
    }

    Swal.fire({
      icon: "success",
      title: "Order Placed Successfully!!",
      text: "Do you Want to Print Token No.???",
      showDenyButton: true,
      showCancelButton: false,
      denyButtonText: "No",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // generateInvoice();
        window.open(
          "/ordermanage/order/placeorder/posorderinvoice/19",
          "_blank"
        );
      }
    });
  };
  const handleQuickOrder = () => {
    if (!customerType) {
      Swal.fire({
        icon: "warning",
        title: "Order Failed!!!",
        text: "Order incomplete due to some reason. Please Try Again. Thank You!!",
      });
      return;
    }

    const showError = (message) => {
      toast.warning(message);
    };

    if (
      customerType.value === "Dine In" ||
      customerType.value === "QR Customer"
    ) {
      if (!customerName) {
        showError("Please Select Customer Name!!!");
        setCustomerNameSelected(true);
        return;
      } else {
        setCustomerNameSelected(false);
      }
      if (!waiter) {
        showError("Please select a Waiter!");
        setWaiterSelected(true);
        return;
      } else {
        setWaiterSelected(false);
      }
      if (!table) {
        showError("Please select a Table!");
        setTableSelected(true);
        return;
      } else {
        setTableSelected(false);
      }
    }

    if (
      customerType.value === "Online Customer" ||
      customerType.value === "Take Away / Pickup"
    ) {
      if (!customerName) {
        showError("Please Select Customer Name!!!");
        setCustomerNameSelected(true);
        return;
      } else {
        setCustomerNameSelected(false);
      }
      if (!waiter) {
        showError("Please select a Waiter!");
        setWaiterSelected(true);
        return;
      } else {
        setWaiterSelected(false);
      }
    }
    if (customerType.value === "Third Party Platform") {
      if (!customerName) {
        showError("Please Select Customer Name!!!");
        setCustomerNameSelected(true);
        return;
      } else {
        setCustomerNameSelected(false);
      }
    }

    Swal.fire({
      icon: "success",
      title: "Order Placed Successfully!!",
      text: "Do you Want to Print Token No.???",
      showDenyButton: true,
      showCancelButton: false,
      denyButtonText: "No",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setModalPaymentIsOpen2(true);
      }
    });
  };
  const selectRef = useRef(null);
  const selectRef2 = useRef(null);
  const selectRef3 = useRef(null);
  const selectRef4 = useRef(null);
  useHotkeys("shift+p", () => handlePlaceOrder());
  useHotkeys("shift+q", () => handlePlaceOrder());
  useHotkeys("shift+c", () => {
    if (selectRef.current) {
      selectRef.current.focus();
      if (selectRef.current.onMenuOpen) {
        selectRef.current.onMenuOpen();
      }
    }
  });
  useHotkeys("shift+e", () => {
    if (selectRef4.current) {
      selectRef4.current.focus();
      if (selectRef4.current.onMenuOpen) {
        selectRef4.current.onMenuOpen();
      }
    }
  });
  useHotkeys("shift+y", () => {
    if (selectRef2.current) {
      selectRef2.current.focus();
      if (selectRef2.current.onMenuOpen) {
        selectRef2.current.onMenuOpen();
      }
    }
  });
  useHotkeys("shift+w", () => {
    if (selectRef3.current) {
      selectRef3.current.focus();
      if (selectRef3.current.onMenuOpen) {
        selectRef3.current.onMenuOpen();
      }
    }
  });

  return (
    <div
      className="flex-row-auto w-xl-450px pos-order-equal-toolpar"
      style={{ flexBasis: "40%" }}
    >
      <div className="form-order form-border-pos">
        <div className="d-flex flex-column flex-md-row">
          <div className="form-group-form-order">
            <label htmlFor="customerName" className="form-label">
              Customer Name<span className="required-field-form-order">*</span>
            </label>
            <Select
              id="customerName"
              name="customerName"
              options={customerNameOptions}
              isSearchable={true}
              placeholder={`Select...`}
              className={`select-form-order-pos ${
                customerNameSelected ? "border-red-warn" : ""
              }`}
              onChange={handleCustomerName}
              ref={selectRef}
              styles={customStylesSelect}
            />
          </div>
          <div className="form-group-form-order pl-form-group-pos-order">
            <label htmlFor="customerType" className="form-label">
              Customer Type<span className="required-field-form-order">*</span>
            </label>
            <Select
              id="customerType"
              name="customerType"
              options={customerTypeOptions}
              isSearchable={true}
              placeholder={`Select...`}
              className="select-form-order-pos"
              onChange={handleCustomerTypeChange}
              ref={selectRef2}
              styles={customStylesSelect}
            />
          </div>
        </div>

        {customerType && (
          <>
            {customerType.value === "Third Party Platform" && (
              <div className="d-flex flex-column flex-md-row">
                <div className="form-group-form-order">
                  <label htmlFor="thirdPartyOrderID" className="form-label">
                    Third-party Order ID
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
                <div className="form-group-form-order  pl-form-group-pos-order">
                  <label htmlFor="deliveryCompany" className="form-label">
                    Delivery Company
                  </label>
                  <Select
                    id="deliveryCompany"
                    name="deliveryCompany"
                    options={deliveryCompanyOptions}
                    isSearchable={true}
                    placeholder={`Select...`}
                    className="select-form-order-pos"
                    styles={customStylesSelect}
                  />
                </div>
              </div>
            )}
            {(customerType.value === "Dine In" ||
              customerType.value === "QR Customer") && (
              <div className="d-flex flex-column flex-md-row">
                <div className="form-group-form-order">
                  <label htmlFor="waiter" className="form-label">
                    Waiter<span className="required-field-form-order">*</span>
                  </label>
                  <Select
                    id="waiter"
                    name="waiter"
                    options={thirdPartyOrderOptions}
                    isSearchable={true}
                    placeholder={`Select...`}
                    className={`select-form-order-pos ${
                      waiterSelected ? "border-red-warn" : ""
                    }`}
                    onChange={handleWaiter}
                    ref={selectRef3}
                    styles={customStylesSelect}
                  />
                </div>
                <div className="form-group-form-order  pl-form-group-pos-order">
                  <label htmlFor="table" className="form-label">
                    Table<span className="required-field-form-order">*</span>
                  </label>
                  <div className="d-flex gap-4 align-items-center">
                    <p
                      className="add-customer-odrer-pos-person"
                      onClick={openModalPerson2}
                    >
                      Person
                    </p>
                    <Select
                      id="table"
                      name="table"
                      options={TableOption}
                      isSearchable={true}
                      placeholder={`Select...`}
                      className={`select-form-order-pos mb-4 ${
                        tableSelected ? "border-red-warn" : ""
                      }`}
                      onChange={handleTable}
                      styles={customStylesSelect}
                    />
                  </div>
                </div>
              </div>
            )}
            {(customerType.value === "Online Customer" ||
              customerType.value === "Take Away / Pickup") && (
              <div className="d-flex flex-column flex-md-row">
                <div className="form-group-form-order">
                  <label htmlFor="waiter" className="form-label">
                    Waiter<span className="required-field-form-order">*</span>
                  </label>
                  <Select
                    id="waiter"
                    name="waiter"
                    options={thirdPartyOrderOptions}
                    isSearchable={true}
                    placeholder={`Select...`}
                    className={`select-form-order-pos ${
                      waiterSelected ? "border-red-warn" : ""
                    }`}
                    onChange={handleWaiter}
                    ref={selectRef3}
                    styles={customStylesSelect}
                  />
                </div>
                <div className="form-group-form-order pl-form-group-pos-order mt-3">
                  <label htmlFor="cookingTime" className="form-label">
                    Cooking Time
                  </label>
                  <CookingTimeInput />
                </div>
              </div>
            )}
          </>
        )}

        <div className="d-flex flex-column flex-md-row">
          <div className="form-group-form-order">
            <label htmlFor="serviceChargeType" className="form-label">
              Service Charge Type
            </label>
            <Select
              id="serviceChargeType"
              name="serviceChargeType"
              options={serviceChargeTypeOptions}
              isSearchable={true}
              placeholder={`Select...`}
              className="select-form-order-pos"
              ref={selectRef4}
              styles={customStylesSelect}
            />
          </div>
          {customerType && (
            <>
              {(customerType.value === "Dine In" ||
                customerType.value === "QR Customer") && (
                <div className="form-group-form-order pl-form-group-pos-order">
                  <label htmlFor="cookingTime" className="form-label">
                    Cooking Time
                  </label>
                  <CookingTimeInput />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="card card-flush bg-body mt-10" id="kt_pos_form">
        <div className="card-header pt-5">
          <h3 className="card-title fw-bold text-gray-800 fs-1">
            Current Order
          </h3>
          <div className="card-toolbar">
            <button
              className="btn btn-warn fs-4 fw-bold py-3"
              style={{
                backgroundColor: "#ffd9d9", // Light red background color
                fontSize: "1rem", // Font size 1rem
                color: "red", // Text color red
                padding: "10px",
                height: "26px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setItems([])}
            >
              Cancel Order
            </button>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="table-responsive scrollable-table">
            <table className="table align-middle gs-0 gy-4 my-0">
              <thead>
                <tr>
                  <th className="w-20px"></th>
                  <th className="min-w-175px th-thead-pos-order fw-bold fs-3">
                    Item
                  </th>
                  <th className="w-60px th-thead-pos-order fw-bold fs-3 text-center">
                    Price
                  </th>
                  <th className="w-80px th-thead-pos-order text-center fw-bold fs-3">
                    Count
                  </th>
                  {/* <th></th> */}
                  <th className="w-60px fw-bold fs-3 text-center ps-0">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      backgroundColor: "white",
                      borderBottom: "1px dashed #eee",
                    }}
                  >
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
                        <span className="fw-bold text-gray-800 font-size-1rem me-1">
                          <span className="text-hover-primary cursor-default">
                            {item.name}
                          </span>
                          <FaStickyNote
                            className="text-success cursor-pointer ml-1 fs-6"
                            onClick={openModalPerson}
                          />{" "}
                          <br />
                          <span className="fs-6">variant: {item.variant}</span>
                        </span>
                      </div>
                    </td>
                    <td className="text-center">
                      <span
                        className="fw-bold text-primary fs-4 d-flex gap-1"
                        data-kt-pos-element="item-total"
                      >
                        <p style={{ color: "darkgray" }}>
                          {item.price.toFixed(2)}
                        </p>
                      </span>
                    </td>
                    <td className="pe-0">
                      <div className="position-relative d-flex justify-content-center align-items-center flex-column pb-4">
                        <button
                          type="button"
                          className="btn btn-icon btn-sm btn-icon-gray-500 btn-icrease-decrease-order-table"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <i
                            className="ki-outline ki-minus"
                            style={{ fontSize: "16px" }}
                          ></i>
                        </button>
                        <input
                          type="text"
                          className="form-control border-0 text-center p-0 fs-4 fw-bold text-gray-800 w-30px"
                          placeholder="Amount"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          type="button"
                          className="btn btn-icon btn-sm btn-icon-gray-500 btn-icrease-decrease-order-table"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <i
                            className="ki-outline ki-plus"
                            style={{ fontSize: "16px" }}
                          ></i>
                        </button>
                      </div>
                    </td>
                    {/* <td className="text-center pe-3 pt-0">
                      <span
                        className="fw-bold fs-2"
                        style={{ color: "darkgray" }}
                      >
                        LE
                      </span>
                    </td> */}
                    <td className="text-center pt-0">
                      <span
                        className="fw-bold text-primary fs-4 mr--15 text-nowrap"
                        data-kt-pos-element="item-total"
                      >
                        {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card card-flush bg-body mt-10" id="kt_pos_form">
        <div className="card-body pt-0">
          <TableCalculation
            subtotal={subtotal}
            discount={discount}
            serviceCharge={serviceCharge}
            tax={tax}
            handleQuickOrder={handleQuickOrder}
            handlePlaceOrder={handlePlaceOrder}
            setIsCalculatorOpen={setIsCalculatorOpen}
          />
          <TableCalculationMobile
            subtotal={subtotal}
            discount={discount}
            serviceCharge={serviceCharge}
            tax={tax}
            handleQuickOrder={handleQuickOrder}
            handlePlaceOrder={handlePlaceOrder}
            setIsCalculatorOpen={setIsCalculatorOpen}
          />
        </div>
      </div>
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onRequestClose={() => setIsCalculatorOpen(false)}
      />
      <AddNote closeModal={closeModalPerson} modalIsOpen={modalPersonIsOpen} />
      <PersonModal
        modalIsOpen={modalPersonIsOpen2}
        closeModal={closeModalPerson2}
      />
      <PaymentModal
        modalIsOpen={modalPaymentIsOpen2}
        closeModal={closeModalPayment2}
      />
    </div>
  );
};

export default PosOrder;
