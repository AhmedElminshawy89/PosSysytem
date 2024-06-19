import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import classes from "../LeftSidebar.module.css";

const Menu = ({ title, menuItems }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
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
					<i className="ki-outline ki-briefcase fs-2"></i>
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
