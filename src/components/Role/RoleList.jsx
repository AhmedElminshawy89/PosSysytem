import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { utils, write } from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import {
  ColumnsProduction,
  ColumnsPurchase,
  ColumnsRoleList,
  DataProduction,
  DataPurchase,
} from "../../data/dataTable/WrapperDataTable";
import CountUp from "react-countup";

const RoleList = () => {
  const [currentSortedColumn, setCurrentSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState({});
  const [countStarted, setCountStarted] = useState(false);
  const [columns, setColumns] = useState(ColumnsRoleList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenReserve, setIsModalOpenReserve] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [menuIndex, setMenuIndex] = useState(null);

  const menuRef = useRef(null);
  const menuRef2 = useRef(null);
  const menuRef3 = useRef(null);

  const [data, setData] = useState(DataProduction);

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
      row.food_name,
      row.variant_name,
      row.price,
    ]);

    const ws = utils.aoa_to_sheet(aoaData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");

    const wbout = write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      "ProductionList.xlsx"
    );
    setShowMenu2(false);
  };

  const handleCSV = () => {
    const csvData = data.map((row) => [
      row.sl,
      row.food_name,
      row.variant_name,
      row.price,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ProductionList.csv");

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
    doc.save("Purchase.pdf");
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

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <div className="d-flex justify-content-between bg-white flex-sm-row flex-column">
            <Toolbar
              MainPage="Role List"
              CurrentPage="Home"
              path={"/"}
              TitlePage="Role"
            />
            <Link
              className={`btn btn-primary fs-5 h-40px me-12 ms-12 mt-6`}
            >
              <FaPlus className="fs-6 me-2" />
              Add Role
            </Link>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
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
                          className={`btn btn-light-primary width-full-invoices fs-6  ${
                            showMenu2 ? "show" : ""
                          }`}
                          onClick={handleShowMenu2}
                        >
                          <i class="ki-outline ki-exit-up fs-2"></i>Export
                        </button>
                        <div
                          ref={menuRef2}
                          className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4 ${
                            showMenu2 ? "show active-list-action-table-ex" : ""
                          }`}
                        >
                          <div className="menu-item px-3">
                            <a
                              href="#"
                              className="menu-link px-3 fs-6"
                              data-kt-ecommerce-export="copy"
                              onClick={handleCopy}
                            >
                              Copy to clipboard
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="#"
                              className="menu-link px-3 fs-6"
                              data-kt-ecommerce-export="excel"
                              onClick={handleExcel}
                            >
                              Export as Excel
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="#"
                              className="menu-link px-3 fs-6"
                              data-kt-ecommerce-export="csv"
                              onClick={handleCSV}
                            >
                              Export as CSV
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="#"
                              className="menu-link px-3 fs-6"
                              data-kt-ecommerce-export="pdf"
                              onClick={handlePDF}
                            >
                              Export as PDF
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a
                              href="#"
                              className="menu-link px-3 fs-6"
                              data-kt-ecommerce-export="print"
                              onClick={handlePrint}
                            >
                              Export as Print
                            </a>
                          </div>
                        </div>
                        <button
                          type="button"
                          className={`btn btn-primary width-full-invoices fs-6  ${
                            showMenu3 ? "show" : ""
                          }`}
                          onClick={handleShowMenu3}
                        >
                          <AiFillEyeInvisible className="fs-2" /> Column
                          Visibility
                        </button>
                        <div
                          ref={menuRef3}
                          className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4 ${
                            showMenu3
                              ? "show active-list-action-table-visibility"
                              : ""
                          }`}
                        >
                          {columns.map((column) => (
                            <div className="menu-item px-3" key={column}>
                              <label className="menu-link px-3">
                                <div className="form-check form-check-sm form-check-custom form-check-solid me-3 d-flex align-items-end gap-4">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={column.visible}
                                    onChange={() => handleChange(column.label)}
                                    id={column.label}
                                  />
                                  <label
                                    htmlFor={column.label}
                                    className="fs-6"
                                  >
                                    {column.label}
                                  </label>
                                </div>
                              </label>
                            </div>
                          ))}
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
                          {columns.map(
                            (column, index) =>
                              column.visible && (
                                <th
                                  key={index}
                                  className={`text-nowrap ${
                                    column.label === "SL"
                                      ? "min-w-50px"
                                      : column.label === "Role Name"
                                      ? "min-w-100px"
                                      : column.label === "Description"
                                      ? "min-w-100px text-start pe-0"
                                      : "text-end pe-0 min-w-100px"
                                  } cursor-pointer text-hover-primary`}
                                  onClick={() => handleSort(column.label)}
                                >
                                  {column.label} {handleSortIcon(column.label)}
                                </th>
                              )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index} className="bg-white">
                            <td className="w-10px pe-2">
                              <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value="1"
                                />
                              </div>
                            </td>
                            {columns.map(
                              (column, idx) =>
                                column.visible && (
                                  <td
                                    key={idx}
                                    className={`${
                                      column.label === "SL" ||
                                      column.label === "Role Name" ||
                                      column.label === "Description"
                                        ? ""
                                        : "text-end pe-0"
                                    }`}
                                  >
                                    {column.label === "SL" && item.sl}
                                    {column.label === "Role Name" && (
                                      <a className="text-gray-800 text-hover-primary fw-bold">
                                        Operations Manager	
                                      </a>
                                    )}
                                    {column.label === "Description" && (
                                      <a className="text-gray-800 text-hover-primary fs-5 fw-bold">
                                        Manages all operations	
                                      </a>
                                    )}
                                    {column.label === "Action" && (
                                      <>
                                        <a
                                          className={`btn btn-sm btn-light btn-flex btn-center btn-active-light-primary fs-6 ${
                                            menuIndex === index ? "show" : ""
                                          }`}
                                          onClick={() => handleShowMenu(index)}
                                        >
                                          Actions
                                          <i className="ki-outline ki-down fs-5 ms-1"></i>
                                        </a>
                                        <div
                                          ref={menuRef}
                                          className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4 ${
                                            menuIndex === index ? "show" : ""
                                          }`}
                                          style={{
                                            zIndex: 107,
                                            position: "fixed",
                                            inset: "0px 0px auto auto",
                                            margin: "0px",
                                            transform: `translate(-60px, ${
                                              450 + index * 60
                                            }px)`,
                                            WebkitTransform: `translate(-60px, ${
                                              450 + index * 60
                                            }px)`,
                                            MozTransform: `translate(-60px, ${
                                              450 + index * 60
                                            }px)`,
                                            msTransform: `translate(-60px, ${
                                              450 + index * 60
                                            }px)`,
                                            OTransform: `translate(-60px, ${
                                              450 + index * 60
                                            }px)`,
                                          }}
                                        >
                                          <div className="menu-item px-3">
                                            <a className="menu-link px-3 fs-6">
                                              Edit
                                            </a>
                                          </div>
                                          <div className="menu-item px-3">
                                            <a className="menu-link px-3 fs-6">
                                              View Details
                                            </a>
                                          </div>
                                        </div>
                                      </>
                                    )}
                                  </td>
                                )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div id="" class="row ">
                    <div
                      id=""
                      class="col-sm-12 col-md-7 d-flex align-items-center justify-content-between justify-between-md-end flex-column flex-sm-row
                      w-full-title"
                    >
                      <div>
                        <select
                          name="kt_ecommerce_products_table_length"
                          class="form-select form-select-solid form-select-sm mt-10"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        <label for="dt-length-0"></label>
                      </div>
                      <div class="dt-paging paging_simple_numbers">
                        <ul class="pagination">
                          <li class="dt-paging-button page-item disabled">
                            <a
                              class="page-link previous"
                              aria-controls="kt_ecommerce_products_table"
                              aria-disabled="true"
                              aria-label="Previous"
                              data-dt-idx="previous"
                              tabindex="-1"
                            >
                              <i class="previous"></i>
                            </a>
                          </li>
                          <li class="dt-paging-button page-item active">
                            <a
                              href="#"
                              class="page-link"
                              aria-controls="kt_ecommerce_products_table"
                              aria-current="page"
                              data-dt-idx="0"
                              tabindex="0"
                            >
                              1
                            </a>
                          </li>
                          <li class="dt-paging-button page-item">
                            <a
                              href="#"
                              class="page-link"
                              aria-controls="kt_ecommerce_products_table"
                              data-dt-idx="1"
                              tabindex="0"
                            >
                              2
                            </a>
                          </li>
                          <li class="dt-paging-button page-item">
                            <a
                              href="#"
                              class="page-link"
                              aria-controls="kt_ecommerce_products_table"
                              data-dt-idx="2"
                              tabindex="0"
                            >
                              3
                            </a>
                          </li>
                          <li class="dt-paging-button page-item">
                            <a
                              href="#"
                              class="page-link"
                              aria-controls="kt_ecommerce_products_table"
                              data-dt-idx="3"
                              tabindex="0"
                            >
                              4
                            </a>
                          </li>
                          <li class="dt-paging-button page-item">
                            <a
                              href="#"
                              class="page-link"
                              aria-controls="kt_ecommerce_products_table"
                              data-dt-idx="4"
                              tabindex="0"
                            >
                              5
                            </a>
                          </li>
                          <li class="dt-paging-button page-item">
                            <a
                              href="#"
                              class="page-link next"
                              aria-controls="kt_ecommerce_products_table"
                              aria-label="Next"
                              data-dt-idx="next"
                              tabindex="0"
                            >
                              <i class="next"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleList;
