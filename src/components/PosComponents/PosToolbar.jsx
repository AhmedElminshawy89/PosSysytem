import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../redux/PosSlice";

const PosToolbar = () => {
  const activeTab = useSelector((state) => state.activeTabPos.activeTab);
  const dispatch = useDispatch();

  const handleTabClick = (tabName) => {
    dispatch(setActiveTab(tabName));
  };

  return (
    <div id="kt_app_toolbar" className="app-toolbar pt-6 pb-2">
      <div
        id="kt_app_toolbar_container"
        className="app-container container-fluid d-flex align-items-stretch"
      >
        <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
          <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
            <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 m-0">
              POS System
            </h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
              <li className="breadcrumb-item text-muted">
                <a href="index.html" className="text-muted text-hover-primary">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-500 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-muted">Dashboards</li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-2 gap-lg-3 flex-wrap">
            <p
              className={
                activeTab === "newOrder"
                  ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                  : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
              }
              onClick={() => handleTabClick("newOrder")}
            >
              New Order
            </p>
            <p
              className={
                activeTab === "ongoingOrder"
                  ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                  : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
              }
              onClick={() => handleTabClick("ongoingOrder")}
            >
              On Going Order
            </p>
            <p
              className={
                activeTab === "StationStatus"
                  ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                  : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
              }
              onClick={() => handleTabClick("StationStatus")}
            >
              Station Status
            </p>
            <p
              className={
                activeTab === "QROrder"
                  ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                  : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
              }
              onClick={() => handleTabClick("QROrder")}
            >
              QR Order
            </p>
            <p
              className={
                activeTab === "OnlineOrder"
                  ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                  : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
              }
              onClick={() => handleTabClick("OnlineOrder")}
            >
              Online Order
            </p>
            <p
              className={
                activeTab === "TodayOrder"
                  ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                  : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
              }
              onClick={() => handleTabClick("TodayOrder")}
            >
              Today Order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosToolbar;
