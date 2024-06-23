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
import image from '../../../data/Img/logo.jpg'
const MainHeader = ({ toggleSidebar, isMinimized, toggleSidebarActive }) => {
  const [isQuickLinkMenuOpen, setIsQuickLinkMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const location = useLocation();
  const POSPage = location.pathname === "/ordermanage/order/pos_invoice";
  const dispatch = useDispatch();
  const isMiniProfileMenuOpen = useSelector(
    (state) => state.global.isMiniProfileMenuOpen
  );
  const activeTab = useSelector((state) => state.activeTabPos.activeTab);

  const handleTabClick = (tabName) => {
    dispatch(setActiveTab(tabName));
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
  return (
    <div
      id="kt_app_header"
      className={`app-header d-flex flex-column flex-stack ${classes.stickyHeader}`}
    >
      <div className="d-flex flex-stack flex-grow-1 flex-wrap">
        <div
          className="app-header-logo d-flex align-items-center ps-lg-12"
          id="kt_app_header_logo"
        >
          <div
            id="kt_app_sidebar_toggle"
            className="app-sidebar-toggle btn btn-sm btn-icon bg-body btn-color-gray-500 btn-active-color-primary w-30px h-30px ms-n2 me-4 d-none d-lg-flex"
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="app-sidebar-minimize"
            onClick={() => {
              toggleSidebar();
              toggleSidebarActive();
            }}
          >
            <i className="ki-outline ki-abstract-14 fs-3 mt-1"></i>
          </div>
          <div
            className="btn btn-icon btn-active-color-primary w-35px h-35px ms-3 me-2 d-flex d-lg-none"
            id="kt_app_sidebar_mobile_toggle"
          >
            <i className="ki-outline ki-abstract-14 fs-2"></i>
          </div>
          <Link to={'/'} className="app-sidebar-logo">
            <img
              alt="Logo"
              src={image}
              className="h-25px theme-light-show"
            />
            <img
              alt="Logo"
              src="/assets/media/logos/demo39-dark.svg"
              className="h-25px theme-dark-show"
            />
          </Link>
        </div>
        <div
          className="app-navbar flex-grow-1 justify-content-end align-items-center"
          id="kt_app_header_navbar"
        >
          <div className="app-navbar-item d-flex align-items-center flex-lg-grow-1">
            {!POSPage ? (
              <div
                id="kt_header_search"
                className="header-search d-flex align-items-center w-lg-350px"
                data-kt-search-keypress="true"
                data-kt-search-min-length="2"
                data-kt-search-enter="enter"
                data-kt-search-layout="menu"
                data-kt-search-responsive="true"
                data-kt-menu-trigger="auto"
                data-kt-menu-permanent="true"
                data-kt-menu-placement="bottom-start"
              >
                <div
                  data-kt-search-element="toggle"
                  className="search-toggle-mobile d-flex d-lg-none align-items-center"
                >
                  <div className="d-flex">
                    <i className="ki-outline ki-magnifier fs-1 fs-1"></i>
                  </div>
                </div>
                <form
                  data-kt-search-element="form"
                  className="d-none d-lg-block w-100 position-relative mb-5 mb-lg-0"
                  autoComplete="off"
                  onClick={() => {
                    console.log("Hiii");
                    setIsSearchMenuOpen((prev) => !prev);
                  }}
                >
                  <input type="hidden" />
                  <i className="ki-outline ki-magnifier search-icon fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-5"></i>
                  <input
                    type="text"
                    className="search-input form-control form-control border h-lg-45px ps-13"
                    name="search"
                    value=""
                    placeholder="Search..."
                    data-kt-search-element="input"
                  />
                  <span
                    className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                    data-kt-search-element="spinner"
                  >
                    <span className="spinner-border h-15px w-15px align-middle text-gray-500"></span>
                  </span>
                  <span
                    className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
                    data-kt-search-element="clear"
                  >
                    <i className="ki-outline ki-cross fs-2 fs-lg-1 me-0"></i>
                  </span>
                </form>
                <SearchResultsMenu
                  isSearchMenuOpen={isSearchMenuOpen}
                  setIsSearchMenuOpen={setIsSearchMenuOpen}
                />
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2 gap-lg-3 tabs-pos-system flex-wrap">
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
                  className={`text-nowrap special-style-today-order ${
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
          </div>
          <div className="d-none-mobile-size-pos">
            <div className="app-navbar-item ms-2 ms-lg-6">
              <div
                className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative"
                id="kt_drawer_chat_toggle"
                onClick={handleExitFullScreen}
              >
                <AiFillCloseSquare className="fs-1"/>
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
                <BsArrowsFullscreen className="fs-1"/>
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
                 <FaRegKeyboard className="fs-1"/>
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
