import React from "react";

const Toolbar = ({ title, path }) => {
	return (
		<div id="kt_app_toolbar" className="app-toolbar pt-6 pb-2">
			<div
				id="kt_app_toolbar_container"
				className="app-container container-fluid d-flex align-items-stretch"
			>
				<div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
					<div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
						<h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 m-0">
							{title}
						</h1>
						<ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
							{path.map((item, index) => (
								<>
									<li className="breadcrumb-item text-muted">
										<span className="text-muted text-hover-primary">
											{item}
										</span>
									</li>
									{index !== path.length - 1 && (
										<li className="breadcrumb-item">
											<span className="bullet bg-gray-500 w-5px h-2px"></span>
										</li>
									)}
								</>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Toolbar;
