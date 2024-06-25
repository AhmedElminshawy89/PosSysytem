import React from "react";

const CategoryItemCard = ({ img, title, time, price }) => {
  return (
    <div className="card p-3 max-w-200">
      <div className="card-body text-center">
        <img src={img} className="rounded-3 mb-4 overall-img-pos-card portrait-img" alt="" />
        <div className="mb-2">
          <div className="text-start">
            <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1 two-line-title">
              {title}
            </span>
            {/* <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
              {time} mins to cook
            </span> */}
          </div>
        </div>
        <span className="text-success text-end fw-bold fs-1 d-flex align-items-center justify-content-center gap-2">
          <p style={{ color: 'darkgray' }}>LE</p>
          <p>{price}</p>
        </span>
      </div>
    </div>
  );
};

export default CategoryItemCard;
