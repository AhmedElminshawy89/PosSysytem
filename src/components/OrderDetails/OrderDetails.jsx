import React from "react";
import { FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import classesOrderList from "../OrderList/OrderList.module.css";
import Toolbar from "../Global/ToolBar/Toolbar";

const OrderDetails = () => {
  const initialColumns = [
    { label: "Item", visible: true },
    { label: "Size", visible: true },
    { label: "Unit Price", visible: true },
    { label: "Quantity", visible: true },
    { label: "Total Price", visible: true },
  ];

  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Invoice",
  });

  return (
    <div
      className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
      id="kt_app_main"
    >
      <div className="d-flex flex-column flex-column-fluid">
        <Toolbar
          MainPage="Order Details"
          CurrentPage="pending Order"
          path={'/ordermanage/order/pendingorder'}
          TitlePage="Order Details"
        />
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-fluid"
          >
            <div className="col-xl-12 mt-0">
              <div className="card card-flush">
                <div className="card-body pt-6 ps-8 pe-8" style={{ overflowX: "auto" }}>
                  <h2 className="mb-5 text-end pe-8">Invoice</h2>
                  <div className="text-end pe-8">
                    <button
                      className="btn btn-primary fs-1 py-1 px-4"
                      onClick={handlePrint}
                    >
                      <FaPrint />
                    </button>
                  </div>
                  <div
                    className="print-content ps-8 pe-8"
                    id="print-content"
                    ref={componentRef}
                  >
                    <div className="print-header mt-10">
                      <p>7/2/24, 3:14 PM</p>
                      <div style={{marginRight:'200px'}}>
                      <p>INSTASME F&B Management Application By Brandmarks ::</p>
                      </div>
                    </div>
                    {/* <div className="print-header text-center mt-10">
                    </div> */}
                    <div className="d-flex justify-content-md-between justify-content-start align-items-md-center align-items-start mt-10 mb-5 flex-column flex-md-row">
                      <div>
                        <span className="border-billing">Billing From</span>
                        <h3 className="mt-4">Demo Restaurant - Your Slogan</h3>
                        <p className="mt-0 mb-1 fs-5 text-muted">Egypt</p>
                        <p className="mt-0 mb-1 fs-5 text-muted">
                          Mobile: +201032992030
                        </p>
                        <p className="mt-0 mb-1 fs-5 text-muted">
                          Email Address: demo@restaurant.com
                        </p>
                      </div>
                      <div>
                        <h3 className="mt-4">Invoice</h3>
                        <p className="mt-0 mb-1 fs-5 text-muted">
                          Invoice No: 0015
                        </p>
                        <p className="mt-0 mb-1 fs-5 text-muted">
                          Order Status: Pending Orders
                        </p>
                        <p className="mt-0 mb-1 fs-5 text-muted">
                          Billing Date: 2024-06-27
                        </p>
                        <span className="border-billing">Billing To</span>
                        <h3 className="mt-4">Christina VANCE</h3>
                        <p className="mt-0 mb-1 fs-5 text-muted">Country:</p>
                        <p className="mt-0 mb-1 fs-5 text-muted">City:</p>
                        <p className="mt-0 mb-1 fs-5 text-muted">Area:</p>
                        <p className="mt-0 mb-1 fs-5 text-muted">Street:</p>
                        <p className="mt-0 mb-1 fs-5 text-muted">Building:</p>
                        <p className="mt-0 mb-1 fs-5 text-muted">
                          Apartment no:
                        </p>
                        <p className="mt-0 mb-1 fs-5 text-muted">
                          Mobile: +128140911112
                        </p>
                      </div>
                    </div>
                    <hr className="mt-2 mb-10" />
                    <div id="table-container">
                      <table className="tableQROrder">
                        <thead>
                          <tr>
                            {initialColumns.map((col, index) => (
                              <th className="fs-5 text-center" key={index}>
                                {col.label}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="fs-3">
                            <td className="text-center">Lasagna - لازانيا</td>
                            <td className="text-center">1 Person</td>
                            <td className="text-center">LE 180.000</td>
                            <td className="text-end">1</td>
                            <td className="text-end fw-bold">LE 180</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan={4} className="text-end fs-3 fw-bold">
                              Subtotal
                            </td>
                            <td colSpan={1} className="text-end fs-3 fw-bold">
                              LE 154.8
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-end fs-3 fw-bold">
                              Discount(LE)
                            </td>
                            <td colSpan={1} className="text-end fs-3 fw-bold">
                              LE 0
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-end fs-3 fw-bold">
                              Delivery Charges(LE)
                            </td>
                            <td colSpan={1} className="text-end fs-3 fw-bold">
                              LE 10.26
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-end fs-3 fw-bold">
                              Vat (%)
                            </td>
                            <td colSpan={1} className="text-end fs-3 fw-bold">
                              LE 25.2
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-end fs-3 fw-bold">
                              Grand Total
                            </td>
                            <td colSpan={1} className="text-end fs-3 fw-bold">
                              LE 215.46
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-end fs-3 fw-bold">
                              Total Due
                            </td>
                            <td colSpan={1} className="text-end fs-3 fw-bold">
                              LE 215.46
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="text-end fs-3 fw-bold">
                              Change Due
                            </td>
                            <td colSpan={1} className="text-end fs-3 fw-bold">
                              LE 0
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media print {
          .print-header {
            display: flex !important;
            justify-content:space-between !important;
            align-items:center !important;
            font-size: 12px !important
          }
        }
        .print-header {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default OrderDetails;
