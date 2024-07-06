import Toolbar from "../Global/ToolBar/Toolbar";
import classesOrderList from "../OrderList/OrderList.module.css";
import { useState } from 'react';
import img from '../../data/Img/no-result.png'
const StationDashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <Toolbar
            MainPage="Station Dashboard"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Station Dashboard"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="col-xl-12 mt-0">
                <div className="card card-flush">
                  <div
                    className="card-body pt-8"
                    style={{ overflowX: "auto" }}
                  >
                    <div className="d-flex align-items-center justify-content-start gap-2 gap-lg-3 flex-wrap">
                      <p
                        className={`text-nowrap ${
                          activeTab === 1
                            ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                            : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                        }`}
                        onClick={() => handleTabClick(1)}
                      >
                        BBQ
                      </p>
                      <p
                        className={`text-nowrap ${
                          activeTab === 2
                            ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                            : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                        }`}
                        onClick={() => handleTabClick(2)}
                      >
                        Central Kitchen
                      </p>
                      <p
                        className={`text-nowrap ${
                          activeTab === 3
                            ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                            : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                        }`}
                        onClick={() => handleTabClick(3)}
                      >
                        Pizza
                      </p>
                      <p
                        className={`position-relative text-nowrap ${
                          activeTab === 4
                            ? "btn btn-flex btn-primary h-40px fs-7 fw-bold"
                            : "btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                        }`}
                        onClick={() => handleTabClick(4)}
                      >
                        Sandwiches
                      </p>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-2 gap-lg-3 flex-wrap pt-20 pb-20">
                        <p className="fw-semibold fs-1">No Order Found!!</p>
                        <img src={img} className="w-full-mobile" loading="lazy" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StationDashboard;
