import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../../components/Global/Header/MainHeader";
import LeftSidebar from "../../components/Global/LeftSidebar/LeftSidebar";
import RightAside from "../../components/Global/RightAside/RightAside";
import classes from "../../styles/global.module.css";
import Footer from "../../components/Global/Footer/Footer";

const PagesOutlet = () => {
	return (
		<div>
			<MainHeader />
			<div
				className={`app-wrapper flex-column flex-row-fluid ${classes.globalStyle}`}
				id="kt_app_wrapper"
			>
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
