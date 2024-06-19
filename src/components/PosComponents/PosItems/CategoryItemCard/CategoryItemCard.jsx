import React from "react";

const CategoryItemCard = ({ img, title, time, price }) => {
	return (
		<div className="card card-flush flex-row-fluid p-6 pb-5 mw-100">
			<div className="card-body text-center">
				<img
					src={img}
					className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
					alt=""
				/>
				<div className="mb-2">
					<div className="text-center">
						<span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
							{title}
						</span>
						<span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
							{time} mins to cook
						</span>
					</div>
				</div>
				<span className="text-success text-end fw-bold fs-1">${price}$</span>
			</div>
		</div>
	);
};

export default CategoryItemCard;
