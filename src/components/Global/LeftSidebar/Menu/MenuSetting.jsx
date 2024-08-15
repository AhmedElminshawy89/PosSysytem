import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { MdKeyboardArrowUp } from "react-icons/md";
import classes from "../LeftSidebar.module.css";
import { TbReportAnalytics } from "react-icons/tb";

const MenuSetting = () => {
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
    {
      id: "paymentMethod",
      title: "Payment Method",
      nestedItems: [
        { title: "Payment Method List", link: "/setting/paymentmethod/index" },
        { title: "Payment Setup", link: "/setting/paymentmethod/paymentsetup" },
        { title: "Shipping Method Setting", link: "/setting/shippingmethod/index" },
      ],
    },
    {
      id: "manageTable",
      title: "Manage Table",
      nestedItems: [
        { title: "Table List", link: "/setting/restauranttable/index" },
        { title: "Table Setting", link: "/setting/restauranttable/tablesetting" },
      ],
    },
    {
      id: "CustomerType",
      title: "Customer Type",
      nestedItems: [
        { title: "Customer List", link: "/setting/customerlist/index" },
        { title: "Customer Type List", link: "/setting/customertype/index" },
        { title: "Third-Party Customers", link: "/setting/thirdpratycustomer/index" },
        { title: "Card Terminal List", link: "/setting/card_terminal/index" },
      ],
    },
    {
      id: "Station",
      title: "Station Setting",
      nestedItems: [
        { title: "Station List", link: "/setting/kitchensetting/index" },
        { title: "Station Assign", link: "/setting/kitchensetting/assignkitchen" },
        { title: "Station Dashboard Setting", link: "/setting/kitchensetting/kitchen_dashboardsetting" },
      ],
    },
    {
      id: "Unit",
      title: "Unit Measurement",
      nestedItems: [
        { title: "Unit Measurement List", link: "/setting/unitmeasurement/index" },
        { title: "Ingredient List", link: "/setting/ingradient/index" },
      
      ],
    },
    {
      id: "sms",
      title: "SMS Setting",
      nestedItems: [
        { title: "SMS Configuration", link: "/setting/smsetting/sms_configuration" },
        { title: "SMS Template", link: "/setting/smsetting/sms_template" },
      
      ],
    },
    {
      id: "Bank",
      title: "Bank",
      nestedItems: [
        { title: "Bank List", link: "/setting/bank_list/index" },
        { title: "Bank Transaction", link: "/setting/bank_list/bank_transaction" },
      
      ],
    },
    { id: "lang", title: "Language", link: "/setting/language" },
    { id: "app-set", title: "Application Setting", link: "/setting/setting/index" },
    { id: "app-set2", title: "App Setting", link: "/setting/serversetting/index" },
    { id: "Currency", title: "Currency", link: "/setting/currency/index" },
    { id: "Country", title: "Country", link: "/setting/country_city_list/index" },
    { id: "City", title: "City", link: "/setting/country_city_list/statelist" },
    { id: "City", title: "Area", link: "/setting/country_city_list/citylist" },
    { id: "Hotels", title: "Hotels", link: "/setting/hotels/index" },
    { id: "Commission", title: "Commission", link: "/setting/Commissionsetting/payroll_commission" },
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
          <CiSettings className="fs-3" />
        </span>
        <span className="menu-title">Setting</span>
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

export default MenuSetting;
