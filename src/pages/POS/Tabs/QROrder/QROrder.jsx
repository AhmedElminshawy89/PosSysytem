import React, { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { toast } from "react-toastify";
import { FaPrint, FaEye, FaTrash, FaEdit } from "react-icons/fa";
import "./QROrder.css";
import Swal from "sweetalert2";
import CancelOrder from "../OnGoingOrder/CancelOrder";
import DetailsInvoice from "./DetailsInvoice";
import classesOrderList from "../../../../components/OrderList/OrderList.module.css";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { TextFiedlStyles } from "../../../../components/OrderList/StyleMuiField";
import { FaSortUp } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { PiExclamationMarkBold } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const QROrder = () => {
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
    { label: "Customer Type", visible: true },
    { label: "Waiter", visible: true },
    { label: "Table No", visible: true },
    { label: "Payment Status", visible: true },
    { label: "Order Date", visible: true },
    { label: "Amount", visible: true },
    { label: "Action", visible: true },
  ];
  const [data, setData] = useState([
    {
      sl: 17,
      Invoice: 1,
      customer_name: "Diana Martin",
      customer_type: "Dine In",
      waiter: "",
      table: "1",
      Payment_Status: "",
      order_date: "19-Jun-2024",
      amount: 83.79,
    },
  ]);

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
    setShowMenu(false);
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
      "QROrder.xlsx"
    );
    setShowMenu(false);
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
    link.setAttribute("download", "QROrder.csv");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    setShowMenu(false);
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
    setShowMenu(false);

    doc.save("QROrder.pdf");
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
    setShowMenu(false);
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
    setShowMenu(false);
  };
  const navigate = useNavigate();
  const handlePosInvoice = () => {
    navigate("/ordermanage/order/orderdetails/19");
    setShowMenu(false);
  };
  const menuRef = useRef(null);
  const menuRef2 = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleShowMenu2 = () => {
    setShowMenu2(!showMenu2);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
    if (menuRef2.current && !menuRef2.current.contains(event.target)) {
      setShowMenu2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [sort, setSort] = useState(false);
  const handleSortIcon = () => {
    setSort(!sort);
  };
  const [sort2, setSort2] = useState(false);
  const handleSortIcon2 = () => {
    setSort2(!sort2);
  };
  const [sort3, setSort3] = useState(false);
  const handleSortIcon3 = () => {
    setSort3(!sort3);
  };
  const [sort4, setSort4] = useState(false);
  const handleSortIcon4 = () => {
    setSort4(!sort4);
  };
  const [sort5, setSort5] = useState(false);
  const handleSortIcon5 = () => {
    setSort5(!sort5);
  };
  const [sort7, setSort7] = useState(false);
  const handleSortIcon7 = () => {
    setSort7(!sort7);
  };
  const [sort8, setSort8] = useState(false);
  const handleSortIcon8 = () => {
    setSort8(!sort8);
  };
  const [sort9, setSort9] = useState(false);
  const handleSortIcon9 = () => {
    setSort9(!sort9);
  };

  const [sort6, setSort6] = useState(false);
  const handleSortIcon6 = () => {
    setSort6(!sort6);
  };
  return (
    <>
      <div className="card card-flush">
        <div className="card-header align-items-center py-5 gap-2 gap-md-5">
          <div className="card-title d-flex flex-column w-full-title">
            <div className="d-flex justify-content-between align-items-center w-full-title flex-md-row flex-column-reverse width-full-invoices">
              <div className="d-flex align-items-center position-relative my-1 width-full-invoices">
                <i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
                <input
                  type="text"
                  data-kt-ecommerce-order-filter="search"
                  className="form-control form-control-solid w-250ppx ps-12 width-full-invoices"
                  placeholder="Search Order"
                />
              </div>
              <div className="card-toolbar flex-row-fluid justify-content-end gap-5 flex-md-row flex-column-reverse width-full-invoices">
                <button
                  type="button"
                  className={`btn btn-light-primary width-full-invoices  ${
                    showMenu ? "show" : ""
                  }`}
                  onClick={handleShowMenu}
                >
                  <i class="ki-outline ki-exit-up fs-2"></i>Export
                </button>
                <div
                  ref={menuRef}
                  className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4 ${
                    showMenu ? "show active-list-action-table-ex" : ""
                  }`}
                >
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-kt-ecommerce-export="copy"
                      onClick={handleCopy}
                    >
                      Copy to clipboard
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-kt-ecommerce-export="excel"
                      onClick={handleExcel}
                    >
                      Export as Excel
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-kt-ecommerce-export="csv"
                      onClick={handleCSV}
                    >
                      Export as CSV
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-kt-ecommerce-export="pdf"
                      onClick={handlePDF}
                    >
                      Export as PDF
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-kt-ecommerce-export="print"
                      onClick={handlePrint}
                    >
                      Export as Print
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="table-responsive">
            <table
              className="table align-middle table-row-dashed fs-6 gy-5"
              id="kt_ecommerce_sales_table"
            >
              <thead>
                <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                  <th className="w-10px pe-2">
                    <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-kt-check="true"
                        data-kt-check-target="#kt_ecommerce_sales_table .form-check-input"
                        value="1"
                      />
                    </div>
                  </th>
                  <th
                    className={`min-w-50px cursor-pointer text-hover-primary`}
                    onClick={handleSortIcon}
                  >
                    SL
                    {sort ? (
                      <IoIosArrowUp className="mb-2" />
                    ) : (
                      <IoIosArrowDown className="mb-2" />
                    )}
                  </th>
                  <th
                    className="min-w-100px cursor-pointer text-hover-primary"
                    onClick={handleSortIcon2}
                  >
                    Invoice No{" "}
                    {sort2 ? (
                      <IoIosArrowUp className="mb-2" />
                    ) : (
                      <IoIosArrowDown className="mb-2" />
                    )}
                  </th>
                  <th
                    className="min-w-150px cursor-pointer text-hover-primary"
                    onClick={handleSortIcon3}
                  >
                    Customer Name{" "}
                    {sort3 ? (
                      <IoIosArrowUp className="mb-2" />
                    ) : (
                      <IoIosArrowDown className="mb-2" />
                    )}
                  </th>
                  <th
                    className="min-w-150px cursor-pointer text-hover-primary"
                    onClick={handleSortIcon3}
                  >
                    Customer Type{" "}
                    {sort3 ? (
                      <IoIosArrowUp className="mb-2" />
                    ) : (
                      <IoIosArrowDown className="mb-2" />
                    )}
                  </th>
                  <th
                    className="text-center min-w-100px cursor-pointer text-hover-primary"
                    onClick={handleSortIcon4}
                  >
                    Waiter{" "}
                    {sort4 ? (
                      <IoIosArrowUp className="mb-2" />
                    ) : (
                      <IoIosArrowDown className="mb-2" />
                    )}
                  </th>
                  <th
                    className="text-center min-w-100px cursor-pointer text-hover-primary"
                    onClick={handleSortIcon5}
                  >
                    Table No
                    {sort5 ? (
                      <IoIosArrowUp className="mb-2" />
                    ) : (
                      <IoIosArrowDown className="mb-2" />
                    )}
                  </th>
                  <th
                    className="text-center min-w-70px cursor-pointer text-hover-primary"
                    onClick={handleSortIcon7}
                  >
                    Payment Status
                    {sort7 ? (
                      <IoIosArrowUp className="mb-2" />
                    ) : (
                      <IoIosArrowDown className="mb-2" />
                    )}
                  </th>
                  <th
                    className="text-center min-w-100px cursor-pointer text-hover-primary"
                    onClick={handleSortIcon8}
                  >
                    Order Date
                    {sort8 ? (
                      <IoIosArrowUp className="mb-2" />
                    ) : (
                      <IoIosArrowDown className="mb-2" />
                    )}
                  </th>
                  <th
                    className="text-center min-w-100px cursor-pointer text-hover-primary"
                    onClick={handleSortIcon9}
                  >
                    Amount
                    {sort9 ? (
                      <IoIosArrowUp className="mb-2" />
                    ) : (
                      <IoIosArrowDown className="mb-2" />
                    )}
                  </th>
                  <th
                    className="text-center min-w-100px cursor-pointer text-hover-primary"
                    onClick={handleSortIcon6}
                  >
                    Actions
                    {sort6 ? (
                      <IoIosArrowUp className="mb-2" />
                    ) : (
                      <IoIosArrowDown className="mb-2" />
                    )}
                  </th>
                </tr>
              </thead>
              <tbody className="fw-semibold text-gray-600">
                <tr className="bg-white">
                  <td>
                    <div class="form-check form-check-sm form-check-custom form-check-solid">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="1"
                      />
                    </div>
                  </td>
                  <td data-kt-ecommerce-order-filter="order_id">
                    <a class="text-gray-800 text-hover-primary fw-bold">19</a>
                  </td>
                  <td data-kt-ecommerce-order-filter="order_id">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      class="text-gray-800 text-hover-primary fw-bold"
                    >
                      13757
                    </a>
                  </td>
                  <td>
                    <a
                      href="apps/user-management/users/view.html"
                      class="text-gray-800 text-hover-primary fs-5 fw-bold"
                    >
                      Melody Macy
                    </a>
                  </td>
                  <td></td>
                  <td class="text-center pe-0">
                    <span class="fw-bold">Waiter1</span>
                  </td>
                  <td class="text-center pe-0">
                    <span class="fw-bold">Table1</span>
                  </td>
                  <td class="text-center pe-0" data-order="Completed">
                    <div class="badge badge-light-success fs-6">Completed</div>
                  </td>
                  <td class="text-center" data-order="2023-11-23">
                    <span class="fw-bold">23/11/2023</span>
                  </td>
                  <td class="text-center" data-order="2023-11-19">
                    <span class="fw-bold">1500</span>
                  </td>
                  <td class="text-center">
                    <a
                      className={`btn btn-sm btn-light btn-flex btn-center btn-active-light-primary  fs-6 ${
                        showMenu2 ? "show" : ""
                      }`}
                      onClick={handleShowMenu2}
                    >
                      Actions
                      <i class="ki-outline ki-down fs-5 ms-1"></i>
                    </a>
                    <div
                      ref={menuRef2}
                      className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4 ${
                        showMenu2 ? "show active-list-action-table-action" : ""
                      }`}
                    >
                      <div class="menu-item px-3" onClick={handleAccept_Reject}>
                        <a class="menu-link px-3">Cancel</a>
                      </div>
                      <div
                        class="menu-item px-3"
                        onClick={() => setModalCancelIsOpen(true)}
                      >
                        <a class="menu-link px-3">Delete</a>
                      </div>
                      <div class="menu-item px-3">
                        <a class="menu-link px-3">Edit</a>
                      </div>
                      <div
                        class="menu-item px-3"
                        onClick={() => setModalDetailsIsOpen(true)}
                      >
                        <a
                          class="menu-link px-3"
                          data-kt-ecommerce-order-filter="delete_row"
                        >
                          View
                        </a>
                      </div>
                      <Link
                        to="/ordermanage/order/placeorder/posorderinvoice/19"
                        class="menu-item px-3"
                      >
                        <a
                          class="menu-link px-3"
                          data-kt-ecommerce-order-filter="delete_row"
                        >
                          Pos Invoice
                        </a>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white">
                  <th
                    colSpan={9}
                    className="text-center min-w-70px cursor-pointer text-hover-primary"
                  >
                    Total
                  </th>
                  <th
                    colSpan={2}
                    className="text-center min-w-70px cursor-pointer text-hover-primary"
                  >
                    0.00 ( 0.00 total)
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end w-full-title">
              <div
                className="dataTables_paginate paging_simple_numbers"
                id="kt_ecommerce_sales_table_paginate"
              >
                <ul className="pagination">
                  <li
                    className="paginate_button page-item previous disabled"
                    id="kt_ecommerce_sales_table_previous"
                  >
                    <a
                      href="#"
                      aria-controls="kt_ecommerce_sales_table"
                      data-dt-idx="0"
                      tabIndex="0"
                      className="page-link"
                    >
                      <i className="previous"></i>
                    </a>
                  </li>
                  <li className="paginate_button page-item active">
                    <a
                      href="#"
                      aria-controls="kt_ecommerce_sales_table"
                      data-dt-idx="1"
                      tabIndex="0"
                      className="page-link"
                    >
                      1
                    </a>
                  </li>
                  <li className="paginate_button page-item">
                    <a
                      href="#"
                      aria-controls="kt_ecommerce_sales_table"
                      data-dt-idx="2"
                      tabIndex="0"
                      className="page-link"
                    >
                      2
                    </a>
                  </li>
                  <li className="paginate_button page-item">
                    <a
                      href="#"
                      aria-controls="kt_ecommerce_sales_table"
                      data-dt-idx="3"
                      tabIndex="0"
                      className="page-link"
                    >
                      3
                    </a>
                  </li>
                  <li className="paginate_button page-item">
                    <a
                      href="#"
                      aria-controls="kt_ecommerce_sales_table"
                      data-dt-idx="4"
                      tabIndex="0"
                      className="page-link"
                    >
                      4
                    </a>
                  </li>
                  <li className="paginate_button page-item">
                    <a
                      href="#"
                      aria-controls="kt_ecommerce_sales_table"
                      data-dt-idx="5"
                      tabIndex="0"
                      className="page-link"
                    >
                      5
                    </a>
                  </li>
                  <li
                    className="paginate_button page-item next"
                    id="kt_ecommerce_sales_table_next"
                  >
                    <a
                      href="#"
                      aria-controls="kt_ecommerce_sales_table"
                      data-dt-idx="6"
                      tabIndex="0"
                      className="page-link"
                    >
                      <i className="next"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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

export default QROrder;
