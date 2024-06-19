import React from "react";
import { setIsMiniProfileMenuOpen } from "../../../../redux/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./MiniProfileMenu.module.css";

const MiniProfileMenu = () => {
	const dispatch = useDispatch();
	const isMiniProfileMenuOpen = useSelector(
		(state) => state.global.isMiniProfileMenuOpen
	);
	return (
		<div
			className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px ${
				isMiniProfileMenuOpen ? `show ${classes.showMiniProfileMenu}` : ""
			}`}
			data-kt-menu="true"
			onMouseOver={() => {
				dispatch(setIsMiniProfileMenuOpen({ value: true }));
			}}
			onMouseLeave={() => {
				dispatch(setIsMiniProfileMenuOpen({ value: false }));
			}}
		>
			<div className="menu-item px-3">
				<div className="menu-content d-flex align-items-center px-3">
					<div className="symbol symbol-50px me-5">
						<img alt="Logo" src="assets/media/avatars/300-2.jpg" />
					</div>
					<div className="d-flex flex-column">
						<div className="fw-bold d-flex align-items-center fs-5">
							Max Smith
							<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
								Pro
							</span>
						</div>
						<a
							href="#"
							className="fw-semibold text-muted text-hover-primary fs-7"
						>
							max@kt.com
						</a>
					</div>
				</div>
			</div>
			<div className="separator my-2"></div>
			<div className="menu-item px-5">
				<a href="account/overview.html" className="menu-link px-5">
					My Profile
				</a>
			</div>
			<div className="menu-item px-5">
				<a href="apps/projects/list.html" className="menu-link px-5">
					<span className="menu-text">My Projects</span>
					<span className="menu-badge">
						<span className="badge badge-light-danger badge-circle fw-bold fs-7">
							3
						</span>
					</span>
				</a>
			</div>
			<div
				className="menu-item px-5"
				data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
				data-kt-menu-placement="left-start"
				data-kt-menu-offset="-15px, 0"
			>
				<a href="#" className="menu-link px-5">
					<span className="menu-title">My Subscription</span>
					<span className="menu-arrow"></span>
				</a>
				<div className="menu-sub menu-sub-dropdown w-175px py-4">
					<div className="menu-item px-3">
						<a href="account/referrals.html" className="menu-link px-5">
							Referrals
						</a>
					</div>
					<div className="menu-item px-3">
						<a href="account/billing.html" className="menu-link px-5">
							Billing
						</a>
					</div>
					<div className="menu-item px-3">
						<a href="account/statements.html" className="menu-link px-5">
							Payments
						</a>
					</div>
					<div className="menu-item px-3">
						<a
							href="account/statements.html"
							className="menu-link d-flex flex-stack px-5"
						>
							Statements
							<span
								className="ms-2 lh-0"
								data-bs-toggle="tooltip"
								title="View your statements"
							>
								<i className="ki-outline ki-information-5 fs-5"></i>
							</span>
						</a>
					</div>
					<div className="separator my-2"></div>
					<div className="menu-item px-3">
						<div className="menu-content px-3">
							<label className="form-check form-switch form-check-custom form-check-solid">
								<input
									className="form-check-input w-30px h-20px"
									type="checkbox"
									value="1"
									checked="checked"
									name="notifications"
								/>
								<span className="form-check-label text-muted fs-7">
									Notifications
								</span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className="menu-item px-5">
				<a href="account/statements.html" className="menu-link px-5">
					My Statements
				</a>
			</div>
			<div className="separator my-2"></div>
			<div
				className="menu-item px-5"
				data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
				data-kt-menu-placement="left-start"
				data-kt-menu-offset="-15px, 0"
			>
				<a href="#" className="menu-link px-5">
					<span className="menu-title position-relative">
						Mode
						<span className="ms-5 position-absolute translate-middle-y top-50 end-0">
							<i className="ki-outline ki-night-day theme-light-show fs-2"></i>
							<i className="ki-outline ki-moon theme-dark-show fs-2"></i>
						</span>
					</span>
				</a>
				<div
					className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
					data-kt-menu="true"
					data-kt-element="theme-mode-menu"
				>
					<div className="menu-item px-3 my-0">
						<a
							href="#"
							className="menu-link px-3 py-2"
							data-kt-element="mode"
							data-kt-value="light"
						>
							<span className="menu-icon" data-kt-element="icon">
								<i className="ki-outline ki-night-day fs-2"></i>
							</span>
							<span className="menu-title">Light</span>
						</a>
					</div>
					<div className="menu-item px-3 my-0">
						<a
							href="#"
							className="menu-link px-3 py-2"
							data-kt-element="mode"
							data-kt-value="dark"
						>
							<span className="menu-icon" data-kt-element="icon">
								<i className="ki-outline ki-moon fs-2"></i>
							</span>
							<span className="menu-title">Dark</span>
						</a>
					</div>
					<div className="menu-item px-3 my-0">
						<a
							href="#"
							className="menu-link px-3 py-2"
							data-kt-element="mode"
							data-kt-value="system"
						>
							<span className="menu-icon" data-kt-element="icon">
								<i className="ki-outline ki-screen fs-2"></i>
							</span>
							<span className="menu-title">System</span>
						</a>
					</div>
				</div>
			</div>
			<div
				className="menu-item px-5"
				data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
				data-kt-menu-placement="left-start"
				data-kt-menu-offset="-15px, 0"
			>
				<a href="#" className="menu-link px-5">
					<span className="menu-title position-relative">
						Language
						<span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
							English
							<img
								className="w-15px h-15px rounded-1 ms-2"
								src="assets/media/flags/united-states.svg"
								alt=""
							/>
						</span>
					</span>
				</a>
				<div className="menu-sub menu-sub-dropdown w-175px py-4">
					<div className="menu-item px-3">
						<a
							href="account/settings.html"
							className="menu-link d-flex px-5 active"
						>
							<span className="symbol symbol-20px me-4">
								<img
									className="rounded-1"
									src="assets/media/flags/united-states.svg"
									alt=""
								/>
							</span>
							English
						</a>
					</div>
					<div className="menu-item px-3">
						<a href="account/settings.html" className="menu-link d-flex px-5">
							<span className="symbol symbol-20px me-4">
								<img
									className="rounded-1"
									src="assets/media/flags/spain.svg"
									alt=""
								/>
							</span>
							Spanish
						</a>
					</div>
					<div className="menu-item px-3">
						<a href="account/settings.html" className="menu-link d-flex px-5">
							<span className="symbol symbol-20px me-4">
								<img
									className="rounded-1"
									src="assets/media/flags/germany.svg"
									alt=""
								/>
							</span>
							German
						</a>
					</div>
					<div className="menu-item px-3">
						<a href="account/settings.html" className="menu-link d-flex px-5">
							<span className="symbol symbol-20px me-4">
								<img
									className="rounded-1"
									src="assets/media/flags/japan.svg"
									alt=""
								/>
							</span>
							Japanese
						</a>
					</div>
					<div className="menu-item px-3">
						<a href="account/settings.html" className="menu-link d-flex px-5">
							<span className="symbol symbol-20px me-4">
								<img
									className="rounded-1"
									src="assets/media/flags/france.svg"
									alt=""
								/>
							</span>
							French
						</a>
					</div>
				</div>
			</div>
			<div className="menu-item px-5 my-1">
				<a href="account/settings.html" className="menu-link px-5">
					Account Settings
				</a>
			</div>
			<div className="menu-item px-5">
				<a
					href="authentication/layouts/corporate/sign-in.html"
					className="menu-link px-5"
				>
					Sign Out
				</a>
			</div>
		</div>
	);
};

export default MiniProfileMenu;
