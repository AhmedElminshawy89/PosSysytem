import { useState } from "react";
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const SupplierPayment = () => {
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
            MainPage="Supplier Payment"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Accounts"
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
                      Voucher No
                      </label>
                      <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Voucher No`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                    </div>
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 mt-4 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                        Payment Type
                      </label>
                      <Select
                        id="waiter"
                        name="waiter"
                        options={[
                          { label: "Cash Payment", value: "Cash Payment" },
                          { label: "Bank Payment", value: "Bank Payment" },
                          { label: "Due Payment", value: "Due Payment" },
                        ]}
                        isSearchable={true}
                        placeholder={`Select...`}
                        className={`select-form-order-pos`}
                        styles={customStylesSelect}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-md-center gap-5 flex-md-row flex-column">
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1"
                    >
                      <label htmlFor="waiter" className="form-label">
                         Date
                      </label>
                      <Flatpickr
                        className="form-control form-control-solid border-0 ps-4"
                        options={{
                          mode: "single",
                          dateFormat: "Y-m-d",
                          onChange: handleDateChange,
                        }}
                        value={dates}
                        placeholder="Date"
                      />
                    </div>
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                        Remark
                      </label>
                      <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Remark`}
                        className="form-control form-control-solid border-0 ps-6"
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
                          Supplier Name	
                          </th>
                          <th className="text-nowrap min-w-150px cursor-pointer text-hover-primary">
                          Code	
                          </th>
                          <th className="text-nowrap min-w-150px cursor-pointer text-hover-primary">
                          Amount
                          </th>
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
                                { label: "Gizawy Meat", value: "Gizawy Meat" },
                                { label: "Gas Authority", value: "Gas Authority" },
                              ]}
                              isSearchable={true}
                              placeholder={`Select...`}
                              className={`select-form-order-pos`}
                              styles={customStylesSelect}
                            />
                          </td>
                          <td>
                            <input
                              readOnly
                              type="text"
                              className="form-control form-control-solid border-0 ps-4"
                              data-kt-dialer-control="input"
                              placeholder="Amount"
                              name="manageBudget"
                              value={row.stockQuantity}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-solid border-0 ps-4"
                              placeholder="Amount"
                              name="manageBudget"
                              value={row.rate}
                              onChange={(e) => handleRowChange(index, "rate", e.target.value)}
                            />
                          </td>
                        </tr>
                      ))}
                        <tr>
                            <td colSpan={2} className="text-end">
                                <span className="fs-2 fw-bold">Total:</span>
                            </td>
                            <td>                            <input
                              type="text"
                              className="form-control form-control-solid border-0 ps-4"
                              data-kt-dialer-control="input"
                              placeholder="Total"
                              name="manageBudget"
                            /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-end mt-8">
                    <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
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

export default SupplierPayment;
