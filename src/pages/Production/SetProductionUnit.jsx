import { useState } from "react";
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const SetProductionUnit = () => {
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
      quantity: 0,
      price: "0.00",
    },
  ]);
  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        waiter: "",
        quantity: 0,
        price: "0.00",
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
            MainPage="Set Production Unit"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Production"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush">
                <div className="card-body pt-6">
                  <div className="d-flex align-items-md-center gap-5 flex-md-row flex-column">
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
                          { label: "Butter Chicken - طبق مورج مكني دجاج", value: "Butter Chicken - طبق مورج مكني دجاج" },
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
                  <div className="table-responsive mt-4">
                    <table
                      className="table align-middle table-row-dashed fs-6 gy-5"
                      id="kt_ecommerce_sales_table"
                    >
                      <thead>
                        <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                          <th className="text-nowrap min-w-150px cursor-pointer text-hover-primary">
                            Item Information
                          </th>
                          <th className="text-nowrap min-w-150px cursor-pointer text-hover-primary">
                            Quantity
                          </th>
                          <th className="text-nowrap text-start pe-0 min-w-150px cursor-pointer text-hover-primary">
                            Price
                          </th>
                          <th className="text-nowrap text-start pe-0 min-w-50px cursor-pointer text-hover-primary"></th>
                        </tr>
                      </thead>
                      <tbody>
                      {rows.map((row, index) => (
                        <tr key={index}>
                          <td>
                            <Select
                              id={`waiter-${index}`}
                              name="waiter"
                              options={[
                                { label: "John", value: "John" },
                                { label: "Marco", value: "Marco" },
                              ]}
                              isSearchable={true}
                              placeholder={`Select...`}
                              className={`select-form-order-pos`}
                              styles={customStylesSelect}
                            />
                          </td>
                          <td>
                            <div
                              className="position-relative"
                            >
                              <button
                                type="button"
                                className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                                data-kt-dialer-control="decrease"
                                onClick={() =>
                                    handleRowChange(index, "decrease")
                                  }
                              >
                                <i className="ki-outline ki-minus-circle fs-1"></i>
                              </button>
                              <input
                                type="text"
                                className="form-control form-control-solid border-0 ps-12"
                                placeholder="Amount"
                                readOnly
                                value={row.quantity}
                              />
                              <button
                                type="button"
                                className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                                data-kt-dialer-control="increase"
                                onClick={() =>
                                    handleRowChange(index, "increase")
                                  }
                              >
                                <i className="ki-outline ki-plus-circle fs-1"></i>
                              </button>
                            </div>
                          </td>
                          <td>
                            <input
                              readOnly
                              type="text"
                              className="form-control form-control-solid border-0 ps-4"
                              data-kt-dialer-control="input"
                              placeholder="Price"
                              name="manageBudget"
                              value={row.total}
                            />
                          </td>
                          <td>
                            <button
                              className="btn btn-icon btn-bg-light btn-active-color-danger"
                              onClick={() =>handleDeleteRow(index)}
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                                              <tr>
                            <td colSpan={2} className="text-start">
                                <button className="btn btn-light-primary" onClick={handleAddRow}>Add More Item</button>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                      </tbody>
                    </table>
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

export default SetProductionUnit;
