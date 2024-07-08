import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const PosToolbar = () => {


  return (
    <div id="kt_app_toolbar" className="app-toolbar pt-6 pb-2">
      <div
        id="kt_app_toolbar_container"
        className="app-container container-fluid d-flex align-items-stretch"
      >
        <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
          <div className="page-title d-flex align-items-center gap-3 me-3">
          <IoHomeOutline  className="text-primary iconhome-bread-crumbs"/>
          <div>
            <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-2rem m-0">
            POS System
            </h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
              <li className="breadcrumb-item text-muted">
                <Link to={'/'} href="index.html" className="text-muted text-hover-primary">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-500 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-muted">POS</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosToolbar;
