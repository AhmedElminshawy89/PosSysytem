const Order_Management = [
    { title: "POS", link: "/ordermanage/order/pos_invoice" },
    { title: "Order List", link: "/ordermanage/order/orderlist" },
    { title: "Pending Orders", link: "/ordermanage/order/pendingorder" },
    { title: "Pre Order Time Slots", link: "/ordermanage/order/preorderdatelist" },
    { title: "Pre Order List", link: "/ordermanage/order/preorderlist" },
    { title: "Completed Orders", link: "/ordermanage/order/completelist" },
    { title: "Cancelled Orders", link: "/ordermanage/order/cancellist" },
    { title: "Station Dashboard", link: "/ordermanage/order/allkitchen" },
    { title: "Counter Dashboard", link: "/ordermanage/order/counterboard" },
    { title: "Counter List", link: "/ordermanage/order/counterlist" },
    { title: "POS Setting", link: "/ordermanage/order/possetting" },
    { title: "Sound Setting", link: "/ordermanage/order/soundsetting" },
]
const Reservation = [
    { title: "Reservation", link: "/reservation/reservation/index" },
    { title: "Add Booking", link: "/reservation/reservation/tablebooking" },
    { title: "Unavailable Day", link: "/reservation/reservation/unavailablelist" },
    { title: "Reservation Setting", link: "/reservation/reservation/setting" },
    { title: "Catering Inquiry", link: "/reservation/reservation/cateringinquiry" },
]
const Purchases_Management = [
    { title: "Purchase Item", link: "/purchase/purchase/index" },
    { title: "Add Purchase", link: "/purchase/purchase/create" },
    { title: "Purchase Return", link: "/purchase/purchase/return_form" },
    { title: "Return Invoice", link: "/purchase/purchase/return_invoice" },
    { title: "Supplier Manage", link: "/purchase/supplierlist/index" },
    { title: "Supplier Ledger", link: "/purchase/supplierlist/supplier_ledger_report" },
    { title: "Out-of-Stock Ingredients", link: "/purchase/purchase/stock_out_ingredients" },
]
const Reports = [
    { title: "Purchase Report", link: "/report/reports/index" },
    { title: "Stock Report (Food Items)", link: "/purchase/purchase/create" },
    { title: "Stock Report (Station)", link: "/report/reports/ingredientwise" },
    { title: "Sales Report", link: "/report/reports/ingredientwise" },
]
const Production_Management = [
    { title: "Set Production Unit", link: "/production/production/productionunit" },
    { title: "Production Set List", link: "/production/production/index" },
    { title: "Add Production", link: "/production/production/create" },
    { title: "Production Setting", link: "/production/production/possetting" },
]
export { Order_Management,Reservation,Purchases_Management,Reports,Production_Management};