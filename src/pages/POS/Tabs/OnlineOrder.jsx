import React, { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { toast } from "react-toastify";
import { FaPrint, FaEye, FaTrash, FaEdit } from "react-icons/fa";
import "../Tabs/QROrder/QROrder.css";
import Swal from "sweetalert2";
import CancelOrder from "../Tabs/OnGoingOrder/CancelOrder";
import DetailsInvoice from "../Tabs/QROrder/DetailsInvoice";
import classesOrderList from "../../../components/OrderList/OrderList.module.css";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { TextFiedlStyles } from "../../../components/OrderList/StyleMuiField";
import { FaSortUp } from "react-icons/fa";
import { PiExclamationMarkBold } from "react-icons/pi";

const OnlineOrder = () => {
  const [ShowList, setShowList] = useState(false);
  const [sortDirection, setSortDirection] = useState({});

  const refList = useRef(null);

  const show = () => {
    setShowList(!ShowList);
  };
  const initialColumns = [
    { label: "SL", visible: true },
    { label: "Invoice", visible: true },
    { label: "Customer Name", visible: true },
    { label: "Delivery Method Name", visible: true },
    { label: "Delivery Date & Time", visible: true },
    { label: "Waiter", visible: true },
    { label: "Table No", visible: true },
    { label: "Payment Status", visible: true },
    { label: "Order Date", visible: true },
    { label: "Amount", visible: true },
    { label: "Action", visible: true },
  ];
  const [data, setData] = useState([]);

  const [columns, setColumns] = useState(initialColumns);

  const toggleColumnVisibility = (index) => {
    const updatedColumns = [...columns];
    updatedColumns[index].visible = !updatedColumns[index].visible;
    setColumns(updatedColumns);
  };

  useEffect(() => {
    const listener = (event) => {
      if (!refList.current || refList.current.contains(event.target)) {
        return;
      }
      setShowList(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refList]);

  const handleSort = (label) => {
    const direction = sortDirection[label] === "asc" ? "desc" : "asc";
    const sortedData = [...data].sort((a, b) => {
      if (direction === "asc") {
        if (a[label] < b[label]) return -1;
        if (a[label] > b[label]) return 1;
      } else {
        if (a[label] > b[label]) return -1;
        if (a[label] < b[label]) return 1;
      }
      return 0;
    });

    setData(sortedData);

    setSortDirection({ ...sortDirection, [label]: direction });

    setShowList(false);
  };
  const handleCopy = () => {
    if (data.length === 0) {
      toast.error("No Data Available to copy");
      return;
    }

    const headers = columns
      .filter((col) => col.visible)
      .map((col) => col.label);
    const rows = data.map((row) =>
      headers.map(
        (header) => row[columns.findIndex((col) => col.label === header)]
      )
    );
    const textToCopy = [headers.join(",")]
      .concat(rows.map((row) => row.join(",")))
      .join("\n");

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Data copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
        toast.error("Failed to copy data to clipboard. Please try again.");
      });
  };
  const handleExcel = () => {
    const aoaData = data.map((row) => [
      row.sl,
      row.Invoice,
      row.customer_name,
      row.customer_type,
      row.waiter,
      row.table,
      row.Payment_Status,
      row.order_date,
      row.amount,
    ]);

    const ws = utils.aoa_to_sheet(aoaData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");

    const wbout = write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      "OnlineOrder.xlsx"
    );
  };

  const handleCSV = () => {
    const csvData = data.map((row) => [
      row.sl,
      row.Invoice,
      row.customer_name,
      row.customer_type,
      row.waiter,
      row.table,
      row.Payment_Status,
      row.order_date,
      row.amount,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "OnlineOrder.csv");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const handlePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("INSTASME F&B Management Application By Brandmarks ::", 14, 15);

    const tableHead = columns
      .filter((col) => col.visible && col.label !== "Action")
      .map((col) => col.label);

    const tableBody = data.map((row) => {
      return tableHead.map(
        (label) => row[label.toLowerCase().replace(" ", "_")]
      );
    });

    doc.autoTable({
      head: [tableHead],
      body: tableBody,
      startY: 25,
      styles: {
        font: "Arial",
        fontSize: 10,
        halign: "center",
        valign: "middle",
        // lineWidth: 0.5,
        // lineColor: [238, 238, 238], // #eee for border color
      },
      headStyles: {
        fillColor: [0, 123, 255], // #007bff for background color
        textColor: [255, 255, 255],
      },
      columnStyles: {
        0: { fontStyle: "bold" },
        8: { halign: "right" },
      },
    });

    doc.save("OnlineOrder.pdf");
  };

  const handlePrint = () => {
    const tableHead = columns
      .filter((col) => col.visible && col.label !== "Action")
      .map((col) => col.label);

    const tableBody = data.map((row) => {
      return tableHead.map(
        (label) => row[label.toLowerCase().replace(" ", "_")]
      );
    });

    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`
	  <html>
		<head>
		  <style>
			body {
			  font-family: Arial, sans-serif;
			  font-size: 10pt;
			}
			table {
			  width: 100%;
			  border-collapse: collapse;
			  margin-bottom: 20px;
			}
			th, td {
			  border: 1px solid #eee;
			  padding: 8px;
			  text-align: center;
			}
			th {
			  background-color: #007bff;
			  color: white;
			  font-weight: bold;
			}
			td:first-child {
			  font-weight: bold;
			}
			.total-row {
			  font-weight: bold;
			}
		  </style>
		</head>
		<body>
		  <table>
			<thead>
			  <tr>
				${tableHead.map((label) => `<th>${label}</th>`).join("")}
			  </tr>
			</thead>
			<tbody>
			  ${tableBody
          .map(
            (row) => `
				<tr>
				  ${row.map((cell) => `<td>${cell}</td>`).join("")}
				</tr>
			  `
          )
          .join("")}
			  <tr class="total-row">
				<td colspan="${tableHead.length - 1}" style="text-align: center;">Total:</td>
				<td style="text-align: center;">LE 20</td>
			  </tr>
			</tbody>
		  </table>
		</body>
	  </html>
	`);
    printWindow.document.title =
      "INSTASME F&B Management Application By Brandmarks ::";
    printWindow.document.close();
    printWindow.print();
  };

  const [modalCancelIsOpen, setModalCancelIsOpen] = useState(false);

  const closeModalCancel = () => {
    setModalCancelIsOpen(false);
  };

  const [modalPaymentOpen, setModalPaymentIsOpen] = useState(false);


  const [modalDetailsOpen, setModalDetailsIsOpen] = useState(false);

  const closeModalDetails = () => {
    setModalDetailsIsOpen(false);
  };

  const handleAccept_Reject = () => {
    Swal.fire({
      icon: "success",
      title: "Order Confirmation",
      text: "Are you going to Accept or Reject this Order?",
      showDenyButton: true,
      showCancelButton: false,
      denyButtonText: "Reject",
      confirmButtonText: "Accept",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Accepted", "", "success");
      } else if (result.isDenied) {
        setModalCancelIsOpen(true);
      }
    });
  };
  return (
    <>
      <div className="qr-order-container">
        <div className="d-flex justify-content-md-between justify-content-start flex-md-row flex-column align-items-end gap-4 mb-4 pt-4">
          <div
            className={`d-flex align-items-md-center align-items-start gap-2 ms-1 flex-sm-row flex-column ${classesOrderList.widthFull}`}
          >
            <button
              className={`${classesOrderList.btnActionTable}`}
              onClick={handleCopy}
            >
              Copy
            </button>
            <button
              className={`${classesOrderList.btnActionTable}`}
              onClick={handleCSV}
            >
              CSV
            </button>
            <button
              className={`${classesOrderList.btnActionTable}`}
              onClick={handleExcel}
            >
              Excel
            </button>
            <button
              className={`${classesOrderList.btnActionTable}`}
              onClick={handlePDF}
            >
              PDF
            </button>
            <button
              className={`${classesOrderList.btnActionTable}`}
              onClick={handlePrint}
            >
              Print
            </button>
            <div className="" ref={refList}>
              <button
                className={`${classesOrderList.btnActionTable} dropdown-toggle`}
                type="button"
                onClick={show}
              >
                Column Visibility
              </button>
              <div className={`${ShowList ? "Column-show-hidden " : "d-none"}`}>
                {columns.map((col, index) => (
                  <div key={index} className="dropdown-item">
                    <label className="d-flex gap-1 align-items-baseline">
                      <input
                        type="checkbox"
                        checked={col.visible}
                        onChange={() => toggleColumnVisibility(index)}
                      />
                      {col.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="custom-input-order-qr-width">
            <TextField
              id="outlined-basic"
              label="Search here"
              variant="outlined"
              sx={TextFiedlStyles}
            />
          </div>
        </div>
        <div className="card card-flush">
          <div className="card-body pt-0" style={{ overflowX: "auto" }}>
            <table
              className="table align-middle table-row-dashed fs-6 gy-5"
              id="kt_ecommerce_report_sales_table"
            >
              <thead>
                <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                  {columns
                    .filter((col) => col.visible)
                    .map((col, index) => (
                      <th
                        key={index}
                        onClick={() =>
                          handleSort(col.label.toLowerCase().replace(" ", "_"))
                        }
                        className={`text-start cursor-pointer text-nowrap ${
                          col.label === "SL" ||
                          col.label === "Order ID" ||
                          col.label === "Pre Order Time"
                            ? "min-w-50px"
                            : col.label === "Customer Name" ||
                              col.label === "Customer Type" ||
                              col.label === "Order Date" ||
                              col.label === "Pre Order Date"
                            ? "min-w-150px pe-0"
                            : col.label === "Waiter" ||
                              col.label === "Table" ||
                              col.label === "Pre-Order"
                            ? "min-w-50px pe-0"
                            : col.label === "Amount"
                            ? "min-w-90px"
                            : "min-w-150px"
                        }`}
                      >
                        {col.label}
                        {col.label !== "Action" && (
                          <FaSortUp
                            className={`sort-icon ${
                              sortDirection[
                                col.label.toLowerCase().replace(" ", "_")
                              ] === "asc"
                                ? "asc"
                                : "desc"
                            }`}
                          />
                        )}
                      </th>
                    ))}
                </tr>
              </thead>

              <tbody className="fw-semibold text-gray-600">
                {data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="no-data fs-5 bg-white"
                    >
                      No Data Available in Table
                    </td>
                  </tr>
                ) : (
                  data.map((row, index) => (
                    <tr key={index} className="fs-5 bg-white">
                      {columns.map(
                        (col, colIndex) =>
                          col.visible && (
                            <td
                              key={colIndex}
                              className={`text-start ${
                                col.label === "SL"
                                  ? "min-w-70px"
                                  : col.label === "Invoice No" ||
                                    col.label === "Customer Name" ||
                                    col.label === "Order Date"
                                  ? "min-w-150px pe-0"
                                  : col.label === "Waiter" ||
                                    col.label === "Table" ||
                                    col.label === "State"
                                  ? "min-w-80px pe-0"
                                  : col.label === "Amount"
                                  ? "min-w-75px"
                                  : "min-w-150px"
                              }`}
                            >
                              {col.label === "Action" && col.visible ? (
                                <div className="action-icons">
                                  <div
                                    className="action-icon accept"
                                    onClick={handleAccept_Reject}
                                  >
                                    <PiExclamationMarkBold title="Accept or Cancel" />
                                  </div>
                                  <div
                                    className="action-icon accept"
                                    onClick={() => setModalCancelIsOpen(true)}
                                  >
                                    <FaTrash title="Cancel" />
                                  </div>
                                  <div className="action-icon edit">
                                    <FaEdit title="Edite" />
                                  </div>
                                  <div
                                    className="action-icon view"
                                    onClick={() => setModalDetailsIsOpen(true)}
                                  >
                                    <FaEye title="Details" />
                                  </div>
                                  <Link to={'/ordermanage/order/placeorder/posorderinvoice/19'} 
                                 target="_blank" className="action-icon print">
                                    <FaPrint title="Pos Invoice" />
                                  </Link>
                                </div>
                              ) : (
                                row[col.label.toLowerCase().replace(" ", "_")]
                              )}
                            </td>
                          )
                      )}
                    </tr>
                  ))
                )}
                <tr className="bg-white">
                  <td colSpan={9} className="text-center">Total</td>
                  <td colSpan={2} className="text-center">0.00 ( 0.00 total)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagination mt-10">
          <span className="fs-5">
            Showing 1 to {data.length} of {data.length} entries
          </span>
          <div>
            <button className={`${classesOrderList.btnQrOrder}`}>
              Previous
            </button>
            <button
              className={`${classesOrderList.btnQrOrder} ${classesOrderList.activeBtn}`}
            >
              1
            </button>
            <button className={`${classesOrderList.btnQrOrder}`}>2</button>
            <button className={`${classesOrderList.btnQrOrder}`}>Next</button>
          </div>
        </div>
      </div>
      <CancelOrder
        modalIsOpen={modalCancelIsOpen}
        closeModal={closeModalCancel}
      />
      <DetailsInvoice
        modalIsOpen={modalDetailsOpen}
        closeModal={closeModalDetails}
      />{" "}
    </>
  );
};

export default OnlineOrder;
