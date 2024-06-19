import React from "react";
import CategoryItemCard from "../CategoryItemCard/CategoryItemCard";

const CategoryItemsContainer = ({ selectedCategoryItems }) => {
	return (
		<div className="tab-pane fade show active">
			<div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
				{selectedCategoryItems.map((item) => (
					<CategoryItemCard
						img={item.img}
						price={item.price}
						time={item.time}
						title={item.title}
						key={item.time + item.price + item.img + item.title}
					/>
				))}
			</div>
		</div>
	);
};

export default CategoryItemsContainer;
