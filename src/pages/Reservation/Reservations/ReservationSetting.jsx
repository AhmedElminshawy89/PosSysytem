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
              <div className="card card-flush">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                  <div className="card-title d-flex flex-column w-full-title">
                    {/* <div className="d-flex justify-content-between align-items-center w-full-title flex-md-row flex-column-reverse width-full-invoices">
                      <div className="d-flex align-items-center position-relative my-1 width-full-invoices">
                        <i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
                        <input
                          type="text"
                          data-kt-ecommerce-order-filter="search"
                          className="form-control form-control-solid w-250ppx ps-12 width-full-invoices"
                          placeholder="Search Order"
                        />
                      </div>
                    </div> */}
                    <h1>Book a Table</h1>
                  </div>
                </div>
                <div className="card-body pt-0">
                    <div className="d-flex align-items-md-center gap-5 flex-md-row flex-column">
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="fw-bold fs-3">Available On</label>
                    <CookingTimeInput/>
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 Flatpickr width-full-invoices">
                    <label htmlFor="" className="fw-bold fs-3">Closing Time</label>
                    <CookingTimeInput/>
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 width-full-invoices">
                    <label htmlFor="" className="fw-bold fs-3">Max Reserve Person</label>
                    <input
        type="text"
        placeholder="Max Reserve Person"
        className="select-form-order-pos input-form-order"
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
