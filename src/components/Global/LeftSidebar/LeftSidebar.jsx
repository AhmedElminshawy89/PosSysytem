import React from "react";
import classes from "./LeftSidebar.module.css";
import {
  Order_Management,
  Production_Management,
  Purchases_Management,
  Reports,
  Reservation,
} from "../../../data/menu-data/dataMenu";
import Menu from "./Menu/Menu";
import { Link, useLocation } from "react-router-dom";
import MenuReports from "./Menu/MenuReports";
import MenuFoodCategory from "./Menu/MenuFoodCategory";

const LeftSidebar = ({ isMinimized, isSidebarActive }) => {
  const location = useLocation();

  return (
    <>
      <div className={`${isSidebarActive ? "drawer-overlay" : ""}`}></div>
      <div
        id="kt_app_sidebar"
        className={`app-sidebar flex-column ${classes.leftSidebarStyle} ${
          isMinimized ? "app-sidebar-minimize LeftSidebar_leftSidebarStyle__trJmR" : ""
        }`}
      >
        <div id="kt_app_sidebar_wrapper" className="app-sidebar-wrapper">
          <div className="hover-scroll-y my-5 my-lg-2 mx-4">
            <div
              id="#kt_app_sidebar_menu"
              className="app-sidebar-menu-primary menu menu-column menu-rounded menu-sub-indention menu-state-bullet-primary px-3 mb-5"
            >
              <Link
                to="/"
                style={{
                  fontSize: "1.15rem",
                  color: "#252F4A",
                  fontWeight: "600",
                }}
              >
                <div
                  data-kt-menu-trigger="click"
                  className={`menu-item ${
                    location.pathname === "/" ? "here" : ""
                  } menu-accordion`}
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
              <Menu menuItems={Purchases_Management} title="Purchases" />
              <MenuReports />
              <MenuFoodCategory />
              <Menu menuItems={Production_Management} title="Production" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
