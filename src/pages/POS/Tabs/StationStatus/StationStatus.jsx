import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./StationStatus.css";

const StationStatus = () => {
  const orders = [
    { orderNumber: "11", token: "05", details: "Beef Stew (Kabab Halla) - كباب حلة" },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="">
      <div className="orders">
        {orders.map((order, index) => (
          <div className="order-card-station-status" key={index}>
            <div className={`station-status-info ${isExpanded ? 'expanded' : ''}`}>
              <div className="header-section">
                <h4 className="text-white fw-bold">Table:</h4>
                <div className="flex-header-section">
                <h4 className="text-white fw-bold">Token: {order.token}</h4>
                <h4 className="text-white fw-bold">Order: #{order.orderNumber}</h4>
                <button onClick={toggleExpand} className="expand-button btn-arrow-show-status">
                  <MdKeyboardArrowDown />
                </button>
                </div>
              </div>
            </div>
              <div className={`details-section ${isExpanded ? 'show' : ''}`}>
                <p className="text-black fs-4 mb-0">{order.details}</p>
                <p className="text-black fs-4 mb-0">1 Preson</p>
                <p className="text-black fs-4 mb-0">Station Not Accept</p>
                <p className="text-black fs-4 ">1X</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationStatus;
