import React, { useState } from "react";
import CheckInput from "../../components/Global/CheckInput/CheckInput";
import classes from "../../styles/global.module.css";
import Toolbar from "../Global/ToolBar/Toolbar";

const PosSettings = () => {
  const [tab,setTab] = useState(1)
  const handleTab=(num)=>{
    setTab(num)
  }
  return (
    <div
      className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
    >
      <div className="d-flex flex-column flex-column-fluid">
        <Toolbar
          MainPage="POS Setting"
          CurrentPage="Home"
          path={"/"}
          TitlePage="POS Setting"
        />
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            class="app-container container-fluid"
          >
            <div className="d-flex flex-column gap-7 gap-lg-10">
              <div className="d-flex flex-wrap flex-stack gap-5 gap-lg-10">
                <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-lg-n2 me-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link text-active-primary pb-4 active cursor-pointer"
                      data-bs-toggle="tab"
                      onClick={()=>handleTab(1)}
                    >
                      Place order
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-active-primary pb-4 cursor-pointer"
                      data-bs-toggle="tab"
                      onClick={()=>handleTab(2)}
                    >
                      Quick Order
                    </a>
                  </li>
                </ul>
                {/* <a href="apps/ecommerce/sales/listing.html" className="btn btn-icon btn-light btn-active-secondary btn-sm ms-auto me-lg-n7">
          <i className="ki-outline ki-left fs-2"></i>
        </a>
        <a href="apps/ecommerce/sales/edit-order.html" className="btn btn-success btn-sm me-lg-n7">
          Edit Order
        </a>
        <a href="apps/ecommerce/sales/add-order.html" className="btn btn-primary btn-sm">
          Add New Order
        </a> */}
              </div>
              {/* <div className="d-flex flex-column flex-xl-row gap-7 gap-lg-10"> */}
              {tab===1?(
              <div className="card card-flush py-0 flex-row-fluid w-400px">
                <div className="card-header mb--30">
                  <div className="card-title">
                    <h2> Place order</h2>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="table-responsive">
                    <table className="table align-middle table-row-bordered mb-0 fs-6 gy-5 min-w-300px">
                      <tbody className="fw-semibold text-gray-600">
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">Waiter</td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">Table</td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">Cooking Time</td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">Table Map</td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">
                            Is Sound Enable
                          </td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              ):(
                <div className="card card-flush py-0 flex-row-fluid w-400px">
                <div className="card-header mb--30">
                  <div className="card-title">
                    <h2> Quick order</h2>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="table-responsive">
                    <table className="table align-middle table-row-bordered mb-0 fs-6 gy-5 min-w-300px">
                      <tbody className="fw-semibold text-gray-600">
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">Waiter</td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">Table</td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">Cooking Time</td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">Table Map</td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">
                            Is Sound Enable
                          </td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              )}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosSettings;
