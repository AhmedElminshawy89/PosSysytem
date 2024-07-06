import Toolbar from "../Global/ToolBar/Toolbar";
import classesOrderList from "../OrderList/OrderList.module.css";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import CancelOrder from "../../pages/POS/Tabs/OnGoingOrder/CancelOrder";
import PaymentModal from "../../pages/POS/Tabs/OnGoingOrder/CompleteOrder";
import DetailsInvoice from "../../pages/POS/Tabs/QROrder/DetailsInvoice";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CounteredDashboard = () => {
  const [showList, setShowList] = useState(false);
  const [sortDirection, setSortDirection] = useState({});
  const refList = useRef(null);

  const show = () => {
    setShowList(!showList);
  };

  const initialColumns = [
    { label: "Table No", visible: true },
    { label: "Order Number", visible: true },
    { label: "Order Time", visible: true },
    { label: "Remaining Time", visible: true },
    { label: "Status", visible: true },
  ];

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState(initialColumns);

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

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <Toolbar
            MainPage="Countered Dashboard"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Countered Dashboard"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="col-xl-12 mt-0">
                <div className="card card-flush">
                  <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                    <div className="card-title">
                      <div className="d-flex align-items-center position-relative my-1">
                        <span className="card-label fw-bold text-gray-900">
                          Order Time Countdown Board
                        </span>
                      </div>
                      <div
                        id="kt_ecommerce_report_sales_export"
                        className="d-none"
                      ></div>
                    </div>
                  </div>
                  <div className="card-body pt-0" style={{ overflowX: "auto" }}>
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
                          {columns.map((column) => (
                            <th
                              key={column.label}
                              className={`min-w-50px cursor-pointer text-hover-primary`}
                              onClick={() => handleSort(column.label)}
                            >
                              {column.label.toUpperCase()}
                              {sortDirection[column.label] === "asc" ? (
                                <IoIosArrowUp className="mb-2" />
                              ) : (
                                <IoIosArrowDown className="mb-2" />
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="fw-semibold text-gray-600">
                        {data.length === 0 ? (
                          <tr>
                            <td colSpan={columns.length + 1} className="text-center">
                              No Data Available in Table
                            </td>
                          </tr>
                        ) : (
                          data.map((row, index) => (
                            <tr key={index}>
                              <td>
                                <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={row.id}
                                  />
                                </div>
                              </td>
                              {columns.map(
                                (column) =>
                                  column.visible && (
                                    <td key={column.label}>{row[column.label]}</td>
                                  )
                              )}
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <CancelOrder modalIsOpen={false} closeModal={() => {}} />
      <PaymentModal modalIsOpen={false} closeModal={() => {}} />
      <DetailsInvoice modalIsOpen={false} closeModal={() => {}} />
    </>
  );
};

export default CounteredDashboard;
