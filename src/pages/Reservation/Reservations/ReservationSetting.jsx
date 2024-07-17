import { useState } from "react";
import Toolbar from "../../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../../components/OrderList/OrderList.module.css";
import Flatpickr from "react-flatpickr";
import CookingTimeInput from './../../../components/Reservation/Modal/CookingTimeReserve';

const ReservationSetting = () => {
  const [dates, setDates] = useState([]);
  const handleDateChange = (selectedDates) => {
    setDates(selectedDates);
  };

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <Toolbar
            MainPage="Make A Reservation"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Reservation"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush py-0 flex-row-fluid w-400pxx">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                  <div className="card-title d-flex flex-column w-full-title">
                    <h2>Book a Table</h2>
                  </div>
                </div>
                <div className="card-body pt-0">
                    <div className="d-flex  gap-5 flex-column w-full-title">
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Available On</label>
                    <CookingTimeInput/>
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 Flatpickr width-full-invoices">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Closing Time</label>
                    <CookingTimeInput/>
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 width-full-invoices">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Max Reserve Person</label>
                    <input
        type="text"
        placeholder="Max Reserve Person"
        className="form-control form-control-solid border-0 ps-4"
        style={{borderRadius:'.75rem'}}
      />
                  </div>
                    </div>
                  <div className="d-flex justify-content-end mt-8 gap-5">
                  <button className="btn btn-outline">Reset</button>
                  <button className="btn btn-primary">Save</button>
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

export default ReservationSetting;
