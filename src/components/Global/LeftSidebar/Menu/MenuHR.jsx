import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { MdKeyboardArrowUp } from "react-icons/md";
import classes from "../LeftSidebar.module.css";
import { MdAccountBalance } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";

const MenuHR = () => {
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
      id: "Staff",
      title: "Staff",
      nestedItems: [
        { title: "Designation", link: "/hrm/Employees/create_position" },
        { title: "Add Employee", link: "/hrm/Employees/viewEmhistory" },
        { title: "Manege Employee", link: "/hrm/Employees/manageemployee" },
        { title: "Manege Employee Salary", link: "/hrm/Employees/emp_payment_view" },
      
      ],
    },
    {
      id: "Expenses",
      title: "Expenses",
      nestedItems: [
        { title: "Add Expense Item", link: "/hrm/Cexpense/add_expense_item" },
        { title: "Manage Expense Item", link: "/hrm/Cexpense/manage_expense_item" },
        { title: "Add Expense", link: "/hrm/Cexpense/add_expense" },
        { title: "Manage Expense", link: "/hrm/Cexpense/manage_expense" },
        { title: "Expense Statement", link: "/hrm/Cexpense/expense_statement_form" },
      
      ],
    },
    {
      id: "Award",
      title: "Award",
      nestedItems: [
        { title: "New Award", link: "/hrm/Award_controller/create_award" },
      ],
    },
    {
      id: "Recruitment",
      title: "Recruitment",
      nestedItems: [
        { title: "Add New Candidate", link: "/hrm/Candidate/caninfo_create" },
        { title: "Manage Candidate", link: "/hrm/Candidate/candidateinfo_view" },
        { title: "Candidate ShortList", link: "/hrm/Candidate_select/create_shortlist" },
        { title: "Interview", link: "/hrm/Candidate_select/create_interview" },
        { title: "Candidate Selection", link: "/hrm/Candidate_select/create_selection" },
      ],
    },
    {
      id: "Department",
      title: "Department",
      nestedItems: [
        { title: "Department", link: "/hrm/Department_controller/create_dept" },
        { title: "Add Division", link: "/hrm/Division_controller/division_form" },
        { title: "Manage Division", link: "/hrm/Division_controller/index" },
      ],
    },
    {
      id: "Leave",
      title: "Leave",
      nestedItems: [
        { title: "Weekly Holiday", link: "/hrm/Leave/create_weekleave" },
        { title: "Holiday", link: "/hrm/Leave/holiday_view" },
        { title: "Add leave Type", link: "/hrm/Leave/add_leave_type" },
        { title: "leave Application", link: "/hrm/Leave/others_leave" },
      ],
    },
    {
      id: "Loan",
      title: "Loan",
      nestedItems: [
        { title: "Grant Loan", link: "/hrm/Loan/create_grandloan" },
        { title: "Loan Installment", link: "/hrm/Loan/create_installment" },
        { title: "Loan Report", link: "/hrm/Loan/loan_report" },
      ],
    },
    {
      id: "Payroll",
      title: "Payroll",
      nestedItems: [
        { title: "Salary Type Setup", link: "/hrm/Payroll/create_salary_setup" },
        { title: "Salary Setup", link: "/hrm/Payroll/create_s_setup" },
        { title: "Salary Generate", link: "/hrm/Payroll/create_salary_generate" },
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
          <PiUsersThreeBold className="fs-3" />
        </span>
        <span className="menu-title">Hr Management</span>
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

export default MenuHR;
