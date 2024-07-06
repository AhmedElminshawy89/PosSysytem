import React, { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import classes from "../LeftSidebar.module.css";
import { FaFirstOrder, FaTags } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
const Menu = ({ title, menuItems, NestedMenu, NestedTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/ordermanage/order/pos_invoice") {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);
  return (
    <div
      data-kt-menu-trigger="click"
      className={`menu-item here menu-accordion ${
        isMenuOpen ? "show hover" : ""
      }`}
    >
      <span
        className="menu-link"
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
      >
        <span className="menu-icon">
          {title === "Order" && <FaFirstOrder className="fs-2" />}
          {title === "Reservation" && <FaTags className="fs-2" />}
          {title === "Purchases" && (
            <IoCartOutline className="fs-2" />
          )}
          {title === "Production" && <FaProductHunt className="fs-2" />}
        </span>
        <span className="menu-title">{title}</span>
        <span className="menu-arrow"></span>
      </span>
      <div
        className={`menu-sub menu-sub-accordion ${
          isMenuOpen ? "show" : `${classes.menuClosed}`
        }`}
      >
        {menuItems.map((item) => (
          <MenuItem
            link={item.link}
            title={item.title}
            key={item.link + item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
