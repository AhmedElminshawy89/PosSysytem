import React, { useEffect, useState } from "react";
import { PosData } from "../../../data/Pos-data/posData";
import CategoryCard from "./CategoryCard/CategoryCard";
import CategoryItemsContainer from "./CategoryItemsContainer/CategoryItemsContainer";
const PosItems = () => {
  const [selectedCard, setSelectedCard] = useState("Lunch");
  const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);

  useEffect(() => {
    const InitialSelectedCategoryItems = PosData.filter(
      (item) => item.cardData.title === selectedCard
    );

    setSelectedCategoryItems(InitialSelectedCategoryItems[0].categoriesInCard);
  }, [selectedCard]);

  return (
    <div className="d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0">
      <div className="card card-flush card-p-0 bg-transparent border-0">
        <div className="card-body">
          <ul className="nav nav-pills d-flex nav-pills-custom gap-3 mb-6">
            {PosData.map((item) => (
              <CategoryCard
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
                img={item.cardData.img}
                numOfOptions={item.cardData.numOfOptions}
                title={item.cardData.title}
                key={
                  item.cardData.img +
                  item.cardData.title +
                  item.cardData.numOfOptions
                }
              />
            ))}
          </ul>
          <div className="tab-content">
            <CategoryItemsContainer
              selectedCategoryItems={selectedCategoryItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosItems;
