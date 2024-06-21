import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import classes from "../LeftSidebar.module.css";
import { TbReportAnalytics } from "react-icons/tb";

const MenuReports = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNestedMenuOpen, setIsNestedMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNestedMenu = (event) => {
    event.stopPropagation();
    setIsNestedMenuOpen(!isNestedMenuOpen);
  };

  const menuItems = [
    {
      title: "Purchase Report",
      link: "/report/reports/index"
    },
    {
      title: "Stock Report (Food Items)",
      link: "/purchase/purchase/create"
    },
    {
      title: "Stock Report (Station)",
      link: "/report/reports/ingredientwise"
    },
    {
      title: "Sales Report",
      nestedItems: [
        { title: "Items Sales Report", link: "/report/reports/sellrptItems" },
        { title: "Service Charge Report", link: "/report/reports/servicerpt" },
        { title: "Waiters Sales Report", link: "/report/reports/sellrptwaiter" },
        { title: "Station Sales Report", link: "/report/reports/kichansrpt" },
        { title: "Delivery Type Sales Report", link: "/report/reports/sellrptdelvirytype" },
        { title: "Sale Report Cashier", link: "/report/reports/sellrptCasher" }
      ]
    },
    {
      title: "Cash Register Report",
      link: "/report/reports/cashregister"
    },
    {
      title: "Sale Report Filtering",
      link: "/report/reports/sellrpt2"
    },
    {
      title: "Sale By Date",
      link: "/report/reports/sellrptbydate"
    },
    {
      title: "Commission",
      link: "/report/reports/payroll_commission"
    },
    {
      title: "Sale By Table",
      link: "/report/reports/table_sale"
    }
  ];

  return (
    <div
      className={`menu-item here menu-accordion ${isMenuOpen ? "show hover" : ""}`}
      onClick={toggleMenu}
    >
      <span className="menu-link">
        <span className="menu-icon">
        <TbReportAnalytics className="fs-2" />
        </span>
        <span className="menu-title">Reports</span>
        <span className="menu-arrow"></span>
      </span>
      <div
        className={`menu-sub menu-sub-accordion ${isMenuOpen ? "show" : `${classes.menuClosed}`}`}
      >
        <div className="menu-item">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.nestedItems ? (
                <div className="menu-link" onClick={(event) => toggleNestedMenu(event)}>
                  <span className="bullet bullet-dot" style={{ marginLeft: "8px" }}></span>
                  <span className="menu-title" style={{ marginLeft: "23px" }}>{item.title}</span>
                  {isNestedMenuOpen ? (
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
              {isNestedMenuOpen && item.nestedItems && (
                <div style={{ marginLeft: "28px" }}>
                  {item.nestedItems.map((nestedItem, nestedIndex) => (
                    <Link key={nestedIndex} className="menu-link" to={nestedItem.link}>
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

export default MenuReports;
