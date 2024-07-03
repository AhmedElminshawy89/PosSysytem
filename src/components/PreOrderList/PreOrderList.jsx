import Toolbar from "../Global/ToolBar/Toolbar";
import classesOrderList from "../OrderList/OrderList.module.css";
import { FaTrash, FaEdit, FaPrint, FaEye, FaSortUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextFiedlStyles, datePickerStyles } from "../OrderList/StyleMuiField";
import { toast } from "react-toastify";
import { utils, write } from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import Swal from "sweetalert2";
import CancelOrder from "../../pages/POS/Tabs/OnGoingOrder/CancelOrder";
import PaymentModal from "../../pages/POS/Tabs/OnGoingOrder/CompleteOrder";
import { MdPayment } from "react-icons/md";
import DetailsInvoice from "../../pages/POS/Tabs/QROrder/DetailsInvoice";
import Completed from "../Global/Status/Completed";
import Pending from "../Global/Status/Pending";

const PreOrderList = () => {
  const [ShowList, setShowList] = useState(false);
  const [sortDirection, setSortDirection] = useState({});

  const refList = useRef(null);

  const show = () => {
    setShowList(!ShowList);
  };

  const initialColumns = [
    { label: "SL", visible: true },
    { label: "Invoice No", visible: true },
    { label: "Customer Name", visible: true },
    { label: "Waiter", visible: true },
    { label: "Table", visible: true },
    { label: "State", visible: true },
    { label: "Order Date", visible: true },
    { label: "Pre Order Date", visible: true },
    { label: "Pre Order Time", visible: true },
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
      row.invoice_no,
      row.customer_name,
      row.waiter,
      row.table,
      row.state,
      row.order_date,
      row.pre_order_date,
      row.pre_order_time,
      row.amount,
    ]);

    const ws = utils.aoa_to_sheet(aoaData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");

    const wbout = write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      "PreOrderList.xlsx"
    );
  };

  const handleCSV = () => {
    const csvData = data.map((row) => [
        row.sl,
        row.invoice_no,
        row.customer_name,
        row.waiter,
        row.table,
        row.state,
        row.order_date,
        row.pre_order_date,
        row.pre_order_time,
        row.amount,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "PreOrderList.csv");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const handlePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(
      "INSTASME F&B Management Application By Brandmarks::posinvoiceloading",
      14,
      15
    );

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

    doc.save("PreOrderList.pdf");
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
  printWindow.document.title = "INSTASME F&B Management Application By Brandmarks::"
    printWindow.document.close();
    printWindow.print();
  };

  const [modalCancelIsOpen, setModalCancelIsOpen] = useState(false);

  const closeModalCancel = () => {
    setModalCancelIsOpen(false);
  };

  const [modalPaymentOpen, setModalPaymentIsOpen] = useState(false);

  const closeModalPayment = () => {
    setModalPaymentIsOpen(false);
  };

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
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <Toolbar
            MainPage="Pre Order List"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Pre Order List"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="col-xl-12 mt-0">
                <div className="d-flex justify-content-start flex-md-row flex-column align-items-end gap-4 mb-4">
                  <div
                    className={`d-flex align-items-center gap-2 ms-1 flex-md-row flex-column ${classesOrderList.widthFull}`}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker label="From" sx={datePickerStyles} /> -
                      <DatePicker label="To" sx={datePickerStyles} />
                      <button
                        className={`${classesOrderList.btnSearch} ${classesOrderList.widthFullSearch} ${classesOrderList.mtSearch}`}
                      >
                        Search
                      </button>
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="d-flex justify-content-md-between justify-content-start flex-md-row flex-column align-items-end gap-4 mb-4">
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
                      <div
                        className={`${
                          ShowList ? "Column-show-hidden " : "d-none"
                        }`}
                      >
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
                                onClick={() =>
                                  handleSort(
                                    col.label.toLowerCase().replace(" ", "_")
                                  )
                                }
                                className={`text-start cursor-pointer ${
                                  col.label === "SL" 
                                    ? "min-w-70px"
                                    : col.label === "Customer Name" ||
                                      col.label === "Order Date"||
                                  col.label === "Invoice No"
                                    ? "min-w-150px pe-0"
                                    : col.label === "Waiter" ||
                                      col.label === "Table" ||
                                      col.label === "State"
                                    ? "min-w-80px pe-0"
                                    : col.label === "Amount"
                                    ? "min-w-90px"
                                    : "min-w-150px"
                                }`}
                                key={index}
                              >
                                {col.label}
                                {col.label !== "Action" && (
                                  <FaSortUp
                                    className={`sort-icon ${
                                      sortDirection[
                                        col.label
                                          .toLowerCase()
                                          .replace(" ", "_")
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
                          <tr className="fs-5 bg-white">
                            <td colSpan={11} className="text-center">
                            No Data Available
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
                    {/* <button
                      className={`${classesOrderList.btnQrOrder} ${classesOrderList.activeBtn}`}
                    >
                      1
                    </button>
                    <button className={`${classesOrderList.btnQrOrder}`}>
                      2
                    </button> */}
                    <button className={`${classesOrderList.btnQrOrder}`}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CancelOrder
        modalIsOpen={modalCancelIsOpen}
        closeModal={closeModalCancel}
      />
      <PaymentModal
        modalIsOpen={modalPaymentOpen}
        closeModal={closeModalPayment}
      />
      <DetailsInvoice
        modalIsOpen={modalDetailsOpen}
        closeModal={closeModalDetails}
      />
    </>
  );
};

export default PreOrderList;
