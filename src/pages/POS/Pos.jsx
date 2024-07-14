import React, { useState, useEffect } from "react";
import classes from "../../styles/global.module.css";
import PosToolbar from "../../components/PosComponents/PosToolbar";
import PosItems from "../../components/PosComponents/PosItems/PostItems";
import PosOrder from "../../components/PosComponents/PosOrder/PosOrder";
import { useSelector } from "react-redux";
import OnGoingOrder from "./Tabs/OnGoingOrder/OnGoingOrder";
import StationStatus from "./Tabs/StationStatus/StationStatus";
import QROrder from "./Tabs/QROrder/QROrder";
import OnlineOrder from "./Tabs/OnlineOrder";
import TodayOrder from "./TodayOrder";
import AddOpeningBalance from "../../components/PosComponents/PosOrder/Modal/AddOpeningBalance";

const Pos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    // Code to open modal on page reload
    setModalIsOpen(true);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const activeTab = useSelector((state) => state.activeTabPos.activeTab);

  return (
    <>
      <div
        className={`app-main mt-appmain flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
      >
        <div className="d-flex flex-column flex-column-fluid">
          <PosToolbar />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              class="app-container container-fluid"
            >
              <div className="d-flex flex-column flex-xl-row">
                {activeTab === "newOrder" && (
                  <>
                    <PosItems />
                    <PosOrder />
                  </>
                )}
              </div>
              {activeTab === "ongoingOrder" && <OnGoingOrder />}
              {activeTab === "StationStatus" && <StationStatus />}
              {activeTab === "QROrder" && <QROrder />}
              {activeTab === "OnlineOrder" && <OnlineOrder />}
              {activeTab === "TodayOrder" && <TodayOrder />}
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <AddOpeningBalance
          closeModal={() => setModalIsOpen(false)}
          modalIsOpen={modalIsOpen}
        />
      )}
    </>
  );
};

export default Pos;
