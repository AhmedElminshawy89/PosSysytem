import Toolbar from "../Global/ToolBar/Toolbar";
import classesOrderList from "../OrderList/OrderList.module.css";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { utils, write } from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import CancelOrder from "../../pages/POS/Tabs/OnGoingOrder/CancelOrder";
import PaymentModal from "../../pages/POS/Tabs/OnGoingOrder/CompleteOrder";
import DetailsInvoice from "../../pages/POS/Tabs/QROrder/DetailsInvoice";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiFillEyeInvisible } from "react-icons/ai";
import CountUp from "react-countup";
import {
  ColumnsPendingOrder,
  ColumnsPreOrderDateList,
  DataPendingOrder,
  DataPreOrderDateList,
} from "../../data/dataTable/WrapperDataTable";

const PreOrderDateList = () => {
  const [currentSortedColumn, setCurrentSortedColumn] = useState(null);
  const [modalCancelIsOpen, setModalCancelIsOpen] = useState(false);
  const [modalPaymentOpen, setModalPaymentIsOpen] = useState(false);
  const [modalDetailsOpen, setModalDetailsIsOpen] = useState(false);
  const [countStarted, setCountStarted] = useState(false);
  const [data, setData] = useState(DataPreOrderDateList);
  const [columns, setColumns] = useState(ColumnsPreOrderDateList);
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
          <Toolbar
            MainPage="Pre Order Time Slots"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Pre Order Time Slots"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush">
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
                                      ? "w-50px":
                                      column.label === "Pre Date"
                                      ? "w-250px text-end":
                                      column.label === "Time Slots"
                                      ? " min-w-150px text-end"
                                      : "text-end pe-0 min-w-150px"
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
                                      column.label === "SL"
                                        ? ""
                                        : "text-end pe-0"
                                    }`}
                                  >
                                    {column.label === "SL" && item.sl}
                                    {column.label === "Pre Date" && (
                                      <span className="fw-bold text-gray-600">
                                        {item.Pre_date}
                                      </span>
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
                                            transform: `translate(-130px, ${
                                              330 + index * 0
                                            }px)`,
                                            WebkitTransform: `translate(-130px, ${
                                              330 + index * 60
                                            }px)`,
                                            MozTransform: `translate(-130px, ${
                                              330 + index * 60
                                            }px)`,
                                            msTransform: `translate(-130px, ${
                                              330 + index * 60
                                            }px)`,
                                            OTransform: `translate(-130px, ${
                                              330 + index * 60
                                            }px)`,
                                          }}
                                        >
                                          <div
                                            className="menu-item px-3"
                                            onClick={() =>
                                              handlePosInvoice(item.invoice_no)
                                            }
                                          >
                                            <a
                                              className="menu-link px-3  fs-6"
                                              data-kt-ecommerce-order-filter="delete_row"
                                            >
                                              View
                                            </a>
                                          </div>
                                          <Link
                                            to={
                                              "/ordermanage/order/posorderinvoice/19"
                                            }
                                            target="_blank"
                                            className="menu-item px-3"
                                          >
                                            <a
                                              className="menu-link px-3  fs-6"
                                              data-kt-ecommerce-order-filter="delete_row"
                                            >
                                              Pos Invoice
                                            </a>
                                          </Link>
                                        </div>
                                      </>
                                    )}
                                    {column.label === "Time Slots" && (
                                      <span className="fw-bold text-gray-600">
                                        {item.time_slots}
                                      </span>
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

export default PreOrderDateList;
