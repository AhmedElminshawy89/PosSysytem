import React from "react";
import classes from "../../styles/global.module.css";
import PosToolbar from "../../components/PosComponents/PosToolbar";
import PosItems from "../../components/PosComponents/PosItems/PostItems";
import PosOrder from "../../components/PosComponents/PosOrder/PosOrder";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Pos = () => {
  const activeTab = useSelector((state) => state.activeTabPos.activeTab);

  return (
    <div
      className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pos;
