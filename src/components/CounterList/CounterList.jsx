import Toolbar from "../Global/ToolBar/Toolbar";
import classesOrderList from "../OrderList/OrderList.module.css";
import { FaEdit, FaSortUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import CancelOrder from "../../pages/POS/Tabs/OnGoingOrder/CancelOrder";
import PaymentModal from "../../pages/POS/Tabs/OnGoingOrder/CompleteOrder";
import DetailsInvoice from "../../pages/POS/Tabs/QROrder/DetailsInvoice";

const CounterList = () => {
  const [showList, setShowList] = useState(false);
  const [sortDirection, setSortDirection] = useState({});
  const refList = useRef(null);

  const initialColumns = [
    { label: "SL No.", key: "sl_no", visible: true },
    { label: "Counter Number", key: "counter_number", visible: true },
    { label: "Action", visible: true },
  ];

  const [data, setData] = useState([
    { sl_no: 1, counter_number: "01125" },
    { sl_no: 2, counter_number: "01126" },
    { sl_no: 3, counter_number: "01127" },
  ]);

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
      <div className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`} id="kt_app_main">
        <div className="d-flex flex-column flex-column-fluid">
          <Toolbar
            MainPage="Counter List"
            CurrentPage="Home"
            path={'/'}
            TitlePage="Counter List"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div id="kt_app_content_container" className="app-container container-fluid">
              <div className="col-xl-12 mt-0">
                <div className="card card-flush">
                  <div className="card-body pt-0" style={{ overflowX: "auto" }}>
                    <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_report_sales_table">
                      <thead>
                        <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                          {initialColumns.filter((col) => col.visible).map((col, index) => (
                            <th
                              key={index}
                              className={`text-center cursor-pointer`}
                              onClick={() => handleSort(col.key)}
                            >
                              {col.label}
                              {col.label !== "Action" && (
                                <FaSortUp className={`sort-icon ${sortDirection[col.key] === "asc" ? "asc" : "desc"}`} />
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="fw-semibold text-gray-600">
                        {data.length === 0 ? (
                          <tr>
                            <td colSpan={initialColumns.length} className="no-data fs-5 bg-white">
                              No Data Available in Table
                            </td>
                          </tr>
                        ) : (
                          data.map((row, index) => (
                            <tr key={index} className="fs-5 bg-white">
                              {initialColumns.map((col, colIndex) => (
                                col.visible && (
                                  <td
                                    key={colIndex}
                                    className={`text-center`}
                                  >
                                    {col.label !== "Action" ? (
                                      row[col.key]
                                    ) : (
                                        <div className="action-icon edit">
                                          <FaEdit title="Edit" />
                                        </div>
                                    )}
                                  </td>
                                )
                              ))}
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="pagination mt-10">
                  <span className="fs-5">
                    Showing 0 to {data.length} of {data.length} entries
                  </span>
                  <div>
                    <button className={`${classesOrderList.btnQrOrder}`}>
                      Previous
                    </button>
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
      {/* Modals to be handled properly */}
      <CancelOrder modalIsOpen={false} closeModal={() => {}} />
      <PaymentModal modalIsOpen={false} closeModal={() => {}} />
      <DetailsInvoice modalIsOpen={false} closeModal={() => {}} />
    </>
  );
};

export default CounterList;
