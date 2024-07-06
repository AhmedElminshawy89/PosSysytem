import Toolbar from "../Global/ToolBar/Toolbar";
import classesOrderList from "../OrderList/OrderList.module.css";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PreOrderDateList = () => {
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
  const [sort10, setSort10] = useState(false);
  const handleSortIcon10 = () => {
    setSort10(!sort10);
  };
  const [sort11, setSort11] = useState(false);
  const handleSortIcon11 = () => {
    setSort11(!sort11);
  };

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
                            className="min-w-150px cursor-pointer text-hover-primary text-nowrap text-center"
                            onClick={handleSortIcon2}
                          >
                            Pre Date{" "}
                            {sort2 ? (
                              <IoIosArrowUp className="mb-2" />
                            ) : (
                              <IoIosArrowDown className="mb-2" />
                            )}
                          </th>
                          <th
                            className="min-w-150px cursor-pointer text-hover-primary text-nowrap  text-center"
                            onClick={handleSortIcon3}
                          >
                            Action{" "}
                            {sort3 ? (
                              <IoIosArrowUp className="mb-2" />
                            ) : (
                              <IoIosArrowDown className="mb-2" />
                            )}
                          </th>
                          <th
                            className="min-w-150px cursor-pointer text-hover-primary text-nowrap  text-center"
                            onClick={handleSortIcon7}
                          >
                            Time Slots{" "}
                            {sort7 ? (
                              <IoIosArrowUp className="mb-2" />
                            ) : (
                              <IoIosArrowDown className="mb-2" />
                            )}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="fw-semibold text-gray-600">
                        <tr>
                          <td colSpan={5} className="text-center">
                            No Data Available in Table
                            </td>
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
    </>
  );
};

export default PreOrderDateList;



























// import Toolbar from "../Global/ToolBar/Toolbar";
// import classesOrderList from "../OrderList/OrderList.module.css";
// import { FaSortUp } from "react-icons/fa";
// import { useEffect, useRef, useState } from "react";
// import Swal from "sweetalert2";
// import CancelOrder from "../../pages/POS/Tabs/OnGoingOrder/CancelOrder";
// import PaymentModal from "../../pages/POS/Tabs/OnGoingOrder/CompleteOrder";
// import DetailsInvoice from "../../pages/POS/Tabs/QROrder/DetailsInvoice";

// const PreOrderDateList = () => {
//   const [ShowList, setShowList] = useState(false);
//   const [sortDirection, setSortDirection] = useState({});
//   const refList = useRef(null);

//   const show = () => {
//     setShowList(!ShowList);
//   };

//   const initialColumns = [
//     { label: "SL", visible: true },
//     { label: "Pre Date", visible: true },
//     { label: "Action", visible: true },
//     { label: "Time Slots", visible: true },
//   ];

//   const [data, setData] = useState([]);

//   const [columns, setColumns] = useState(initialColumns);

//   useEffect(() => {
//     const listener = (event) => {
//       if (!refList.current || refList.current.contains(event.target)) {
//         return;
//       }
//       setShowList(false);
//     };
//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);
//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [refList]);

//   const handleSort = (label) => {
//     const direction = sortDirection[label] === "asc" ? "desc" : "asc";
//     const sortedData = [...data].sort((a, b) => {
//       if (direction === "asc") {
//         if (a[label] < b[label]) return -1;
//         if (a[label] > b[label]) return 1;
//       } else {
//         if (a[label] > b[label]) return -1;
//         if (a[label] < b[label]) return 1;
//       }
//       return 0;
//     });

//     setData(sortedData);
//     setSortDirection({ ...sortDirection, [label]: direction });
//     setShowList(false);
//   };

//   return (
//     <>
//       <div
//         className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
//         id="kt_app_main"
//       >
//         <div className="d-flex flex-column flex-column-fluid">
//           <Toolbar
//             MainPage="Pre Order Time Slots"
//             CurrentPage="Home"
//             path={'/'}
//             TitlePage="Pre Order Time Slots"
//           />
//           <div id="kt_app_content" className="app-content flex-column-fluid">
//             <div
//               id="kt_app_content_container"
//               className="app-container container-fluid"
//             >
//               <div className="col-xl-12 mt-0">
//                 <div className="card card-flush">
//                   <div className="card-body pt-0" style={{ overflowX: "auto" }}>
//                     <table
//                       className="table align-middle table-row-dashed fs-6 gy-5"
//                       id="kt_ecommerce_report_sales_table"
//                     >
//                       <thead>
//                         <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
//                           {columns
//                             .filter((col) => col.visible)
//                             .map((col, index) => (
//                               <th
//                                 onClick={() =>
//                                   handleSort(
//                                     col.label.toLowerCase().replace(" ", "_")
//                                   )
//                                 }
//                                 className={`text-center cursor-pointer ${
//                                   col.label === "SL"
//                                     ? "w-80px"
//                                     : col.label === "Pre Date" ||
//                                       col.label === "Time Slots"
//                                     ? "min-w-150px pe-0"
//                                     : "min-w-150px"
//                                 }`}
//                                 key={index}
//                               >
//                                 {col.label}
//                                 {col.label !== "Action" && (
//                                   <FaSortUp
//                                     className={`sort-icon ${
//                                       sortDirection[
//                                         col.label.toLowerCase().replace(" ", "_")
//                                       ] === "asc"
//                                         ? "asc"
//                                         : "desc"
//                                     }`}
//                                   />
//                                 )}
//                               </th>
//                             ))}
//                         </tr>
//                       </thead>
//                       <tbody className="fw-semibold text-gray-600">
//                         {data.length === 0 ? (
//                           <tr>
//                             <td
//                               colSpan={columns.length}
//                               className="no-data fs-5 bg-white"
//                             >
//                               No Data Available in Table
//                             </td>
//                           </tr>
//                         ) : (
//                           data.map((row, index) => (
//                             <tr key={index} className="fs-5 bg-white">
//                               {columns.map(
//                                 (col, colIndex) =>
//                                   col.visible && (
//                                     <td
//                                       key={colIndex}
//                                       className={`text-start ${
//                                         col.label === "SL"
//                                           ? "min-w-150px"
//                                           : col.label === "Pre Date" ||
//                                             col.label === "Time Slots"
//                                           ? "min-w-150px pe-0"
//                                           : "min-w-150px"
//                                       }`}
//                                     >
//                                       {col.label === "Action" && col.visible ? (
//                                         <div className="action-icons">
//                                           <button
//                                             className="btn btn-sm btn-primary"
//                                             onClick={() =>
//                                               Swal.fire(
//                                                 'Action Clicked',
//                                                 'You clicked on action',
//                                                 'info'
//                                               )
//                                             }
//                                           >
//                                             Action
//                                           </button>
//                                         </div>
//                                       ) : (
//                                         row[
//                                           col.label
//                                             .toLowerCase()
//                                             .replace(" ", "_")
//                                         ]
//                                       )}
//                                     </td>
//                                   )
//                               )}
//                             </tr>
//                           ))
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//                 <div className="pagination mt-10">
//                   <span className="fs-5">
//                     Showing 0 to {data.length} of {data.length} entries
//                   </span>
//                   <div>
//                     <button className={`${classesOrderList.btnQrOrder}`}>
//                       Previous
//                     </button>
//                     {/* <button
//                       className={`${classesOrderList.btnQrOrder} ${classesOrderList.activeBtn}`}
//                     >
//                       1
//                     </button>
//                     <button className={`${classesOrderList.btnQrOrder}`}>
//                       2
//                     </button> */}
//                     <button className={`${classesOrderList.btnQrOrder}`}>
//                       Next
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <CancelOrder
//         modalIsOpen={false}
//         closeModal={() => {}}
//       /> 
//       <PaymentModal
//         modalIsOpen={false}
//         closeModal={() => {}}
//       />
//       <DetailsInvoice
//         modalIsOpen={false}
//         closeModal={() => {}}
//       /> 
//     </>
//   );
// };

// export default PreOrderDateList;
