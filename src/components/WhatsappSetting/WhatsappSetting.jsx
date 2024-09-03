import React, { useState } from "react";
import CheckInput from "../../components/Global/CheckInput/CheckInput";
import classes from "../../styles/global.module.css";
import Toolbar from "../Global/ToolBar/Toolbar";

const WhatsappSetting = () => {
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
          MainPage="Whatsapp Setting"
          CurrentPage="Home"
          path={"/"}
          TitlePage="Whatsapp Setting"
        />
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            class="app-container container-fluid"
          >
            <div className="d-flex flex-column gap-7 gap-lg-10">

              <div className="d-flex flex-column flex-xl-row gap-7 gap-lg-10">
              <div className="card card-flush py-0 flex-row-fluid w-400pxx">
                <div className="card-header mb-30">
                  <div className="card-title">
                    <h2>Whatsapp Chat</h2>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="table-responsive">
                    <table className="table align-middle table-row-bordered mb-0 fs-6 gy-5 min-w-300px">
                      <tbody className="fw-semibold text-gray-600">
                        <tr className="bg-white">
                          {/* <td className="text-muted fs-3 py-3">Whatsapp Phone Number</td> */}
                          <td className="text-end py-3">
                          <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 width-full-invoices">
                    <label htmlFor="" className="text-muted fs-3 py-3">Whatsapp Phone Number</label>
                    <input
        type="text"
        placeholder="Whatsapp Phone Number"
        className="form-control form-control-solid border-0 ps-4"
        style={{borderRadius:'.75rem',width:'128%'}}
      />
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
                          <td className="text-muted fs-3 py-3">Chat Enable                          </td>
                          <td className="fw-bold text-end py-3">
                            <div className="d-flex justify-content-end">
                              <CheckInput />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="text-muted fs-3 py-3">WhatsApp Order Enabled</td>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappSetting;