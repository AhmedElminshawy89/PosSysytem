import { useState } from "react";
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const AddProduction = () => {
  const [dates, setDates] = useState([]);
  const [dates2, setDates2] = useState([]);
  const [supplierName, setSupplierName] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const handleDateChange = (selectedDates) => {
    setDates(selectedDates);
  };
  const handleDateChange2 = (selectedDates) => {
    setDates2(selectedDates);
  };
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
  const [rows, setRows] = useState([
    {
      waiter: "",
      stockQuantity: "0.00",
      quantity: 0,
      rate: 0.00,
      total: "0.00",
    },
  ]);
  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        waiter: "",
        stockQuantity: "0.00",
        quantity: 0,
        rate: 0.00,
        total: "0.00",
      },
    ]);
  };
  const handleDeleteRow = (index) => {
    if (rows.length <= 1) {
      toast.error("Cannot delete the last row.");
      return;
    }
    setRows(rows.filter((_, i) => i !== index));
  };
  const handleSubmit = () => {
    if (!supplierName || !invoiceNo || !dates.length || !dates2.length) {
      toast.error("Please fill in all required fields.");
      return;
    }
    // Your submit logic here
    // Example:
    console.log("Form submitted successfully!");
  };


  const handleRowChange = (index, action, value) => {
    const updatedRows = rows.map((row, rowIndex) => {
      if (index === rowIndex) {
        let quantity = parseFloat(row.quantity);
        let rate = parseFloat(value); // تحديث قيمة الـ rate
        if (action === "increase") {
          quantity += 1;
        } else if (action === "decrease") {
          if (quantity > 0) {
            quantity -= 1;
          }
        }
  
        const total = (quantity * rate).toFixed(2);
  
        return {
          ...row,
          quantity: quantity.toFixed(2),
          rate: rate.toFixed(2), // تحديث قيمة الـ rate هنا
          total: total,
        };
      }
      return row;
    });
  
    setRows(updatedRows);
  };
  
  


  const calculateGrandTotal = () => {
    let grandTotal = 0;
    rows.forEach((row) => {
      grandTotal += parseFloat(row.total);
    });
    return grandTotal.toFixed(2);
  };

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <Toolbar
            MainPage="Add Production"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Production"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush py-0 flex-row-fluid w-400pxx">
              <div className="card-header align-items-center py-2 gap-2 gap-md-5">
                  <div className="card-title d-flex flex-column w-full-title">
                    <h2>Add Production</h2>
                  </div>
                </div>
                <div className="card-body pt-6">
                  <div className="d-flex  gap-2 flex-column mb-2">
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                        Food Name
                        <span className="required-field-form-order">*</span>
                      </label>
                      <Select
                        id="waiter"
                        name="waiter"
                        options={[
                          { label: "Biryani Rice - أرز برياني", value: "Biryani Rice - أرز برياني" },
                          { label: "Biryani Rice - أرز برياني", value: "Biryani Rice - أرز برياني" },
                        ]}
                        isSearchable={true}
                        placeholder={`Select...`}
                        className={`select-form-order-pos`}
                        styles={customStylesSelect}
                        value={supplierName}
                        onChange={(option) => setSupplierName(option)}
                      />
                    </div>
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                        Serving Unit
                        <span className="required-field-form-order">*</span>
                      </label>
                      <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Serving Unit`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                    </div>
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 mt-4 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                        Variant Name 
                        <span className="required-field-form-order">*</span>
                      </label>
                      <Select
                        id="waiter"
                        name="waiter"
                        options={[
                          { label: "1 Person", value: "1 Person" },
                          { label: "2 Person", value: "2 Person" },
                          { label: "3 Person", value: "3 Person" },
                        ]}
                        isSearchable={true}
                        placeholder={`Select...`}
                        className={`select-form-order-pos`}
                        styles={customStylesSelect}
                      />
                    </div>
                  </div>
                  <div className="d-flex  gap-2 flex-column">
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1"
                    >
                      <label htmlFor="waiter" className="form-label">
                      Production Management Date
                        <span className="required-field-form-order">*</span>
                      </label>
                      <Flatpickr
                        className="form-control form-control-solid border-0 ps-4"
                        options={{
                          mode: "single",
                          dateFormat: "Y-m-d",
                          onChange: handleDateChange,
                        }}
                        value={dates}
                        placeholder="Purchase Date"
                      />
                    </div>
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                        Expiry Date
                        <span className="required-field-form-order">*</span>
                      </label>
                      <Flatpickr
                        className="form-control form-control-solid border-0 ps-4"
                        options={{
                          mode: "single",
                          dateFormat: "Y-m-d",
                          onChange: handleDateChange2,
                        }}
                        value={dates2}
                        placeholder=" Expiry Date"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-8">
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
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

export default AddProduction;
