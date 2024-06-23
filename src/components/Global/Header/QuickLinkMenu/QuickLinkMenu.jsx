import React from "react";
import classes from "./QuickLinkMenu.module.css";

const QuickLinkMenu = ({ isQuickLinkMenuOpen, setIsQuickLinkMenuOpen }) => {
  return (
    <div
      className={`menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px position-keyboard-pos-sys ${
        isQuickLinkMenuOpen ? `show ${classes.showQuickLinksMenu}` : ""
      }`}
      data-kt-menu="true"
      onMouseOver={() => {
        console.log("Yes");
        setIsQuickLinkMenuOpen(true);
      }}
      onMouseLeave={() => {
        console.log("No");
        setIsQuickLinkMenuOpen(false);
      }}
    >
      <table className={classes.quickLinkTable}>
		<thead>
			<tr className={classes.row2}>
				<th >Operations</th>
				<th>Keyboard Shortcut</th>
				<th >Operations</th>
				<th>Keyboard Shortcut</th>
			</tr>
		</thead>
        <tbody>
		<tr className={classes.row1}>
                <td>New Order Tab</td>
                <td>Shift+N</td>
                <td>On Going Tab</td>
                <td>Shift+G</td>
            </tr>
            <tr className={classes.row2}>
                <td>Today Order Tab</td>
                <td>Shift+T</td>
                <td>Online Order Tab</td>
                <td>Shift+O</td>
            </tr>
            <tr className={classes.row1}>
                <td>Place Order</td>
                <td>Shift+P</td>
                <td>Quick Order</td>
                <td>Shift+Q</td>
            </tr>
            <tr className={classes.row2}>
                <td>Search Product</td>
                <td>Shift+S</td>
                <td>Select Customer</td>
                <td>Shift+C</td>
            </tr>
            <tr className={classes.row1}>
                <td>Select Customer Type</td>
                <td>Shift+Y</td>
                <td>Edit Discount:</td>
                <td>Shift+D</td>
            </tr>
            <tr className={classes.row2}>
                <td>Edit Service Charge</td>
                <td>Shift+R</td>
                <td>Select Waiter</td>
                <td>Shift+W</td>
            </tr>
            <tr className={classes.row1}>
                <td>Select Table</td>
                <td>Shift+B</td>
                <td>Cooking Time</td>
                <td>Alt+K</td>
            </tr>
            <tr className={classes.row2}>
                <td>Search Table</td>
                <td>Alt+T</td>
                <td>Go Edit</td>
                <td>Shift+E</td>
            </tr>
            <tr className={classes.row1}>
                <td>Search Today Order</td>
                <td>Shift+X</td>
                <td>Search Online Order</td>
                <td>Shift+V</td>
            </tr>
            <tr className={classes.row2}>
                <td>Update Search Product</td>
                <td>Alt+S</td>
                <td>Update Select Customer</td>
                <td>Alt+C</td>
            </tr>
            <tr className={classes.row1}>
                <td>Update Select Customer Type</td>
                <td>Alt+Y</td>
                <td>Update Discount:</td>
                <td>Alt+D</td>
            </tr>
            <tr className={classes.row2}>
                <td>Update Service Charge:</td>
                <td>Alt+R</td>
                <td>Update Select Table</td>
                <td>Alt+B</td>
            </tr>
            <tr className={classes.row1}>
                <td>Update Submit Form</td>
                <td>Alt+U</td>
                <td>Select Payment Type</td>
                <td>Alt+M</td>
            </tr>
            <tr className={classes.row2}>
                <td>Pay & Print Bill</td>
                <td>Alt+P</td>
                <td>Paid Amount Typing</td>
                <td>Alt+A</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuickLinkMenu;
