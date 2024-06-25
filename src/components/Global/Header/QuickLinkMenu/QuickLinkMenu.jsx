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
				<th className="text-center">Operations</th>
				<th className="text-center">Keyboard Shortcut</th>
				<th className="text-center">Operations</th>
				<th className="text-center">Keyboard Shortcut</th>
			</tr>
		</thead>
        <tbody>
		<tr className={classes.row1}>
                <td className="text-center">New Order Tab</td>
                <td className="text-center">Shift+N</td>
                <td className="text-center">On Going Tab</td>
                <td className="text-center">Shift+G</td>
            </tr>
            <tr className={classes.row2}>
                <td className="text-center">Today Order Tab</td>
                <td className="text-center">Shift+T</td>
                <td className="text-center">Online Order Tab</td>
                <td className="text-center">Shift+O</td>
            </tr>
            <tr className={classes.row1}>
                <td className="text-center">Place Order</td>
                <td className="text-center">Shift+P</td>
                <td className="text-center">Quick Order</td>
                <td className="text-center">Shift+Q</td>
            </tr>
            <tr className={classes.row2}>
                <td className="text-center">Search Product</td>
                <td className="text-center">Shift+S</td>
                <td className="text-center">Select Customer</td>
                <td className="text-center">Shift+C</td>
            </tr>
            <tr className={classes.row1}>
                <td className="text-center">Select Customer Type</td>
                <td className="text-center">Shift+Y</td>
                <td className="text-center">Edit Discount:</td>
                <td className="text-center">Shift+D</td>
            </tr>
            <tr className={classes.row2}>
                <td className="text-center">Edit Service Charge</td>
                <td className="text-center">Shift+R</td>
                <td className="text-center">Select Waiter</td>
                <td className="text-center">Shift+W</td>
            </tr>
            <tr className={classes.row1}>
                <td className="text-center">Select Table</td>
                <td className="text-center">Shift+B</td>
                <td className="text-center">Cooking Time</td>
                <td className="text-center">Alt+K</td>
            </tr>
            <tr className={classes.row2}>
                <td className="text-center">Search Table</td>
                <td className="text-center">Alt+T</td>
                <td className="text-center">Go Edit</td>
                <td className="text-center">Shift+E</td>
            </tr>
            <tr className={classes.row1}>
                <td className="text-center">Search Today Order</td>
                <td className="text-center">Shift+X</td>
                <td className="text-center">Search Online Order</td>
                <td className="text-center">Shift+V</td>
            </tr>
            <tr className={classes.row2}>
                <td className="text-center">Update Search Product</td>
                <td className="text-center">Alt+S</td>
                <td className="text-center">Update Select Customer</td>
                <td className="text-center">Alt+C</td>
            </tr>
            <tr className={classes.row1}>
                <td className="text-center">Update Select Customer Type</td>
                <td className="text-center">Alt+Y</td>
                <td className="text-center">Update Discount:</td>
                <td className="text-center">Alt+D</td>
            </tr>
            <tr className={classes.row2}>
                <td className="text-center">Update Service Charge:</td>
                <td className="text-center">Alt+R</td>
                <td className="text-center">Update Select Table</td>
                <td className="text-center">Alt+B</td>
            </tr>
            <tr className={classes.row1}>
                <td className="text-center">Update Submit Form</td>
                <td className="text-center">Alt+U</td>
                <td className="text-center">Select Payment Type</td>
                <td className="text-center">Alt+M</td>
            </tr>
            <tr className={classes.row2}>
                <td className="text-center">Pay & Print Bill</td>
                <td className="text-center">Alt+P</td>
                <td className="text-center">Paid Amount Typing</td>
                <td className="text-center">Alt+A</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuickLinkMenu;
