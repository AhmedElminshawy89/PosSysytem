import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import img from '../../../data/Img/brandmarks.png'
const Footer = () => {
	return (
		<div id="kt_app_footer" className="app-footer">
			{/* <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3"> */}
			<div className="app-container container-fluid d-flex flex-column align-items-center justify-content-start py-3">
				<div className="d-flex align-items-start justify-content-start w-100">
					<p>
					FB Instasme - Inventory - POS - Warehouses - Vendors - Sales - HR
					</p>
				</div>
				<div className="d-flex align-items-center justify-content-between w-100">
					<div className="d-flex align-items-center justify-content-start gap-3">
						<img
							src={img}
							alt="BrandmarksLogo"
							className={`${classes.footerImage}`}
						/>
						<div className="d-flex flex-column align-items-start justify-content-start text-gray-900 order-2 order-md-1">
							<span className="text-muted fw-semibold me-1">
								&copy; 2024 Developed by Brandmarks
							</span>
							<a
								href="https://www.brandmarks360.com/"
								target="_blank"
								className="text-gray-800 text-hover-primary"
							>
								All rights reserved - v4.0.7
							</a>
						</div>
					</div>
					<ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1 flex-wrap">
						<li className="menu-item">
							<a href="https://www.brandmarks360.com" target="_blank" className="menu-link px-2">
								About
							</a>
						</li>
						<li className="menu-item">
							<a href="https://www.brandmarks360.com" target="_blank" className="menu-link px-2">
								Support
							</a>
						</li>
						<li className="menu-item">
							<a to="https://www.brandmarks360.com" target="_blank" className="menu-link px-2">
								Purchase
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;