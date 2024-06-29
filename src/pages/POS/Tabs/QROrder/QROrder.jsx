import React, { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { toast } from "react-toastify";
import {  FaTrash, FaEdit, FaPrint, FaEye } from 'react-icons/fa'; // Import icons from react-icons library
import "./QROrder.css";
import { TbExclamationMark } from "react-icons/tb";
import Swal from "sweetalert2";
import CancelOrder from "../OnGoingOrder/CancelOrder";
import DetailsInvoice from "./DetailsInvoice";


const QROrder = () => {
  const initialColumns = [
    { label: "SL", visible: true },
    { label: "Invoice", visible: true },
    { label: "Customer Name", visible: true },
    { label: "Customer Type", visible: true },
    { label: "Waiter", visible: true },
    { label: "Table No", visible: true },
    { label: "Payment Status", visible: true },
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

  useEffect(() => {
    setData([
      [
        "1",
        "INV001",
        "John Doe",
        "Regular",
        "Waiter1",
        "Table1",
        "Paid",
        "2023-01-01",
        "50.00",
        "Action",
      ],
      [
        "2",
        "INV002",
        "Jane Smith",
        "VIP",
        "Waiter2",
        "Table2",
        "Unpaid",
        "2023-01-02",
        "75.00",
        "Action",
      ],
      [
        "3",
        "INV003",
        "Alice Johnson",
        "Regular",
        "Waiter3",
        "Table3",
        "Paid",
        "2023-01-03",
        "100.00",
        "Action",
      ],
    ]);
  }, []);

  const handleCopy = () => {
    if (data.length === 0) {
      toast.error('No Data Available to copy');
      return;
    }
    const headers = columns.filter(col => col.visible).map(col => col.label);
    const rows = data.map(row => row.filter((_, cellIndex) => columns[cellIndex].visible));

    const textToCopy = [headers.join(',')].concat(rows.map(row => row.join(','))).join('\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
      toast.success("Data copied to clipboard");
    }).catch((error) => {
      console.error('Error copying to clipboard:', error);
      toast.error('Failed to copy data to clipboard. Please try again.');
    });
  };

  const handleCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," + data.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "QROrder.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleExcel = () => {
    const ws = utils.aoa_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");
    const wbout = write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      "QROrder.xlsx"
    );
  };

  const handlePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text(
      "INSTASME F&B Management Application By Brandmarks::posinvoiceloading",
      14,
      15
    );

    // Prepare table data
    const tableHead = columns.filter(col => col.visible && col.label !== "Action").map(col => col.label);
    const tableBody = data.map(row => row.filter((cell, cellIndex) => columns[cellIndex].visible && columns[cellIndex].label !== "Action"));

    // Table
    doc.autoTable({
      head: [tableHead],
      body: tableBody,
      startY: 25,
      styles: {
        font: "Arial",
        fontSize: 10,
        halign: 'center',
        valign: 'middle',
        lineColor: [44, 62, 80],
        lineWidth: 0.5,
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: [255, 255, 255],
      },
      columnStyles: {
        0: { fontStyle: "bold" },
        8: { halign: "right" },
      },
    });

    doc.autoTable({
      body: [
        [
          { content: 'Total:', colSpan: 8, styles: { halign: 'center' } },
          { content: calculateTotal(), styles: { halign: 'center' } }
        ]
      ],
      startY: doc.autoTable.previous.finalY + 10,
      styles: {
        font: "Arial",
        fontSize: 10,
        halign: 'center',
        valign: 'middle',
        lineColor: [44, 62, 80],
        lineWidth: 0.5,
      },
    });

    doc.save("QROrder.pdf");
  };

  const handlePrint = () => {
    const printWindow = window.open("", "", "height=600,width=800");

    printWindow.document.write("<html><head><title>Print Table</title><style>body { font-family: Arial, sans-serif; }</style></head><body>");
    printWindow.document.write("<h3>INSTASME F&B Management Application By Brandmarks::posinvoiceloading</h3>");

    // Prepare table data
    const tableHead = columns.filter(col => col.visible && col.label !== "Action").map(col => col.label);
    const tableBody = data.map(row => row.filter((cell, cellIndex) => columns[cellIndex].visible && columns[cellIndex].label !== "Action"));

    // Table
    printWindow.document.write("<table border='1' style='border-collapse: collapse; width: 100%;'>");
    printWindow.document.write("<thead><tr>");
    tableHead.forEach(head => {
      printWindow.document.write(`<th>${head}</th>`);
    });
    printWindow.document.write("</tr></thead>");
    printWindow.document.write("<tbody>");
    tableBody.forEach(row => {
      printWindow.document.write("<tr>");
      row.forEach(cell => {
        printWindow.document.write(`<td>${cell}</td>`);
      });
      printWindow.document.write("</tr>");
    });
    printWindow.document.write("</tbody>");

    printWindow.document.write("<tfoot><tr>");
    printWindow.document.write(`<td colspan="8" style="text-align: center;">Total:</td>`);
    printWindow.document.write(`<td style="text-align: center;">${calculateTotal()}</td>`);
    printWindow.document.write("</tr></tfoot>");
    printWindow.document.write("</table>");

    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  const toggleColumnVisibility = (index) => {
    const updatedColumns = [...columns];
    updatedColumns[index].visible = !updatedColumns[index].visible;
    setColumns(updatedColumns);
  };

  const calculateTotal = () => {
    return data.reduce((total, row) => total + parseFloat(row[8]), 0).toFixed(2);
  };
const handleAccept_Reject =()=>{

  Swal.fire({
    icon: 'success',
    title: 'Order Confirmation',
    text: 'Are you going to Accept or Reject this Order?',
    showDenyButton: true,
    showCancelButton: false,
    denyButtonText: 'Reject',
    confirmButtonText: 'Accept',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Accepted', '', 'success');
    } else if (result.isDenied) {
      setModalCancelIsOpen(true);
    }
  });
}
  const renderActionIcons = () => (
    <div className="action-icons">
      <div className="action-icon accept" onClick={handleAccept_Reject}>
      <TbExclamationMark title="Accept or Cancel"  />
      </div>
      <div className="action-icon delete-qr">
      <FaTrash title="Cancel"   onClick={()=>      setModalCancelIsOpen(true)}/>
      </div>
      <div  className="action-icon edit">
      <FaEdit title="Update" />
      </div>
      <div className="action-icon print"  onClick={()=>setModalInvoiceIsOpen(true)}>
      <FaPrint title="Pos Invoice" />
      </div>
      <div className="action-icon view" onClick={()=>setModalInvoiceIsOpen(true)}>
      <FaEye title="Details"  />
      </div>
    </div>
  );
  const [modalCancelIsOpen, setModalCancelIsOpen] = useState(false);
  const [modalInvoiceIsOpen, setModalInvoiceIsOpen] = useState(false);

  const closeModalCancel = () => {
    setModalCancelIsOpen(false);
  };
  const closeModalInvoice = () => {
    setModalInvoiceIsOpen(false);
  };
  return (
    <>
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
            <tr>
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
                <tr key={index} className="fs-5">
                  {row.map((cell, cellIndex) => (
                    columns[cellIndex].visible && <td key={cellIndex}>{ cellIndex === 9 ? renderActionIcons() : cell}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={8} className="text-center fs-5">
                Total:
              </td>
              <td colSpan={2} className="text-center fs-5">
                {calculateTotal()} ({calculateTotal()} total)
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="pagination">
        <span className="fs-5">Showing {data.length} entries</span>
        <div>
          <button className="btn-QrOrder">Previous</button>
          <button className="btn-QrOrder">Next</button>
        </div>
      </div>
    </div>
    <CancelOrder
        modalIsOpen={modalCancelIsOpen}
        closeModal={closeModalCancel}
      /> 
          <DetailsInvoice
        modalIsOpen={modalInvoiceIsOpen}
        closeModal={closeModalInvoice}
      />    </>
  );
};

export default QROrder;
