/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { utils, write } from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiFillEyeInvisible } from "react-icons/ai";
import CountUp from "react-countup";
import {  ColumnsTableList, DataTableList } from "../../data/dataTable/WrapperDataTable";
import { FaPlus } from "react-icons/fa6";
import AddTable from "./Modal/TableList";
import Select from "react-select";
import CheckInput from "../../components/Global/CheckInput/CheckInput";
const customStylesSelect = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#f9f9f9",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
    color: "#fff",
    borderRadius: ".75rem",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#eee" : "white",
    color: state.isFocused ? "#007bffcc" : "#000",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};
const SmsSetting = () => {
  const [currentSortedColumn, setCurrentSortedColumn] = useState(null);
  const [modalCancelIsOpen, setModalCancelIsOpen] = useState(false);
  const [modalPaymentOpen, setModalPaymentIsOpen] = useState(false);
  const [modalDetailsOpen, setModalDetailsIsOpen] = useState(false);
  const [countStarted, setCountStarted] = useState(false);
  const [data, setData] = useState(DataTableList);
  const [columns, setColumns] = useState(ColumnsTableList);
  const [sortDirection, setSortDirection] = useState({});
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [menuIndex, setMenuIndex] = useState(null);

  const menuRef = useRef(null);
  const menuRef2 = useRef(null);
  const menuRef3 = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    setCountStarted(true);
  }, []);

  const toggleColumnVisibility = (columnLabel) => {
    const updatedColumns = columns.map((col) =>
      col.label === columnLabel ? { ...col, visible: !col.visible } : col
    );
    setColumns(updatedColumns);
  };

  const handleChange = (columnLabel) => {
    toggleColumnVisibility(columnLabel);
  };

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

    setData(sortedData.reverse());
    setCountStarted(false);
    setSortDirection({ ...sortDirection, [label]: direction });
    setCurrentSortedColumn(label);
    setShowMenu2(false);
  };

  const handleSortIcon = (label) => {
    if (sortDirection[label] === "asc") {
      return (
        <IoIosArrowUp
          className={label === currentSortedColumn ? "text-primary" : ""}
        />
      );
    } else if (sortDirection[label] === "desc") {
      return (
        <IoIosArrowDown
          className={label === currentSortedColumn ? "text-primary" : ""}
        />
      );
    }
    return <IoIosArrowUp />;
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
    setShowMenu2(false);
  };
  const handleExcel = () => {
    const aoaData = data.map((row) => [
      row.sl,
      row.invoice_no,
      row.customer_name,
      row.customer_type,
      row.waiter,
      row.table,
      row.order_date,
      row.pre_order,
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
      "PendingOrder.xlsx"
    );
    setShowMenu2(false);
  };

  const handleCSV = () => {
    const csvData = data.map((row) => [
      row.sl,
      row.invoice_no,
      row.customer_name,
      row.customer_type,
      row.waiter,
      row.table,
      row.order_date,
      row.pre_order,
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
    link.setAttribute("download", "PendingOrder.csv");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    setShowMenu2(false);
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

    setShowMenu2(false);
    doc.save("PendingOrder.pdf");
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
      "INSTASME F&B Management Application By Brandmarks::";
    printWindow.document.close();
    printWindow.print();
    setShowMenu2(false);
  };

  const closeModalCancel = () => {
    setModalCancelIsOpen(false);
  };

  const closeModalPayment = () => {
    setModalPaymentIsOpen(false);
  };

  const closeModalDetails = () => {
    setModalDetailsIsOpen(false);
  };

  const handlePosInvoice = () => {
    navigate("/ordermanage/order/orderdetails/19");
  };

  const handleShowMenu = (index) => {
    setMenuIndex(index === menuIndex ? null : index);
  };

  const handleShowMenu2 = () => {
    setShowMenu2(!showMenu2);
  };
  const handleShowMenu3 = () => {
    setShowMenu3(!showMenu3);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuIndex(null);
    }
    if (menuRef2.current && !menuRef2.current.contains(event.target)) {
      setShowMenu2(false);
    }
    if (menuRef3.current && !menuRef3.current.contains(event.target)) {
      setShowMenu3(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
        <div className="d-flex justify-content-between align-items-center bg-white flex-sm-row flex-column">
          <Toolbar
            MainPage="Restaurant Table"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Table List"
          />
          <div>
          </div>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                  <div className="card-title d-flex flex-column w-full-title">
                  <form className="d-flex align-items-md-center gap-5 flex-md-row flex-column w-100">
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                      Template Name
                      </label>
                      <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Template Name`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                    </div>
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                        Type
                      </label>
                      <Select
                        id="waiter"
                        name="waiter"
                        options={[
                          { label: "John", value: "John" },
                          { label: "Marco", value: "Marco" },
                        ]}
                        isSearchable={true}
                        placeholder={`Type`}
                        className={`select-form-order-pos`}
                        styles={customStylesSelect}
                      />
                    </div>
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 mt-4 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                      SMS Template
                      </label>
                      <textarea
                        id="waiter"
                        name="waiter"
                        placeholder={`SMS Template`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                    </div>
                    <button className="btn btn-primary mt-12">Submit</button>
                  </form>
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
                          {/* {columns.map(
                            (column, index) =>
                              column.visible && (
                                <th
                                  key={index}
                                  className={`text-nowrap ${
                                    column.label === "SL"
                                      ? "min-w-50px"
                                      : column.label === "Unit Name"
                                      ? "min-w-150px"
                                     : column.label === "Short Name"
                                      ? "min-w-150px"
                                      : "text-end pe-0 min-w-100px"
                                  } cursor-pointer text-hover-primary`}
                                  onClick={() => handleSort(column.label)}
                                >
                                  {column.label} {handleSortIcon(column.label)}
                                </th>
                              )
                          )} */}
                           <th
                                  className={`text-nowrap min-w-50px cursor-pointer text-hover-primary`}
                                >
                                  
                                </th>
                                <th
                                  className={`text-nowrap min-w-50px cursor-pointer text-hover-primary`}
                                >
                                  Template Name	
                                </th>
                                <th
                                  className={`text-nowrap min-w-50px cursor-pointer text-hover-primary`}
                                >
                                  Type	
                                </th>
                                <th
                                  className={`text-nowrap min-w-50px cursor-pointer text-hover-primary`}
                                >
                                  SMS Template			
                                </th>
                                <th
                                  className={`text-nowrap text-end pe-0 min-w-50px cursor-pointer text-hover-primary`}
                                >
                                  Action			
                                </th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr className="bg-white">
                            <td className="w-10px pe-2">
                              <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="1"
                                />
                              </div>
                            </td>
                                <td>
                                 <CheckInput/>
                                  </td>

                                  <td>
                                  <a href="#" className="text-primary fs-5">
                                  One
                                      </a>
                                  </td>
                                  <td>
                                  <div
                                        className={`badge badge-light-success fs-6`}
                                      >
                                        CompleteOrder	
                                      </div>
                                  </td>
                                  <td>
                                  <a href="#" className="text-gray-800 fs-5">
                                  your Order id is cancel for some reason.	
                                      </a>
                                  </td>
                                  <td className="text-end pe-0">
                                  <>
                                        <a
                                          className={`btn btn-sm btn-light btn-flex btn-center btn-active-light-primary fs-6 ${
                                            menuIndex === 1? "show" : ""
                                          }`}
                                          onClick={() => handleShowMenu(1)}
                                        >
                                          Actions
                                          <i className="ki-outline ki-down fs-5 ms-1"></i>
                                        </a>
                                        <div
                                          ref={menuRef}
                                          className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4 ${
                                            menuIndex === 1 ? "show" : ""
                                          }`}
                                          style={{
                                            zIndex: 107,
                                            position: "fixed",
                                            inset: "0px 0px auto auto",
                                            margin: "0px",
                                            transform: `translate(-60px, ${
                                              450 + 1 * 60
                                            }px)`,
                                            WebkitTransform: `translate(-60px, ${
                                              450 + 1 * 60
                                            }px)`,
                                            MozTransform: `translate(-60px, ${
                                              450 + 1 * 60
                                            }px)`,
                                            msTransform: `translate(-60px, ${
                                              450 + 1 * 60
                                            }px)`,
                                            OTransform: `translate(-60px, ${
                                              450 + 1 * 60
                                            }px)`,
                                          }}
                                        >
                                          <div
                                            className="menu-item px-3"
                                          >
                                            <a className="menu-link px-3 fs-6">
                                              Delete
                                            </a>
                                          </div>
                                          <div
                                            className="menu-item px-3"
                                          >
                                            <a className="menu-link px-3 fs-6">
                                              Edit
                                            </a>
                                          </div>
                                        </div>
                                  </>
                                  </td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddTable   closeModal={() => setModalPaymentIsOpen(false)}
          modalIsOpen={modalPaymentOpen} />
    </>
  );
};

export default SmsSetting;
