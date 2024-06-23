import React from "react";
import CategoryItemCard from "../CategoryItemCard/CategoryItemCard";

const CategoryItemsContainer = ({ selectedCategoryItems, dataAvailable }) => {
  return (
    <div className="category-items-container">
      <div className="category-items-grid">
        {selectedCategoryItems.length > 0 ? (
          selectedCategoryItems.map((item) => (
            <CategoryItemCard
              img={item.img}
              price={item.price}
              time={item.time}
              title={item.title}
              key={item.time + item.price + item.img + item.title}
            />
          ))
        ) : (
          <p className="text-center text-muted">
            {dataAvailable
              ? "No categories found."
              : "Data not available in English."}
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryItemsContainer;
