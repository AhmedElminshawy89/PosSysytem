import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
import { Link } from "react-router-dom";
import MenuReports from "./Menu/MenuReports";
import MenuFoodCategory from "./Menu/MenuFoodCategory";

const LeftSidebar = () => {
  const [isDasboardMenuItemOpen, setIsDasboardMenuItemOpen] = useState(false);
  const [isHelpMenuItemOpen, setIsHelpMenuItemOpen] = useState(false);

  const location = useLocation();
  const isPosInvoiceRoute = location.pathname === "/ordermanage/order/pos_invoice";

  return (
    <div
      id="kt_app_sidebar"
      className={`app-sidebar flex-column ${classes.leftSidebarStyle} ${isPosInvoiceRoute ? "d-none" : ""}`}
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
            <Menu menuItems={Order_Management} title="Order Management" />
            <Menu menuItems={Reservation} title="Reservation" />
            <Menu
              menuItems={Purchases_Management}
              title="Purchases Management"
            />
            <MenuReports />
            <MenuFoodCategory />
            <Menu
              menuItems={Production_Management}
              title="Production Management"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
