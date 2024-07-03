import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./InvoicePendingOrder.module.css";

const InvoicePendingOrder = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/ordermanage/order/posorderinvoice/19") {
      window.print();
    }
  }, [location.pathname]);

  const invoiceData = {
    restaurantName: "Demo Restaurant",
    slogan: "Your Slogan",
    address: {
      country: "Egypt",
      state: "",
      city: "",
      street: "",
      building: "",
      apartmentNo: "",
      mobile: "+717708224",
    },
    date: "Jun 29, 2024",
    items: [
      {
        name: "White Basmati Rice - أرز بسمتي سادة",
        quantity: 1,
        price: 70.0,
        total: 70.0,
      },
    ],
    subtotal: 70.0,
    vat: 9.8,
    deliveryCharges: 3.99,
    discount: 0.0,
    grandTotal: 83.79,
    totalDue: 83.79,
    changeDue: 0.0,
    totalPayment: 83.79,
    billingTo: "Diana Martin",
    billBy: "Super Admin",
    table: "",
    orderNo: 19,
    thankYouMessage: "Thank you very much",
    website: "www.elnomadics.com",
  };

  return (
    <div className={styles.invoiceContainer}>
      <div className={styles.header}>
        <h1 className={styles.restaurantName}>
          {invoiceData.restaurantName} - {invoiceData.slogan}
        </h1>
        <p className={styles.address}>{invoiceData.address.country}</p>
      </div>
      <div className={styles.addressContainer}>
        <p className={styles.address}>Country: {invoiceData.address.state}</p>
        <p className={styles.address}>State: {invoiceData.address.state}</p>
        <p className={styles.address}>City: {invoiceData.address.city}</p>
        <p className={styles.address}>Street: {invoiceData.address.street}</p>
        <p className={styles.address}>
          Building: {invoiceData.address.building}
        </p>
        <p className={styles.address}>
          Apartment no: {invoiceData.address.apartmentNo}
        </p>
        <p className={styles.address}>Mobile: {invoiceData.address.mobile}</p>
        <h4 className={styles.date}>Date: {invoiceData.date}</h4>
      </div>
      <div className={styles.divider}></div>
      {/* <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th>Item</th>
            <th></th>
            <th></th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity} Person</td>
              <td>LE {item.price.toFixed(2)}</td>
              <td>LE {item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div className={styles.headerItems}>
        <h4>Item</h4>
        <h4>Total</h4>
      </div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <h5 className={styles.date}> White Basmati Rice - أرز بسمتي سادة</h5>
          <p className={styles.itemsDetails}> 1 Person</p>
          <p className={styles.itemsDetails}> 70.000 x 1</p>
        </div>
        <h5 className={styles.date}>LE 70</h5>
      </div>
      <div className={styles.divider}></div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <p className={styles.mathPrice}>Subtotal</p>
        </div>
        <p className={styles.mathPrice}>LE 70</p>{" "}
      </div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <p className={styles.mathPrice}>Vat(14.00%)</p>
        </div>
        <p className={styles.mathPrice}>LE 9.8</p>{" "}
      </div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <p className={styles.mathPrice}>Delivery Charges</p>
        </div>
        <p className={styles.mathPrice}>LE3.99</p>{" "}
      </div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <p className={styles.mathPrice}>Discount</p>
        </div>
        <p className={styles.mathPrice}>LE 0</p>{" "}
      </div>
      <div className={styles.divider}></div>
      <div className={`${styles.totals} ${styles.bgGray}`}>
        <p className={`${styles.grandTotal} ${styles.mi5}`}>Grand Total</p>
        <p className={`${styles.grandTotal} ${styles.mi5}`}>
          LE {invoiceData.grandTotal.toFixed(2)}
        </p>
      </div>
      <div className={styles.totals}>
        <p className={`$ ${styles.mi5} ${styles.date}`}>Total Due</p>
        <p className={`$ ${styles.mi5} ${styles.date}`}>LE {invoiceData.totalDue.toFixed(2)}</p>
      </div>
      <div className={styles.totals}>
        <p className={`$ ${styles.mi5} ${styles.date}`}>Change Due</p>
        <p className={`$ ${styles.mi5} ${styles.date}`}>LE {invoiceData.changeDue.toFixed(2)}</p>
      </div>
      <div className={styles.totals}>
        <p className={`$ ${styles.mi5} ${styles.date}`}>Total payment</p>
        <p className={`$ ${styles.mi5} ${styles.date}`}>LE {invoiceData.totalPayment.toFixed(2)}</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footer}>
      <h5 className={styles.date}>Billing To: {invoiceData.billingTo}</h5>
      <h5 className={styles.date}>Bill By: {invoiceData.billBy}</h5>
        {/* <p className={styles.footerItem}>Billing To: {invoiceData.billingTo}</p> */}
        {/* <p className={styles.footerItem}>Bill By: {invoiceData.billBy}</p> */}
      </div>
      <div className={`d-flex align-items-center justify-content-center mt-5`}>
      <div className={styles.itemInfoGapRight}>
            <h5 className={styles.date}>Table: </h5>
        </div>
        <div>
            <h5 className={styles.date}>Order No.: {invoiceData.orderNo}</h5>
        </div>
        {/* <p>Order No.: {invoiceData.orderNo}</p> */}
        {/* <p>Table: {invoiceData.table}</p> */}
      </div>
      <h3 className={styles.footerThankYou}>{invoiceData.thankYouMessage}</h3>
      <div className={styles.line}></div>
      <div className={styles.footerWebsite}>{invoiceData.website}</div>
    </div>
  );
};

export default InvoicePendingOrder;
