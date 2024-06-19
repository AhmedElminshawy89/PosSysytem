import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, link }) => {
	return (
		<div className="menu-item">
			<Link className="menu-link" to={link}>
				<span className="menu-bullet">
					<span className="bullet bullet-dot"></span>
				</span>
				<span className="menu-title">{title}</span>
			</Link>
		</div>
	);
};

export default MenuItem;
