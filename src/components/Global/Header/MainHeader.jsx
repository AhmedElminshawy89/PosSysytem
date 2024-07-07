import React, { useState } from "react";
import NotificationMenu from "./NotificationMenu/NotificationMenu";
import QuickLinkMenu from "./QuickLinkMenu/QuickLinkMenu";
import SearchResultsMenu from "./SearchResultsMenu/SearchResultsMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsNotificationMenuOpen,
  setIsQuickLinksMenuOpen,
  setIsSearchResultsMenuOpen,
  setIsMiniProfileMenuOpen,
} from "../../../redux/globalSlice";
import MiniProfileMenu from "./MiniProfileMenu/MiniProfileMenu";
import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { setActiveTab } from "../../../redux/PosSlice";
import { FaRegKeyboard } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import image from "../../../data/Img/logo.jpg";
import { useHotkeys } from "react-hotkeys-hook";
const MainHeader = ({ openSidebar, isMinimized, toggleSidebarActive }) => {
  const [isQuickLinkMenuOpen, setIsQuickLinkMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const location = useLocation();
  const POSPage = location.pathname === "/ordermanage/order/pos_invoice";
  const stationDashboard = location.pathname === "/ordermanage/order/allkitchen";
  const dispatch = useDispatch();
  const isMiniProfileMenuOpen = useSelector(
    (state) => state.global.isMiniProfileMenuOpen
  );
  const activeTab = useSelector((state) => state.activeTabPos.activeTab);

  const handleTabClick = (tabName) => {
    dispatch(setActiveTab(tabName));
  };
  const [activeTab2, setActiveTab2] = useState(1);

  const handleTabClick2 = (tabName) => {
    setActiveTab2(tabName);
  };
  const handleFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };
  const handleExitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };
  useHotkeys('shift+n', () => handleTabClick('newOrder'));
  useHotkeys('shift+g', () => handleTabClick('ongoingOrder'));
  useHotkeys('shift+t', () => handleTabClick('TodayOrder'));
  useHotkeys('shift+o', () => handleTabClick('OnlineOrder'));
  useHotkeys('shift+u', () => handleTabClick('StationStatus'));
  useHotkeys('shift+r', () => handleTabClick('QROrder'));
  return (
    <div
      id="kt_app_header"
      className={`app-header d-flex flex-column flex-stack ${classes.stickyHeader}`}
    >
      <div className={`d-flex flex-stack flex-grow-1 flex-wrap ${classes.widthFull}`}>
        <div
          className="app-header-logo d-flex align-items-center ps-lg-12"
          id="kt_app_header_logo"
        >
          <div
            id="kt_app_sidebar_toggle"
            className="app-sidebar-toggle
             btn btn-sm btn-icon bg-body btn-color-gray-500 
             btn-active-color-primary w-40px h-40px ms-n2 me-4 d-none d-lg-flex"
            // data-kt-toggle="true"
            // data-kt-toggle-state="active"
            // data-kt-toggle-target="body"
            // data-kt-toggle-name="app-sidebar-minimize"
            onClick={openSidebar}
          >
            <i className="ki-outline ki-abstract-14 fs-3 mt-1"></i>
          </div>
          <div
            className="btn btn-icon btn-active-color-primary w-35px h-35px ms-3 me-2 d-flex d-lg-none"
            id="kt_app_sidebar_mobile_toggle"
          >
            <i className="ki-outline ki-abstract-14 fs-2"></i>
          </div>
          <Link to={"/"} className="app-sidebar-logo">
            <span className="logo-lg">
              <img alt="Logo" src={image} className="theme-light-show logo" />
            </span>
            {/* <img
        alt="Logo"
        src="/assets/media/logos/demo39-dark.svg"
        className="h-25px theme-dark-show"
    /> */}
          </Link>
        </div>
        <div
          className="app-navbar flex-grow-1 justify-content-end align-items-center"
          id="kt_app_header_navbar"
        >
          <div className="app-navbar-item d-flex align-items-center flex-lg-grow-1 ps-5">
            {POSPage &&(
              <div
                className="d-flex align-items-center gap-2 gap-lg-3 tabs-pos-system flex-wrap
              special-style-today-order"
              >
                <p
                  className={`text-nowrap ${
                    activeTab === "newOrder"
                      ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                      : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                  }`}
                  onClick={() => handleTabClick("newOrder")}
                >
                  New Order
                </p>
                <p
                  className={`text-nowrap ${
                    activeTab === "ongoingOrder"
                      ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                      : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                  }`}
                  onClick={() => handleTabClick("ongoingOrder")}
                >
                  On Going Order
                </p>
                <p
                  className={`text-nowrap ${
                    activeTab === "StationStatus"
                      ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                      : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                  }`}
                  onClick={() => handleTabClick("StationStatus")}
                >
                  Station Status
                </p>
                <p
                  className={`position-relative text-nowrap ${
                    activeTab === "QROrder"
                      ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                      : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                  }`}
                  onClick={() => handleTabClick("QROrder")}
                >
                  QR Order
                  <p className="count-pos-tabs-sys">141</p>
                </p>
                <p
                  className={`position-relative text-nowrap ${
                    activeTab === "OnlineOrder"
                      ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                      : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                  }`}
                  onClick={() => handleTabClick("OnlineOrder")}
                >
                  Online Order
                  <p className="count-pos-tabs-sys">0</p>
                </p>
                <p
                  className={`text-nowrap ${
                    activeTab === "TodayOrder"
                      ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                      : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                  }`}
                  onClick={() => handleTabClick("TodayOrder")}
                >
                  Today Order
                </p>
              </div>
            )}
            {stationDashboard&&(
                                  <div className="d-flex align-items-center justify-content-start gap-2 gap-lg-3 flex-wrap">
                                  <p
                                    className={`text-nowrap ${
                                      activeTab2 === 1
                                        ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                                        : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                                    }`}
                                    onClick={() => handleTabClick2(1)}
                                  >
                                    BBQ
                                  </p>
                                  <p
                                    className={`text-nowrap ${
                                      activeTab2 === 2
                                        ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                                        : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                                    }`}
                                    onClick={() => handleTabClick2(2)}
                                  >
                                    Central Kitchen
                                  </p>
                                  <p
                                    className={`text-nowrap ${
                                      activeTab2 === 3
                                        ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                                        : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                                    }`}
                                    onClick={() => handleTabClick2(3)}
                                  >
                                    Pizza
                                  </p>
                                  <p
                                    className={`position-relative text-nowrap ${
                                      activeTab2 === 4
                                        ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                                        : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                                    }`}
                                    onClick={() => handleTabClick2(4)}
                                  >
                                    Sandwiches
                                  </p>
                                </div>
            )}
          </div>
          <div className="d-none-mobile-size-pos">
            <div className="app-navbar-item ms-2 ms-lg-6">
              <div
                className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative"
                id="kt_drawer_chat_toggle"
                onClick={handleExitFullScreen}
              >
                <AiFillCloseSquare className="fs-1" />
                {/* <span className="position-absolute top-0 start-100 translate-middle badge badge-circle badge-danger w-15px h-15px ms-n4 mt-3">
                  5
                </span> */}
              </div>
            </div>
            <div className="app-navbar-item ms-2 ms-lg-6">
              <div
                className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                onClick={handleFullScreen}
              >
                <BsArrowsFullscreen className="fs-1" />
              </div>
            </div>
            <div className="app-navbar-item ms-2 ms-lg-6">
              <div
                className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
                onMouseOver={() => {
                  setIsQuickLinkMenuOpen(true);
                }}
                onMouseLeave={() => {
                  setIsQuickLinkMenuOpen(false);
                }}
              >
                <FaRegKeyboard className="fs-1" />
              </div>
              <QuickLinkMenu
                isQuickLinkMenuOpen={isQuickLinkMenuOpen}
                setIsQuickLinkMenuOpen={setIsQuickLinkMenuOpen}
              />
            </div>
          </div>
          <div
            className="app-navbar-item ms-2 ms-lg-6"
            id="kt_header_user_menu_toggle"
          >
            <div
              className={`cursor-pointer symbol symbol-circle symbol-30px symbol-lg-45px ${
                isMiniProfileMenuOpen ? "show menu-dropdown" : ""
              }`}
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
              onMouseOver={() => {
                dispatch(setIsMiniProfileMenuOpen({ value: true }));
              }}
              onMouseLeave={() => {
                dispatch(setIsMiniProfileMenuOpen({ value: false }));
              }}
            >
              <img src="/assets/media/avatars/300-2.jpg" alt="user" />
            </div>
            <MiniProfileMenu />
          </div>
          <div className="app-navbar-item ms-2 ms-lg-6 me-lg-6">
            <a
              href="authentication/layouts/corporate/sign-in.html"
              className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
            >
              <i className="ki-outline ki-exit-right fs-1"></i>
            </a>
          </div>
          <div className="app-navbar-item ms-2 ms-lg-6 ms-n2 me-3 d-flex d-lg-none">
            <div
              className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
              id="kt_app_aside_mobile_toggle"
            >
              <i className="ki-outline ki-burger-menu-2 fs-2"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`app-header-separator ${classes.separator} ${
          isMinimized ? "ml-layout-pos-invoice" : ""
        }`}
      ></div>
    </div>
  );
};

export default MainHeader;
