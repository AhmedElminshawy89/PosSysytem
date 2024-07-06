import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "../../components/Global/Header/MainHeader";
import LeftSidebar from "../../components/Global/LeftSidebar/LeftSidebar";
import RightAside from "../../components/Global/RightAside/RightAside";
import classes from "../../styles/global.module.css";
import Footer from "../../components/Global/Footer/Footer";

const PagesOutlet = () => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const toggleSidebar = () => {
    if (window.innerWidth > 992) {
      setIsSidebarMinimized((prev) => !prev);
      console.log(">992");
    }
  };
  useEffect(() => {
    if (location.pathname === "/ordermanage/order/pos_invoice") {
      setIsSidebarMinimized(true);
      setIsMenuOpen(false)
    }
  }, [location.pathname]);

  const toggleSidebarActive = () => {
    if (window.innerWidth < 992) {
      setIsSidebarActive((prev) => !prev);
      console.log("<992");
    }
  };

  return (
    <div>
      <MainHeader
        toggleSidebar={toggleSidebar}
        toggleSidebarActive={toggleSidebarActive}
        isMinimized={isSidebarMinimized}
      />
      <div
        className={`app-wrapper flex-column flex-row-fluid ${
          classes.globalStyle
        } ${isSidebarMinimized ? "ml-layout-pos-invoice" : ""}`}
        id="kt_app_wrapper"
      >
        <LeftSidebar
          isMinimized={isSidebarMinimized}
          isSidebarActive={isSidebarActive}
        />
        <div style={{ marginTop: "99px" }}>
          <Outlet />
        </div>
        <RightAside />
        <Footer />
      </div>
    </div>
  );
};

export default PagesOutlet;
