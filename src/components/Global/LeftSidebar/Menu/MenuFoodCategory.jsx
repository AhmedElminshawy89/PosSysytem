import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import classes from "../LeftSidebar.module.css";
import { FaCube } from "react-icons/fa6";

const MenuFoodCategory = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const toggleMenuMain = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      title: "Manage Category",
      nestedItems: [
        { title: "Add Category", link: "/itemmanage/item_category/create" },
        { title: "Category List", link: "/itemmanage/item_category/index" },
        { title: "Menu Order", link: "/itemmanage/item_category/menuorder" },
      ],
    },
    {
      title: "Manage Food",
      nestedItems: [
        { title: "Add Food", link: "/itemmanage/item_food/create" },
        { title: "Food List", link: "/itemmanage/item_food/index" },
        { title: "Add Group Item", link: "/itemmanage/item_food/addgroupfood" },
        {
          title: "Food Variant",
          link: "/itemmanage/item_food/foodvarientlist",
        },
        {
          title: "Food Availability",
          link: "/itemmanage/item_food/availablelist",
        },
        { title: "Menu Type", link: "/itemmanage/item_food/todaymenutype" },
      ],
    },
    {
      title: "Manage Add-ons",
      nestedItems: [
        { title: "Add Add-ons", link: "/itemmanage/menu_addons/create" },
        { title: "Add-ons List", link: "/itemmanage/menu_addons/index" },
      ],
    },
  ];

  return (
    <div className="menu-item here menu-accordion">
      <span className="menu-link" onClick={toggleMenuMain}>
        <span className="menu-icon">
        <FaCube className="fs-2" />
        </span>
        <span className="menu-title">Food</span>
        <span className="menu-arrow"></span>
      </span>
      <div
        className={`menu-sub menu-sub-accordion ${
          isMenuOpen ? "show" : `${classes.menuClosed}`
        }`}
      >
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-link" onClick={() => toggleMenu(index)}>
              <span
                className="bullet bullet-dot"
                style={{ marginLeft: "8px" }}
              ></span>
              <span className="menu-title" style={{ marginLeft: "23px" }}>
                {item.title}
              </span>
              {activeMenu === index ? (
                <span className="menu-arrow"></span>
              ) : (
                <MdKeyboardArrowUp />
              )}
            </div>
            {activeMenu === index && (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFoodCategory;
