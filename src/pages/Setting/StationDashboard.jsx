/* eslint-disable react-hooks/rules-of-hooks */
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";

const StationDashboardSetting = () => {

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
        <div className="d-flex justify-content-between align-items-center bg-white flex-sm-row flex-column">
          <Toolbar
            MainPage="Kitchen Setting"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Station Assign"
          />
          <div>
          </div>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush" style={{maxWidth:'450px'}}>
                <div className="card-body pt-6">
                  <div className="d-flex  gap-2 flex-column mb-2">
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                      Station Refresh time In Second   <span className="required-field-form-order">*</span>
                      </label>
                      <input
                className="select-form-order-pos input-form-order"
                type="text"
                id="firstName"
                name="firstName"
                style={{ borderRadius: ".75rem" }}
              />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-8">
                    <button className="btn btn-primary">Submit</button>
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

export default StationDashboardSetting;
