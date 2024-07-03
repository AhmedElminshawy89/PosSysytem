import React, { useEffect } from "react";
import styles from "./PlaceOrderInvoice.module.css";
import { useLocation } from "react-router-dom";

const PlaceOrderInvoice = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/ordermanage/order/placeorder/posorderinvoice/19") {
      window.print();
    }
  }, [location.pathname]);
  const invoiceData = {
    OrderNum: "Token NO:09",
    Name: "AL Fardous",
    items: [
      {
        name: "White Basmati Rice - أرز بسمتي سادة",
        quantity: 1,
        price: 70.0,
        total: 70.0,
        size: "1 Person", // Added size field for each item
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
    orderNo: 28, // Changed orderNo to 28 to match the example
    thankYouMessage: "Thank you very much",
    website: "www.elnomadics.com",
  };

  return (
    <div className={styles.invoiceContainer}>
        {/* <p className='text-start'>7/3/24, 8:35 AM</p> */}
      <div className={styles.header}>
        <h6 className={styles.restaurantName}>{invoiceData.OrderNum}</h6>
        <p className={styles.address}>{invoiceData.Name}</p>
      </div>
      <div className={styles.headerItems}>
        <div className="d-flex align-items-center gap-8">
          <h4>Q</h4>
          <h4>Item</h4>
        </div>
        <h4>Size</h4>
      </div>
      {invoiceData.items.map((item, index) => (
        <div key={index} className="d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center gap-8">
            <p>{item.quantity}</p>
            <p className={styles.date}>{item.name}</p>
          </div>
          <p className={styles.date}>{item.size}</p>
        </div>
      ))}
      {/* <div className={styles.divider}></div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <p className={styles.mathPrice}>Subtotal</p>
        </div>
        <p className={styles.mathPrice}>LE {invoiceData.subtotal.toFixed(2)}</p>
      </div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <p className={styles.mathPrice}>VAT (14.00%)</p>
        </div>
        <p className={styles.mathPrice}>LE {invoiceData.vat.toFixed(2)}</p>
      </div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <p className={styles.mathPrice}>Delivery Charges</p>
        </div>
        <p className={styles.mathPrice}>LE {invoiceData.deliveryCharges.toFixed(2)}</p>
      </div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <p className={styles.mathPrice}>Discount</p>
        </div>
        <p className={styles.mathPrice}>LE {invoiceData.discount.toFixed(2)}</p>
      </div>
      <div className={styles.divider}></div>
      <div className={`${styles.totals} ${styles.bgGray}`}>
        <p className={`${styles.grandTotal} ${styles.mi5}`}>Grand Total</p>
        <p className={`${styles.grandTotal} ${styles.mi5}`}>LE {invoiceData.grandTotal.toFixed(2)}</p>
      </div>
      <div className={styles.totals}>
        <p className={`${styles.mi5} ${styles.date}`}>Total Due</p>
        <p className={`${styles.mi5} ${styles.date}`}>LE {invoiceData.totalDue.toFixed(2)}</p>
      </div>
      <div className={styles.totals}>
        <p className={`${styles.mi5} ${styles.date}`}>Change Due</p>
        <p className={`${styles.mi5} ${styles.date}`}>LE {invoiceData.changeDue.toFixed(2)}</p>
      </div>
      <div className={styles.totals}>
        <p className={`${styles.mi5} ${styles.date}`}>Total Payment</p>
        <p className={`${styles.mi5} ${styles.date}`}>LE {invoiceData.totalPayment.toFixed(2)}</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footer}>
        <h5 className={styles.date}>Billing To: {invoiceData.billingTo}</h5>
        <h5 className={styles.date}>Bill By: {invoiceData.billBy}</h5>
      </div> */}
      <div className="d-flex align-items-center justify-content-center mt-5">
        {/* <div className={styles.itemInfoGapRight}>
          <h5 className={styles.date}></h5>
        </div> */}
        <div className={styles.itemInfoGapRight}>
          <h5 className={styles.date}>Order No.: {invoiceData.orderNo}</h5>
        </div>
      </div>
      {/* <h3 className={styles.footerThankYou}>{invoiceData.thankYouMessage}</h3>
      <div className={styles.line}></div>
      <div className={styles.footerWebsite}>{invoiceData.website}</div> */}
    </div>
  );
};

export default PlaceOrderInvoice;
