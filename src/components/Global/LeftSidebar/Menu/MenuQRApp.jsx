import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";
import classes from "../LeftSidebar.module.css";
import { FaHandPointRight } from "react-icons/fa";
import { FaThList } from "react-icons/fa";

const MenuQRApp = () => {
  const [isMenuOpen111, setIsMenuOpen111] = useState(false);
  const [nestedMenuState, setNestedMenuState] = useState({});
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen111(!isMenuOpen111);
  };

  const toggleNestedMenu = (event, id) => {
    event.stopPropagation();
    setNestedMenuState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    if (location.pathname === "/ordermanage/order/pos_invoice") {
      setIsMenuOpen111(false);
    }
  }, [location.pathname]);

  const menuItems = [
    { title: "QR Order List", link: "/qrapp/qrmodule/index" },
    { title: "ALL Table QR", link: "/qrapp/qrmodule/tableqrcode" },
    { title: "QR Payment Setting", link: "/qrapp/qrmodule/qrpaymentsetting" },
];

  return (
    <div
      className={`menu-item here menu-accordion ${
        isMenuOpen111 ? "show hover" : ""
      }`}
      onClick={toggleMenu}
    >
      <span className="menu-link">
        <span className="menu-icon">
          <FaThList className="fs-3" />
        </span>
        <span className="menu-title">QR App</span>
        <span className="menu-arrow"></span>
      </span>
      <div
        className={`menu-sub menu-sub-accordion ${
          isMenuOpen111 ? "show" : `${classes.menuClosed}`
        }`}
      >
        <div className="menu-item">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.nestedItems ? (
                <div
                  className="menu-link"
                  onClick={(event) => toggleNestedMenu(event, item.id)}
                >
                  <span
                    className="bullet bullet-dot"
                    style={{ marginLeft: "8px" }}
                  ></span>
                  <span className="menu-title" style={{ marginLeft: "23px" }}>
                    {item.title}
                  </span>
                  {nestedMenuState[item.id] ? (
                    <span className="menu-arrow"></span>
                  ) : (
                    <MdKeyboardArrowUp />
                  )}
                </div>
              ) : (
                <Link className="menu-link" to={item.link}>
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot"></span>
                  </span>
                  <span className="menu-title">{item.title}</span>
                </Link>
              )}
              {nestedMenuState[item.id] && item.nestedItems && (
                <div style={{ marginLeft: "28px" }}>
                  {item.nestedItems.map((nestedItem, nestedIndex) => (
                    <Link
                      key={nestedIndex}
                      className="menu-link"
                      to={nestedItem.link}
                    >
                      <span className="menu-bullet">
                        <span className="bullet bullet-dot"></span>
                      </span>
                      <span className="menu-title">{nestedItem.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuQRApp;
