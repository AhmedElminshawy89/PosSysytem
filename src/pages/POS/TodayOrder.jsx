import React, { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { toast } from "react-toastify";

const TodayOrder = () => {
  const initialColumns = [
    { label: "SL", visible: true },
    { label: "Invoice", visible: true },
    { label: "Customer Name", visible: true },
    { label: "Customer Type", visible: true },
    { label: "Waiter", visible: true },
    { label: "Table No", visible: true },
    { label: "Order Date", visible: true },
    { label: "Amount", visible: true },
    { label: "Action", visible: true },
  ];

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState(initialColumns);
  const [ShowList, setShowList] = useState(false);
  const refList = useRef(null);

  const show = () => {
    setShowList(!ShowList);
  };

  useEffect(() => {
    const listener = (event) => {
      if (!refList.current || refList.current.contains(event.target)) {
        return;
      }
      setShowList(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refList]);

  // Function to handle copy
  const handleCopy = () => {
    const textToCopy = "No Data Available";

    navigator.clipboard.writeText(textToCopy).then(() => {
      toast.success("Data copied to clipboard");
    }).catch((error) => {
      console.error('Error copying to clipboard:', error);
      toast.error('Failed to copy data to clipboard. Please try again.');
    });
  };

  // Function to handle CSV export
  const handleCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," + data.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "table.csv");
    document.body.appendChild(link);
    link.click();
  };

  // Function to handle Excel export
  const handleExcel = () => {
    const ws = utils.aoa_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");
    const wbout = write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      "table.xlsx"
    );
  };

  // Function to handle PDF export
  const handlePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text(
      "INSTASME F&B Management Application By Brandmarks::posinvoiceloading",
      14,
      15
    );

    // Table
    doc.autoTable({
      head: columns.filter(col => col.visible).map(col => col.label),
      body: data,
      startY: 25, // Position of the table
      styles: {
        font: "Arial",
        fontSize: 10,
      },
      columnStyles: {
        // Adjust styles for each column if needed
        0: { fontStyle: "bold" },
        8: { halign: "right" }, // Align "Amount" column to the right
      },
    });

    doc.save("table.pdf");
  };

  // Function to handle printing
  const handlePrint = () => {
    const printContent = document.getElementById("table-container").innerHTML;
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write(
      "<html><head><title>Print Table</title><style>body { font-family: Arial, sans-serif; }</style></head><body>"
    );
    printWindow.document.write(
      "<h3>INSTASME F&B Management Application By Brandmarks::posinvoiceloading</h3>"
    );
    printWindow.document.write(printContent);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  // Function to toggle column visibility
  const toggleColumnVisibility = (index) => {
    const updatedColumns = [...columns];
    updatedColumns[index].visible = !updatedColumns[index].visible;
    setColumns(updatedColumns);
  };

  // useEffect(() => {
  //   setData([
  //     [
  //       "1",
  //       "INV001",
  //       "John Doe",
  //       "Regular",
  //       "Waiter1",
  //       "Table1",
  //       "Paid",
  //       "2023-01-01",
  //       "50.00",
  //       "Action",
  //     ],
  //   ]);
  // }, []);

  return (
    <div className="qr-order-container">
      <div className="d-flex justify-content-between flex-md-row flex-column align-items-center gap-4">
        <div className="d-flex align-items-center gap-2 mb-3 flex-md-row flex-column">
          <button className="btn-QrOrder" onClick={handleCopy}>
            Copy
          </button>
          <button className="btn-QrOrder" onClick={handleCSV}>
            CSV
          </button>
          <button className="btn-QrOrder" onClick={handleExcel}>
            Excel
          </button>
          <button className="btn-QrOrder" onClick={handlePDF}>
            PDF
          </button>
          <button className="btn-QrOrder" onClick={handlePrint}>
            Print
          </button>
          <div className="" ref={refList}>
            <button className="btn-QrOrder dropdown-toggle" type="button" onClick={show}>
              Column Visibility
            </button>
            <div className={`${ShowList ? "Column-show-hidden " : "d-none"}`}>
              {columns.map((col, index) => (
                <div key={index} className="dropdown-item">
                  <label className="d-flex gap-1 align-items-baseline">
                    <input type="checkbox" checked={col.visible} onChange={() => toggleColumnVisibility(index)} />
                    {col.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-3 custom-input-order-qr-width">
          <input type="text" name="" id="" placeholder="Search here..." className="custom-input-order-qr" />
        </div>
      </div>
      <div id="table-container">
        <table className="tableQROrder">
          <thead>
            <tr >
              {columns.filter(col => col.visible).map((col, index) => (
                <th className="fs-5" key={index}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="no-data fs-5">
                  No Data Available in Table
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    columns[cellIndex].visible && <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={7} className="text-center fs-5">
                Total:
              </td>
              <td colSpan={2} className="text-center fs-5">
                0.00 (0.00 total)
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="pagination">
        <span className="fs-5">Showing 0 to 0 of 0 entries</span>
        <div>
          <button className="btn-QrOrder">Previous</button>
          <button className="btn-QrOrder">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TodayOrder;
