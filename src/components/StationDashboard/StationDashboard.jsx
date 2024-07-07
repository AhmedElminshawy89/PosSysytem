import Toolbar from "../Global/ToolBar/Toolbar";
import classesOrderList from "../OrderList/OrderList.module.css";
import { useState } from 'react';
import img from '../../data/Img/no-result.png'
const StationDashboard = () => {


  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid bg-white">
          <div className="d-flex align-items-center justify-content-between bg-white">
          <Toolbar
            MainPage="Station Dashboard"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Station Dashboard"
          />
          <button className="btn btn-primary me-12">Refresh Page</button>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="col-xl-12 mt-0">
                <div className="card card-flush">
                  <div
                    className="card-body pt-8"
                    style={{ overflowX: "auto" }}
                  >

                    <div className="d-flex flex-column align-items-center gap-2 gap-lg-3 flex-wrap pt-20 pb-20">
                        <p className="fw-semibold fs-1">No Order Found!!</p>
                        <img src={img} className="w-full-mobile" loading="lazy" alt=""/>
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

export default StationDashboard;
