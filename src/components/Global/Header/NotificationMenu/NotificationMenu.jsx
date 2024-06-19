import React from "react";
import classes from "./NotificationMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setIsNotificationMenuOpen } from "../../../../redux/globalSlice";

const NotificationMenu = () => {
	const dispatch = useDispatch();
	const isNotificationMenuOpen = useSelector(
		(state) => state.global.isNotificationMenuOpen
	);
	return (
		<div
			className={`menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px ${
				isNotificationMenuOpen ? `show ${classes.showNotificationMenu}` : ""
			}`}
			data-kt-menu="true"
			id="kt_menu_notifications"
			onMouseOver={() => {
				dispatch(setIsNotificationMenuOpen({ value: true }));
			}}
			onMouseLeave={() => {
				dispatch(setIsNotificationMenuOpen({ value: false }));
			}}
		>
			<div
				className="d-flex flex-column bgi-no-repeat rounded-top"
				style={{
					backgroundImage: "url('assets/media/misc/menu-header-bg.jpg')",
				}}
			>
				<h3 className="text-white fw-semibold px-9 mt-10 mb-6">
					Notifications
					<span className="fs-8 opacity-75 ps-3">24 reports</span>
				</h3>
				<ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
					<li className="nav-item">
						<a
							className="nav-link text-white opacity-75 opacity-state-100 pb-4"
							data-bs-toggle="tab"
							href="#kt_topbar_notifications_1"
						>
							Alerts
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
							data-bs-toggle="tab"
							href="#kt_topbar_notifications_2"
						>
							Updates
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link text-white opacity-75 opacity-state-100 pb-4"
							data-bs-toggle="tab"
							href="#kt_topbar_notifications_3"
						>
							Logs
						</a>
					</li>
				</ul>
			</div>
			<div className="tab-content">
				<div
					className="tab-pane fade"
					id="kt_topbar_notifications_1"
					role="tabpanel"
				>
					<div className="scroll-y mh-325px my-5 px-8">
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center">
								<div className="symbol symbol-35px me-4">
									<span className="symbol-label bg-light-primary">
										<i className="ki-outline ki-abstract-28 fs-2 text-primary"></i>
									</span>
								</div>
								<div className="mb-0 me-2">
									<a
										href="#"
										className="fs-6 text-gray-800 text-hover-primary fw-bold"
									>
										Project Alice
									</a>
									<div className="text-gray-500 fs-7">Phase 1 development</div>
								</div>
							</div>
							<span className="badge badge-light fs-8">1 hr</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center">
								<div className="symbol symbol-35px me-4">
									<span className="symbol-label bg-light-danger">
										<i className="ki-outline ki-information fs-2 text-danger"></i>
									</span>
								</div>
								<div className="mb-0 me-2">
									<a
										href="#"
										className="fs-6 text-gray-800 text-hover-primary fw-bold"
									>
										HR Confidential
									</a>
									<div className="text-gray-500 fs-7">
										Confidential staff documents
									</div>
								</div>
							</div>
							<span className="badge badge-light fs-8">2 hrs</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center">
								<div className="symbol symbol-35px me-4">
									<span className="symbol-label bg-light-warning">
										<i className="ki-outline ki-briefcase fs-2 text-warning"></i>
									</span>
								</div>
								<div className="mb-0 me-2">
									<a
										href="#"
										className="fs-6 text-gray-800 text-hover-primary fw-bold"
									>
										Company HR
									</a>
									<div className="text-gray-500 fs-7">
										Corporeate staff profiles
									</div>
								</div>
							</div>
							<span className="badge badge-light fs-8">5 hrs</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center">
								<div className="symbol symbol-35px me-4">
									<span className="symbol-label bg-light-success">
										<i className="ki-outline ki-abstract-12 fs-2 text-success"></i>
									</span>
								</div>
								<div className="mb-0 me-2">
									<a
										href="#"
										className="fs-6 text-gray-800 text-hover-primary fw-bold"
									>
										Project Redux
									</a>
									<div className="text-gray-500 fs-7">
										New frontend admin theme
									</div>
								</div>
							</div>
							<span className="badge badge-light fs-8">2 days</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center">
								<div className="symbol symbol-35px me-4">
									<span className="symbol-label bg-light-primary">
										<i className="ki-outline ki-colors-square fs-2 text-primary"></i>
									</span>
								</div>
								<div className="mb-0 me-2">
									<a
										href="#"
										className="fs-6 text-gray-800 text-hover-primary fw-bold"
									>
										Project Breafing
									</a>
									<div className="text-gray-500 fs-7">
										Product launch status update
									</div>
								</div>
							</div>
							<span className="badge badge-light fs-8">21 Jan</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center">
								<div className="symbol symbol-35px me-4">
									<span className="symbol-label bg-light-info">
										<i className="ki-outline ki-picture fs-2 text-info"></i>
									</span>
								</div>
								<div className="mb-0 me-2">
									<a
										href="#"
										className="fs-6 text-gray-800 text-hover-primary fw-bold"
									>
										Banner Assets
									</a>
									<div className="text-gray-500 fs-7">
										Collection of banner images
									</div>
								</div>
							</div>
							<span className="badge badge-light fs-8">21 Jan</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center">
								<div className="symbol symbol-35px me-4">
									<span className="symbol-label bg-light-warning">
										<i className="ki-outline ki-color-swatch fs-2 text-warning"></i>
									</span>
								</div>
								<div className="mb-0 me-2">
									<a
										href="#"
										className="fs-6 text-gray-800 text-hover-primary fw-bold"
									>
										Icon Assets
									</a>
									<div className="text-gray-500 fs-7">
										Collection of SVG icons
									</div>
								</div>
							</div>
							<span className="badge badge-light fs-8">20 March</span>
						</div>
					</div>
					<div className="py-3 text-center border-top">
						<a
							href="pages/user-profile/activity.html"
							className="btn btn-color-gray-600 btn-active-color-primary"
						>
							View All
							<i className="ki-outline ki-arrow-right fs-5"></i>
						</a>
					</div>
				</div>
				<div
					className="tab-pane fade show active"
					id="kt_topbar_notifications_2"
					role="tabpanel"
				>
					<div className="d-flex flex-column px-9">
						<div className="pt-10 pb-0">
							<h3 className="text-gray-900 text-center fw-bold">
								Get Pro Access
							</h3>
							<div className="text-center text-gray-600 fw-semibold pt-1">
								Outlines keep you honest. They stoping you from amazing poorly
								about drive
							</div>
							<div className="text-center mt-5 mb-9">
								<a
									href="#"
									className="btn btn-sm btn-primary px-6"
									data-bs-toggle="modal"
									data-bs-target="#kt_modal_upgrade_plan"
								>
									Upgrade
								</a>
							</div>
						</div>
						<div className="text-center px-4">
							<img
								className="mw-100 mh-200px"
								alt="image"
								src="assets/media/illustrations/sketchy-1/1.png"
							/>
						</div>
					</div>
				</div>
				<div
					className="tab-pane fade"
					id="kt_topbar_notifications_3"
					role="tabpanel"
				>
					<div className="scroll-y mh-325px my-5 px-8">
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-success me-4">
									200 OK
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									New order
								</a>
							</div>
							<span className="badge badge-light fs-8">Just now</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-danger me-4">
									500 ERR
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									New customer
								</a>
							</div>
							<span className="badge badge-light fs-8">2 hrs</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-success me-4">
									200 OK
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									Payment process
								</a>
							</div>
							<span className="badge badge-light fs-8">5 hrs</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-warning me-4">
									300 WRN
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									Search query
								</a>
							</div>
							<span className="badge badge-light fs-8">2 days</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-success me-4">
									200 OK
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									API connection
								</a>
							</div>
							<span className="badge badge-light fs-8">1 week</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-success me-4">
									200 OK
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									Database restore
								</a>
							</div>
							<span className="badge badge-light fs-8">Mar 5</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-warning me-4">
									300 WRN
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									System update
								</a>
							</div>
							<span className="badge badge-light fs-8">May 15</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-warning me-4">
									300 WRN
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									Server OS update
								</a>
							</div>
							<span className="badge badge-light fs-8">Apr 3</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-warning me-4">
									300 WRN
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									API rollback
								</a>
							</div>
							<span className="badge badge-light fs-8">Jun 30</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-danger me-4">
									500 ERR
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									Refund process
								</a>
							</div>
							<span className="badge badge-light fs-8">Jul 10</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-danger me-4">
									500 ERR
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									Withdrawal process
								</a>
							</div>
							<span className="badge badge-light fs-8">Sep 10</span>
						</div>
						<div className="d-flex flex-stack py-4">
							<div className="d-flex align-items-center me-2">
								<span className="w-70px badge badge-light-danger me-4">
									500 ERR
								</span>
								<a
									href="#"
									className="text-gray-800 text-hover-primary fw-semibold"
								>
									Mail tasks
								</a>
							</div>
							<span className="badge badge-light fs-8">Dec 10</span>
						</div>
					</div>
					<div className="py-3 text-center border-top">
						<a
							href="pages/user-profile/activity.html"
							className="btn btn-color-gray-600 btn-active-color-primary"
						>
							View All
							<i className="ki-outline ki-arrow-right fs-5"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotificationMenu;
