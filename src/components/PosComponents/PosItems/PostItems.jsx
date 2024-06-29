import React, { useEffect, useState, useRef } from "react";
import { PosData } from "../../../data/Pos-data/posData";
import CategoryCard from "./CategoryCard/CategoryCard";
import CategoryItemsContainer from "./CategoryItemsContainer/CategoryItemsContainer";
import { useHotkeys } from "react-hotkeys-hook";

const PosItems = () => {
  const [selectedCard, setSelectedCard] = useState("Lunch");
  const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataAvailable, setDataAvailable] = useState(true);

  const searchInputRef = useRef(null); // إنشاء مرجع لحقل البحث

  useEffect(() => {
    const initialSelectedCategoryItems = PosData.filter(
      (item) => item.cardData.title === selectedCard
    );

    setSelectedCategoryItems(initialSelectedCategoryItems[0]?.categoriesInCard || []);
  }, [selectedCard]);

  useEffect(() => {
    if (searchTerm === "") {
      const initialSelectedCategoryItems = PosData.filter(
        (item) => item.cardData.title === selectedCard
      );
      setSelectedCategoryItems(initialSelectedCategoryItems[0]?.categoriesInCard || []);
    } else {
      const filteredItems = PosData.map((item) => {
        if (item.cardData.title === selectedCard) {
          return {
            ...item,
            categoriesInCard: item.categoriesInCard.filter((category) =>
              category.title.toLowerCase().includes(searchTerm.toLowerCase())
            ),
          };
        }
        return item;
      }).filter((item) => item.categoriesInCard.length > 0);

      if (filteredItems.length > 0) {
        setSelectedCategoryItems(filteredItems[0]?.categoriesInCard || []);
        setDataAvailable(true);
      } else {
        setSelectedCategoryItems([]);
        setDataAvailable(false); 
      }
    }
  }, [searchTerm, selectedCard]);

  useHotkeys("shift+s", () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  });

  return (
    <div className="d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0" style={{ flexBasis: '60%' }}>
      <div className="card card-flush card-p-0 bg-transparent border- w-full-pos-item-sys pt-5">
        <div className="card-body">
          <ul className="nav nav-pills d-flex nav-pills-custom gap-3 mb-6 scroll-items-pos form-search-pos-item">
            {PosData.map((item) => (
              <CategoryCard
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
                img={item.cardData.img}
                numOfOptions={item.cardData.numOfOptions}
                title={item.cardData.title}
                key={item.cardData.img + item.cardData.title + item.cardData.numOfOptions}
              />
            ))}
          </ul>
          <form
            data-kt-search-element="form"
            className="d-none d-lg-block w-100 position-relative mb-5 mb-lg-0 form-search-pos-item"
            autoComplete="off"
          >
            <input type="hidden" />
            <i className="ki-outline ki-magnifier search-icon fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-5"></i>
            <input
              type="text"
              className="search-input form-control form-control border h-lg-45px ps-13"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              data-kt-search-element="input"
              ref={searchInputRef} // تعيين المرجع لحقل البحث
            />
            <span
              className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
              data-kt-search-element="spinner"
            >
              <span className="spinner-border h-15px w-15px align-middle text-gray-500"></span>
            </span>
            <span
              className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
              data-kt-search-element="clear"
              onClick={() => setSearchTerm("")}
            >
              <i className="ki-outline ki-cross fs-2 fs-lg-1 me-0"></i>
            </span>
          </form>
          <div className="tab-content mt-6">
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
