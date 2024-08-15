import { useState } from "react";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import Flatpickr from "react-flatpickr";
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import  Select  from 'react-select';
const customStylesSelect = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f9f9f9",
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
      color: "#fff",
      borderRadius: ".75rem",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#eee" : "white",
      color: state.isFocused ? "#007bffcc" : "#000",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };
const BankTransaction = () => {
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
            MainPage="Bank List"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Bank Transaction"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush py-0 flex-row-fluid">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                  <div className="card-title d-flex flex-column w-full-title">
                    <h2>Bank Transaction</h2>
                  </div>
                </div>
                <div className="card-body pt-0">
                    <div className="d-flex  gap-5 flex-md-column w-full-title">
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Date 
                    <span className="required-field-form-order">*</span>
                    </label>
                    <div className="d-flex align-items-center position-relative my-1 Flatpickr-bank width-full-invoices" style={{flex:1}}>
                          <Flatpickr
                            className="form-control width-full-invoices"
                            options={{
                              mode: "range",
                              dateFormat: "Y-m-d",
                              onChange: handleDateChange,
                            }}
                            value={dates}
                            placeholder="Pick date range"
                          />
                        </div>
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 Flatpickr width-full-invoices">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 width-full-invoices w-100">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Account Type
                    <span className="required-field-form-order">*</span>
                    </label>
                    <Select
                id="thirdPartyOrderID"
                name="thirdPartyOrderID"
                options={[{value: "1", label: "Credit"}
                    ,{value: "2", label: "Debit"}
                ]}
                isSearchable={true}
                placeholder={`Select...`}
                className="select-form-order-pos"
                styles={customStylesSelect}
              />
                  </div>
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 Flatpickr width-full-invoices">
                                        <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 width-full-invoices w-100">
                                        <label htmlFor="" className="mb-2 fs-3 text-black">Bank Name
                                        <span className="required-field-form-order">*</span>
                                        </label>
                                        <Select
                                    id="thirdPartyOrderID"
                                    name="thirdPartyOrderID"
                                    options={[{value: "1", label: "City Bank"}
                                        ,{value: "2", label: "Brak Bank"}
                                    ]}
                                    isSearchable={true}
                                    placeholder={`Select...`}
                                    className="select-form-order-pos"
                                    styles={customStylesSelect}
                                />
                                    </div>
                                    </div>
                                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 Flatpickr width-full-invoices">
                                        <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 width-full-invoices w-100">
                                        <label htmlFor="" className="mb-2 fs-3 text-black">Account Type
                                        <span className="required-field-form-order">*</span>
                                        </label>
                                        <Select
                                    id="thirdPartyOrderID"
                                    name="thirdPartyOrderID"
                                    options={[{value: "1", label: "Credit"}
                                        ,{value: "2", label: "Debit"}
                                    ]}
                                    isSearchable={true}
                                    placeholder={`Select...`}
                                    className="select-form-order-pos"
                                    styles={customStylesSelect}
                                />
                                    </div>
                                    </div>
                    </div>
<div  className="d-flex gap-5 flex-md-row flex-column">
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 Flatpickr width-full-invoices">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 width-full-invoices w-100">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Withdraw / Deposit ID
                    <span className="required-field-form-order">*</span>
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Withdraw / Deposit ID`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 Flatpickr width-full-invoices">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 width-full-invoices w-100">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Amount
                    <span className="required-field-form-order">*</span>
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Amount`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  </div>
</div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 Flatpickr width-full-invoices">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 width-full-invoices w-100">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Description
                    <span className="required-field-form-order">*</span>
                    </label>
                    <textarea
                        id="waiter"
                        name="waiter"
                        placeholder={`Description`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
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

export default BankTransaction;
