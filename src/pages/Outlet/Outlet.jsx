import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "../../components/Global/Header/MainHeader";
import LeftSidebar from "../../components/Global/LeftSidebar/LeftSidebar";
import RightAside from "../../components/Global/RightAside/RightAside";
import classes from "../../styles/global.module.css";
import Footer from "../../components/Global/Footer/Footer";

const PagesOutlet = () => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === "/ordermanage/order/pos_invoice") {
      setIsSidebarMinimized(true);
    } else {
      setIsSidebarMinimized(false);
    }
  }, [location.pathname]); // تغيير هنا لاستخدام location.pathname مباشرة
  
  const handleToggleMinimize = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };
  


  return (
    <div>
      <MainHeader
        openSidebar={handleToggleMinimize}
        isMinimized={isSidebarMinimized}
      />
      <div
        className={`app-wrapper flex-column flex-row-fluid ${classes.globalStyle} ${isSidebarMinimized ? "ml-layout-pos-invoice" : ""}`}
        id="kt_app_wrapper"
      >
        <LeftSidebar isMinimized={isSidebarMinimized} />
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
