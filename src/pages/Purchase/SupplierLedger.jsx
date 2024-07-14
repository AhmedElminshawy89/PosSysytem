import { useState } from "react";
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { FaPlus, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaPrint } from "react-icons/fa6";
import CountUp from "react-countup";

const SupplierLedger = () => {
  const [dates, setDates] = useState([]);
  const handleDateChange = (selectedDates) => {
    setDates(selectedDates);
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

  const handlePrint = () => {
    const columns = [
        { label: "INVOICE NO" , visible: true},
        { label: "DESCRIPTION", visible: true },
        { label: "Date" , visible: true},
        { label: "DEPOSIT ID" , visible: true},
        { label: "DEPIT", visible: true },
        { label: "CREDIT", visible: true },
        { label: "BALANCE", visible: true }
      ];
      
    const data = [];
    const tableHead = columns
      .filter((col) => col.visible && col.label !== "Action")
      .map((col) => col.label);

    const tableBody = data.map((row) => {
      return tableHead.map(
        (label) => row[label.toLowerCase().replace(" ", "_")]
      );
    });

    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`
	  <html>
		<head>
		  <style>
			body {
			  font-family: Arial, sans-serif;
			  font-size: 10pt;
			}
			table {
			  width: 100%;
			  border-collapse: collapse;
			  margin-bottom: 20px;
			}
			th, td {
			  border: 1px solid #eee;
			  padding: 8px;
			  text-align: center;
			}
			th {
			  background-color: #007bff;
			  color: white;
			  font-weight: bold;
			}
			td:first-child {
			  font-weight: bold;
			}
			.total-row {
			  font-weight: bold;
			}
		  </style>
		</head>
		<body>
		  <table>
			<thead>
			  <tr>
				${tableHead.map((label) => `<th>${label}</th>`).join("")}
			  </tr>
			</thead>
			<tbody>
			  ${tableBody
          .map(
            (row) => `
				<tr>
				  ${row.map((cell) => `<td>${cell}</td>`).join("")}
				</tr>
			  `
          )
          .join("")}
			  <tr class="total-row">
				<td colspan="${tableHead.length - 1}" style="text-align: center;">Total:</td>
				<td style="text-align: center;">LE 20</td>
			  </tr>
			</tbody>
		  </table>
		</body>
	  </html>
	`);
    printWindow.document.title =
      "INSTASME F&B Management Application By Brandmarks::";
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <Toolbar
            MainPage="Supplier Ledger"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Supplier List"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                  <div className="card-title">
                    <div className="d-flex align-items-center position-relative my-1 Flatpickr width-full-invoices">
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
                      <button
                        className="form-control form-control-solid w-40px fw-bold"
                        style={{ position: "relative", left: "-18px" }}
                        onClick={() => setDates("")}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                    <div className="w-100 mw-250px">
                      <Select
                        id="waiter"
                        name="waiter"
                        options={[
                          { label: "John", value: "John" },
                          { label: "marco", value: "marco" },
                        ]}
                        isSearchable={true}
                        placeholder={`Select Supplier`}
                        className={`select-form-order-pos`}
                        styles={customStylesSelect}
                      />
                    </div>
                    <button className="btn btn-primary">
                      <FaPlus /> Generate
                    </button>
                    <button className="btn btn-light-primary" onClick={handlePrint}>
                      <FaPrint /> Print
                    </button>
                    {/* End Add product */}
                  </div>
                  {/* End Card toolbar */}
                </div>
                <div className="card-body pt-6">
                  <div className="table-responsive mt-4">
                    <table
                      className="table align-middle table-row-dashed fs-6 gy-5"
                      id="kt_ecommerce_sales_table"
                    >
                      <thead>
                        <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                          <th className="text-nowrap min-w-150px cursor-pointer text-hover-primary">
                            Invoice No
                          </th>
                          <th className="text-nowrap min-w-150px cursor-pointer text-hover-primary">
                            Description
                          </th>
                          <th className="text-nowrap  pe-0  text-end min-w-150px cursor-pointer text-hover-primary">
                            Date
                          </th>
                          <th className="text-nowrap text-end pe-0 min-w-150px cursor-pointer text-hover-primary">
                            Deposit ID
                          </th>
                          <th className="text-nowrap text-end pe-0 min-w-150px cursor-pointer text-hover-primary">
                            Debit
                          </th>
                          <th className="text-nowrap text-end pe-0 min-w-150px cursor-pointer text-hover-primary">
                            Credit
                          </th>
                          <th className="text-nowrap text-end pe-0 min-w-150px cursor-pointer text-hover-primary">
                            Balance
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a className="text-gray-800 text-hover-primary fw-bold">
                              54653
                            </a>
                          </td>
                          <td>
                            <a className="text-gray-800 text-hover-primary fw-bold">
                              Purchase From Supplier.
                            </a>
                          </td>
                          <td className="text-end  pe-0">
                            <span className="fw-bold text-gray-600">
                              2024-06-19
                            </span>
                          </td>
                          <td className="text-end  pe-0">
                            <span className="fw-bold text-gray-600">6</span>
                          </td>
                          <td className="text-end pe-0">
                            <span className="fw-bold text-primary">
                              <CountUp
                                end={5030}
                                duration={1}
                                separator=","
                                decimals={2}
                                decimal="."
                              />
                            </span>
                          </td>
                          <td className="text-end pe-0">
                            <span className="fw-bold text-primary">
                              <CountUp
                                end={530}
                                duration={1}
                                separator=","
                                decimals={2}
                                decimal="."
                              />
                            </span>
                          </td>
                          <td className="text-end pe-0">
                            <span className="fw-bold text-primary">
                              <CountUp
                                end={4203}
                                duration={1}
                                separator=","
                                decimals={2}
                                decimal="."
                              />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4} className="text-end pe-0">
                            <a className="text-gray-800 fs-4 text-hover-primary fw-bold">
                              Grand Total:
                            </a>
                          </td>
                          <td className="text-end pe-0">
                            <span className="fw-bold text-primary  fs-4">
                              <CountUp
                                end={4203}
                                duration={1}
                                separator=","
                                decimals={2}
                                decimal="."
                              />
                            </span>
                          </td>
                          <td className="text-end pe-0">
                            <span className="fw-bold text-primary  fs-4">
                              <CountUp
                                end={4203}
                                duration={1}
                                separator=","
                                decimals={2}
                                decimal="."
                              />
                            </span>
                          </td>
                          <td className="text-end pe-0">
                            <span className="fw-bold text-primary  fs-4">
                              <CountUp
                                end={4203}
                                duration={1}
                                separator=","
                                decimals={2}
                                decimal="."
                              />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default SupplierLedger;
