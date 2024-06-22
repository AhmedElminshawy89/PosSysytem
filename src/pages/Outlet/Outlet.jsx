import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "../../components/Global/Header/MainHeader";
import LeftSidebar from "../../components/Global/LeftSidebar/LeftSidebar";
import RightAside from "../../components/Global/RightAside/RightAside";
import classes from "../../styles/global.module.css";
import Footer from "../../components/Global/Footer/Footer";

const PagesOutlet = () => {
	const location = useLocation()
	const isPosInvoiceRoute = location.pathname === "/ordermanage/order/pos_invoice";

	
	return (
		<div>
			<MainHeader />
			<div
				className={`app-wrapper flex-column flex-row-fluid ${classes.globalStyle}
			${isPosInvoiceRoute ? "ml-layout-pos-invoice" : ""}`}
				id="kt_app_wrapper">
				<LeftSidebar />
				<div style={{ marginTop: "99px" }}>
					<Outlet />
				</div>
				<RightAside />
				<Footer />
			</div>
		</div>
	);
};

export default PagesOutlet;
