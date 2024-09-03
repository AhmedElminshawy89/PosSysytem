import React, { useState } from "react";
import CheckInput from "../../components/Global/CheckInput/CheckInput";
import classes from "../../styles/global.module.css";
import Toolbar from "../Global/ToolBar/Toolbar";

const AutoUpdate = () => {
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
          MainPage="Auto Update"
          CurrentPage="Home"
          path={"/"}
          TitlePage="Auto Update"
        />
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            class="app-container container-fluid"
          >
            <div className="d-flex flex-column gap-7 gap-lg-10">

              <div className="d-flex flex-column flex-xl-row gap-7 gap-lg-10">
              <div className="card card-flush py-0 flex-row-fluid ">
                <div className="card-body pt-0 d-flex justify-content-center mt-10 flex-column align-items-center">
                  <button className="btn btn-primary p-5">
                    Current Version v-2.9
                  </button>
                  <p className="text-gray-800 fs-2 font-bold">No Update available                  </p>
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

export default AutoUpdate;