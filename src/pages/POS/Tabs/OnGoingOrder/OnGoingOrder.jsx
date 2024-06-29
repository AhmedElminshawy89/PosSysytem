import React, { useState } from "react";
import { FaTrash, FaRegWindowRestore, FaRegWindowMaximize } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Select from "react-select";
import { Tooltip } from "react-tooltip";
import "./OnGoingOrder.css";
import CompleteOrder from "./CompleteOrder";
import CancelOrder from "./CancelOrder";
import jsPDF from "jspdf";
import SplitModal from "./SplitModal";

const OnGoingOrder = () => {
  const orders = [
    { orderNumber: "0011", waiter: "", runningTime: "00:00:09" },
    { orderNumber: "0012", waiter: "", runningTime: "00:01:15" },
  ];

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];
  
  const [modalCompleteIsOpen, setModalCompleteIsOpen] = useState(false);
  const [modalCancelIsOpen, setModalCancelIsOpen] = useState(false);
  const [modalSplitIsOpen, setModalSplitIsOpen] = useState(false);
  const [printableInvoice, setPrintableInvoice] = useState(null);

  const openModalComplete = () => {
    setModalCompleteIsOpen(true);
  };

  const closeModalComplete = () => {
    setModalCompleteIsOpen(false);
  };
  
  const openModalSplit = () => {
    setModalSplitIsOpen(true);
  };

  const closeModalSplit = () => {
    setModalSplitIsOpen(false);
  };

  const openModalCancel = () => {
    setModalCancelIsOpen(true);
  };

  const closeModalCancel = () => {
    setModalCancelIsOpen(false);
  };

  const generateInvoice = () => {
    const restaurantName = "Demo Restaurant Your Slogan";
    const location = "Egypt";
    const date = new Date().toLocaleDateString();
    const items = [
      { name: "1 Chicken Butter", desc: "Fried", quantity: "1 Person", price: "2000 x 1" },
      { name: "1 Piece", desc: "Fried", quantity: "1 Person", price: "LE 2" },
    ];
    const subtotal = "LE 230";
    const vat = "LE 32.2";
    const serviceCharge = "LE 13.11";
    const discount = "LE 0";
    const grandTotal = "LE 275.31";
    const totalDue = "LE 275.31";
    const changeDue = "LE 0";
    const totalPayment = "LE 275.31";
    const billingTo = "Christina VANCE";
    const billBy = "Super Admin";
    const table = "Table:";
    const orderNumber = "Order No.: 12";
    const thankYou = "Thank you very much";
    const poweredBy = "Powered By: Brandmarks, www.brandmarks360.com";

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    doc.addFileToVFS("Amiri-Regular.ttf", "Amiri-Regular.ttf");
    doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
    doc.setFont("Amiri");
    doc.setFontSize(12);

    doc.setFont("helvetica", "bold");
    doc.text(restaurantName, 110, 20, { align: "center" });
    doc.text(location, 105, 30, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${date}`, 15, 40, { align: "left" });

    doc.setLineWidth(0.5);
    doc.line(10, 45, 200, 45);

    const columns = ["Item", "", "", "Total"];
    const rows = items.map(item => [
      item.name,
      '',
      '',
      item.price
    ]);

    doc.autoTable({
      startY: 50,
      head: [columns],
      body: rows,
      theme: "plain",
      columnStyles: {
        0: { fontStyle: "bold" },
        1: { fontStyle: "normal" },
        2: { fontStyle: "normal" },
        3: { fontStyle: "normal", align: "right" }
      }
    });

    let currentY = doc.autoTable.previous.finalY + 10;
    doc.setFont("helvetica", "bold");
    doc.text("", 15, currentY);
    doc.text("", 120, currentY);
    doc.setLineWidth(0.5);
    currentY += 7;
    doc.text(`Subtotal:`, 15, currentY);
    doc.text(subtotal, 158, currentY);

    currentY += 7;
    doc.text(`Vat(14.00%):`, 15, currentY);
    doc.text(vat, 158, currentY);

    currentY += 7;
    doc.text(`Service Charge:`, 15, currentY);
    doc.text(serviceCharge, 158, currentY);

    currentY += 7;
    doc.text(`Discount:`, 15, currentY);
    doc.text(discount, 158, currentY);

    currentY += 7;
    doc.setFont("helvetica", "bold");
    doc.text(`Grand Total:`, 15, currentY);
    doc.text(grandTotal, 158, currentY);

    currentY += 7;
    doc.setFont("helvetica", "normal");
    doc.text(`Total Due:`, 15, currentY);
    doc.text(totalDue, 158, currentY);

    currentY += 7;
    doc.text(`Change Due:`, 15, currentY);
    doc.text(changeDue, 158, currentY);

    currentY += 7;
    doc.text(`Total payment:`, 15, currentY);
    doc.text(totalPayment, 158, currentY);

    currentY += 20;
    doc.text(`Billing To: ${billingTo}`, 15, currentY);
    doc.text(`Bill By: ${billBy}`, 158, currentY);

    currentY += 10;
    doc.text(`${table}`, 158, currentY);
    currentY += 7;
    doc.text(`${orderNumber}`, 158, currentY);
    currentY += 7;
    doc.text(`${thankYou}`, 105, currentY, { align: "center" });
    currentY += 7;
    doc.text(`${poweredBy}`, 105, currentY, { align: "center" });

    doc.autoPrint();
    doc.output("dataurlnewwindow");
  };


  return (
    <div className="">
      <div className="header">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4  flex-md-row flex-column">
          <div className="d-flex  align-items-center gap-4 flex-md-row flex-column width-full-btns-going">
            <Select
              id="order"
              name="order"
              options={options}
              isSearchable={true}
              placeholder="Type and Select Order"
              className="select-form-order-pos-ongoing "
            />
            <Select
              id="table"
              name="table"
              options={options}
              isSearchable={true}
              placeholder="Type and Select Table"
              className="select-form-order-pos-ongoing"
            />
          </div>

          <button className="btn-form-pos-meger-order width-full-btns-going">
            Merge Order
          </button>
        </div>
      </div>
      <div className="orders">
        {orders.map((order, index) => (
          <div className="order-card" key={index}>
            <div className="order-info">
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-muted fw-bold">Table:</p>
                <div className="d-flex align-items-center gap-2">
                  <button className="action-button width-fit-content expand btn-primary h-20px rounded-1 fs-4 fw-bold">
                    <MdEdit className="ms-" />
                  </button>
                  <input
                    type="checkbox"
                    className="action-checkbox h-25px rounded-1 fs-4 fw-bold"
                  />
                </div>
              </div>
              <p className="text-muted fw-bold">
                Order Number: {order.orderNumber}
              </p>
              <p className="text-muted fw-bold">Waiter: {order.waiter}</p>
              <p className="text-muted fw-bold">
                Running Time: {order.runningTime}
              </p>
            </div>
            <div className="order-actions d-flex align-items-center gap-2">
              <button className="text-nowrap btn btn-flex btn-primary h-25px rounded-1 fs-7 fw-bold"
              onClick={openModalComplete}>
                Complete
              </button>
              <button className="text-nowrap btn btn-flex btn-primary h-25px rounded-1 fs-7 fw-bold"
              onClick={openModalSplit}>
                Split
              </button>
              <button
                className="action-button delete h-25px rounded-1 fs-7 fw-bold btn-order-delete-ondoing"
                data-tooltip-id="delete-tooltip"
                data-tooltip-content="Cancel Order"
                onClick={openModalCancel}
              >
                <FaTrash />
              </button>
              <button
                className="action-button expand btn-primary h-25px rounded-1 fs-7 fw-bold"
                data-tooltip-id="maximize-tooltip"
                data-tooltip-content="Pos Invoice"
                onClick={openModalComplete}
              >
                <FaRegWindowMaximize />
              </button>
              <button
                className="action-button expand btn-primary h-25px rounded-1 fs-7 fw-bold"
                data-tooltip-id="restore-tooltip"
                data-tooltip-content="Due Invoice"
                onClick={generateInvoice}
              >
                <FaRegWindowRestore />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Tooltip id="delete-tooltip" />
      <Tooltip id="maximize-tooltip" />
      <Tooltip id="restore-tooltip" />
      <CompleteOrder
        modalIsOpen={modalCompleteIsOpen}
        closeModal={closeModalComplete}
      />
      <CancelOrder
        modalIsOpen={modalCancelIsOpen}
        closeModal={closeModalCancel}
      />
            <SplitModal
        modalIsOpen={modalSplitIsOpen}
        closeModal={closeModalSplit}
      />

      {/* Render the printable invoice
      {printableInvoice && (
        <div className="printable-invoice">
          <embed src={printableInvoice} type="application/pdf" width="100%" height="600px" />
          <button onClick={clearPrintableInvoice}>Close</button>
        </div>
      )} */}
    </div>
  );
};

export default OnGoingOrder;
