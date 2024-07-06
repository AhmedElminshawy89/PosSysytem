import React, { useState, useEffect } from "react";
import classes from "./LeftSidebar.module.css";
import {
  Order_Management,
  Production_Management,
  Purchases_Management,
  Reports,
  Reservation,
} from "../../../data/menu-data/dataMenu";
import MenuItem from "./MenuItem/MenuItem";
import Menu from "./Menu/Menu";
import { Link, useLocation } from "react-router-dom";
import MenuReports from "./Menu/MenuReports";
import MenuFoodCategory from "./Menu/MenuFoodCategory";

const LeftSidebar = ({ isMinimized, isSidebarActive }) => {
  const location = useLocation();
  
  // Check if the current path is /ordermanage/order/pos_invoice
  const isPosInvoicePath = location.pathname === "/ordermanage/order/pos_invoice";
  return (
    <>
      {/* <div
        style={{ zIndex: 105 }}
        className={`${isSidebarActive ? "drawer-overlay" : ""}`}
      ></div> */}
        {/* ${
          isSidebarActive
            ? "app-sidebar flex-column drawer drawer-start drawer-on"
            : ""
        } */}
      <div
        id="kt_app_sidebar"
        className={`app-sidebar flex-column ${classes.leftSidebarStyle}
          ${isMinimized || isPosInvoicePath ? "app-sidebar-minimize" : ""}
            `}
        data-kt-drawer="true"
        data-kt-drawer-name="app-sidebar"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="250px"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
      >
        <div id="kt_app_sidebar_wrapper" className="app-sidebar-wrapper">
          <div
            className="hover-scroll-y my-5 my-lg-2 mx-4"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_app_header"
            data-kt-scroll-wrappers="#kt_app_sidebar_wrapper"
            data-kt-scroll-offset="5px"
          >
            <div
              id="#kt_app_sidebar_menu"
              data-kt-menu="true"
              data-kt-menu-expand="false"
              className="app-sidebar-menu-primary menu menu-column menu-rounded menu-sub-indention menu-state-bullet-primary px-3 mb-5"
            >
              <Link
                to={"/"}
                style={{
                  fontSize: "1.15rem",
                  color: "#252F4A",
                  fontWeight: "600",
                }}
              >
                <div
                  data-kt-menu-trigger="click"
                  className={`menu-item here menu-accordion`}
                >
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-outline ki-home-2 fs-2"></i>
                    </span>
                    <span className="menu-title">Dashboards</span>
                  </span>
                  <div className={`menu-sub menu-sub-accordion`}></div>
                </div>
              </Link>
              <Menu menuItems={Order_Management} title="Order" />
              <Menu menuItems={Reservation} title="Reservation" />
              <Menu
                menuItems={Purchases_Management}
                title="Purchases"
              />
              <MenuReports />
              <MenuFoodCategory />
              <Menu
                menuItems={Production_Management}
                title="Production"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
