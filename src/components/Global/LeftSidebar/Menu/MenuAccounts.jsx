import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { MdKeyboardArrowUp } from "react-icons/md";
import classes from "../LeftSidebar.module.css";
import { MdAccountBalance } from "react-icons/md";

const MenuAccounts = () => {
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
    { id: "Chart of Accounts", title: "Chart of Accounts", link: "/accounts/accounts/show_tree" },
    { id: "Supplier Payment", title: "Supplier Payment", link: "/accounts/accounts/supplier_payments" },
    { id: "Cash Adjustment", title: "Cash Adjustment", link: "/accounts/accounts/cash_adjustment" },
    { id: "Debit Voucher", title: "Debit Voucher", link: "/accounts/accounts/debit_voucher" },
    { id: "Credit Voucher", title: "Credit Voucher", link: "/accounts/accounts/credit_voucher" },
    { id: "Contra Voucher", title: "Contra Voucher", link: "/accounts/accounts/contra_voucher" },
    { id: "Journal Voucher", title: "Journal Voucher", link: "/accounts/accounts/journal_voucher" },
    { id: "Voucher approval", title: "Voucher approval", link: "/accounts/accounts/aprove_v" },
    {
      id: "Account Report",
      title: "Account Report",
      nestedItems: [
        { title: "Voucher Report", link: "/accounts/accounts/voucher_report" },
        { title: "Cash Book", link: "/accounts/accounts/cash_book" },
        { title: "Bank Book", link: "/accounts/accounts/bank_book" },
        { title: "General Ledger", link: "/accounts/accounts/general_ledger" },
        { title: "Trial Balance ", link: "/accounts/accounts/trial_balance" },
        { title: "Profit Loss", link: "/accounts/accounts/profit_loss_report" },
        { title: "Cash Flow", link: "/accounts/accounts/cash_flow_report" },
        { title: "Coa Print", link: "/accounts/accounts/coa_print" },
        { title: "Balance Sheet", link: "/accounts/accounts/balance_sheet" },
      
      ],
    },
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
          <MdAccountBalance className="fs-3" />
        </span>
        <span className="menu-title">Accounts</span>
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

export default MenuAccounts;
