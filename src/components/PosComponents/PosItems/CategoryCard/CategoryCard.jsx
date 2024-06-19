import React from "react";

const CategoryCard = ({
	img,
	title,
	numOfOptions,
	setSelectedCard,
	selectedCard,
}) => {
	return (
		<li
			className="nav-item mb-3 me-0"
			onClick={() => {
				setSelectedCard(title);
			}}
		>
			<a
				className={`nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg ${
					selectedCard === title ? "show active" : ""
				}`}
				data-bs-toggle="pill"
				href="#kt_pos_food_content_1"
				style={{ width: "138px", height: "180px" }}
			>
				<div className="nav-icon mb-3">
					<img src={img} className="w-50px" alt="" />
				</div>
				<div className="">
					<span className="text-gray-800 fw-bold fs-2 d-block">{title}</span>
					<span className="text-gray-500 fw-semibold fs-7">
						{numOfOptions} Options
					</span>
				</div>
			</a>
		</li>
	);
};

export default CategoryCard;
