import React from "react";
import classes from "./QuickLinkMenu.module.css";

const QuickLinkMenu = ({ isQuickLinkMenuOpen, setIsQuickLinkMenuOpen }) => {
	return (
		<div
			className={`menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px ${
				isQuickLinkMenuOpen ? `show ${classes.showQuickLinksMenu}` : ""
			}`}
			data-kt-menu="true"
			onMouseOver={() => {
				console.log("Yes");
				setIsQuickLinkMenuOpen(true);
			}}
			onMouseLeave={() => {
				console.log("No");
				setIsQuickLinkMenuOpen(false);
			}}
		>
			<div
				className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
				style={{
					backgroundImage: "url('assets/media/misc/menu-header-bg.jpg')",
				}}
			>
				<h3 className="text-white fw-semibold mb-3">Quick Links</h3>
				<span className="badge bg-primary text-inverse-primary py-2 px-3">
					25 pending tasks
				</span>
			</div>
			<div className="row g-0">
				<div className="col-6">
					<a
						href="apps/projects/budget.html"
						className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom"
					>
						<i className="ki-outline ki-dollar fs-3x text-primary mb-2"></i>
						<span className="fs-5 fw-semibold text-gray-800 mb-0">
							Accounting
						</span>
						<span className="fs-7 text-gray-500">eCommerce</span>
					</a>
				</div>
				<div className="col-6">
					<a
						href="apps/projects/settings.html"
						className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom"
					>
						<i className="ki-outline ki-sms fs-3x text-primary mb-2"></i>
						<span className="fs-5 fw-semibold text-gray-800 mb-0">
							Administration
						</span>
						<span className="fs-7 text-gray-500">Console</span>
					</a>
				</div>
				<div className="col-6">
					<a
						href="apps/projects/list.html"
						className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end"
					>
						<i className="ki-outline ki-abstract-41 fs-3x text-primary mb-2"></i>
						<span className="fs-5 fw-semibold text-gray-800 mb-0">
							Projects
						</span>
						<span className="fs-7 text-gray-500">Pending Tasks</span>
					</a>
				</div>
				<div className="col-6">
					<a
						href="apps/projects/users.html"
						className="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
					>
						<i className="ki-outline ki-briefcase fs-3x text-primary mb-2"></i>
						<span className="fs-5 fw-semibold text-gray-800 mb-0">
							Customers
						</span>
						<span className="fs-7 text-gray-500">Latest cases</span>
					</a>
				</div>
			</div>
			<div className="py-2 text-center border-top">
				<a
					href="pages/user-profile/activity.html"
					className="btn btn-color-gray-600 btn-active-color-primary"
				>
					View All
					<i className="ki-outline ki-arrow-right fs-5"></i>
				</a>
			</div>
		</div>
	);
};

export default QuickLinkMenu;
