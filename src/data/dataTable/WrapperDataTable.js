// all columns
export const ColumnsPendingOrder = [
  { label: "SL", visible: true },
  { label: "Order Id", visible: true },
  { label: "Customer Name", visible: true },
  { label: "Customer Type", visible: true },
  { label: "Waiter", visible: true },
  { label: "Table", visible: true },
  { label: "Pre-Order", visible: true },
  { label: "Pre Order Date", visible: true },
  { label: "Pre Order Time", visible: true },
  { label: "Order Date", visible: true },
  { label: "Amount", visible: true },
  { label: "Action", visible: true },
];

export const ColumnsPreOrderList = [
  { label: "SL", visible: true },
  { label: "Invoice No", visible: true },
  { label: "Customer Name", visible: true },
  { label: "Customer Type", visible: true },
  { label: "Waiter", visible: true },
  { label: "Table", visible: true },
  { label: "Pre-Order", visible: true },
  { label: "Pre Order Date", visible: true },
  { label: "Pre Order Time", visible: true },
  { label: "Order Date", visible: true },
  { label: "Amount", visible: true },
  { label: "Action", visible: true },
];

export const ColumnsPreOrderDateList = [
  { label: "SL", visible: true },
  { label: "Pre Date", visible: true },
  { label: "Time Slots", visible: true },
  { label: "Action", visible: true },
];

export const ColumnsOrderList = [
  { label: "SL", visible: true },
  { label: "Invoice No", visible: true },
  { label: "Customer Name", visible: true },
  { label: "Waiter", visible: true },
  { label: "Table", visible: true },
  { label: "State", visible: true },
  { label: "Order Date", visible: true },
  { label: "Amount", visible: true },
  { label: "Action", visible: true },
];

export const ColumnsQROrder = [
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


export const ColumnsOnlineOrder = [
  { label: "SL", visible: true },
  { label: "Invoice", visible: true },
  { label: "Customer Name", visible: true },
  { label: "Delivery Method Name", visible: true },
  { label: "Delivery Date & Time", visible: true },
  { label: "Waiter", visible: true },
  { label: "Table No", visible: true },
  { label: "Payment Status", visible: true },
  { label: "Order Date", visible: true },
  { label: "Amount", visible: true },
  { label: "Action", visible: true },
];

export const ColumnsTodayOrder = [
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

export const ColumnsClosingBalance = [
  { label: "SL No.", visible: true },
  { label: "Payment Type", visible: true },
  { label: "Total Price", visible: true },
];
// all data
export const DataPendingOrder = [
  {
    sl: 19,
    order_id: 13757,
    customer_name: "Melody Macy",
    customer_type: "Take Away / Pickup",
    waiter: "Waiter1",
    table: "Table1",
    pre_order: "N",
    pre_order_date: "23/11/2023",
    pre_order_time: "4:30",
    order_date: "23/11/2023",
    amount: 1500,
  },
  {
    sl: 20,
    order_id: 13760,
    customer_name: "Melody Macy",
    customer_type: "Take Away / Pickup",
    waiter: "Waiter2",
    table: "Table2",
    pre_order: "N",
    pre_order_date: "24/7/2024",
    pre_order_time: "7:30",
    order_date: "23/11/2023",
    amount: 1500,
  },
];

export const DataOrderList = [
  {
    sl: 19,
    invoice_no: 13757,
    customer_name: "	Melody Macy",
    waiter: "Waiter1	",
    table: "Table1",
    state: "Served",
    order_date: "23/11/2023",
    amount: 1500,
  },
  {
    sl: 20,
    invoice_no: 13547,
    customer_name: "Brian Cox",
    waiter: "Waiter2",
    table: "Table2",
    state: "Pending",
    order_date: "8/7/2024",
    amount: 1750,
  },
  {
    sl: 21,
    invoice_no: 1546,
    customer_name: "Olivia Wild",
    waiter: "Waiter3",
    table: "Table4",
    state: "Cancelled",
    order_date: "8/7/2024",
    amount: 1750,
  },
];

export const DataPreOrderDateList = [
  {
    sl: 19,
    Pre_date: "23/11/2023",
    time_slots: '4:30',
  },
  {
    sl: 20,
    Pre_date: "23/11/2024",
    time_slots: '7:58',
  },
];

export const DataQROrder = [
  {
    sl: 19,
    invoice: 13757,
    customer_name: "Melody Macy",
    customer_type: "QR Customer",
    waiter: "Waiter1",
    table: "Table1",
    payment_status:"Unpaid",
    order_date: "2024-07-09	",
    amount: 1500,
  },
  {
    sl: 20,
    invoice: 15659,
    customer_name: "Brian Cox",
    customer_type: "Dine In",
    waiter: "Waiter2",
    table: "Table3",
    payment_status:"Paid",
    order_date: "2023-08-01",
    amount: 1250,
  },
  {
    sl: 21,
    invoice: 13757,
    customer_name: "Olivia Wild",
    customer_type: "QR Customer",
    waiter: "Waiter4",
    table: "Table5",
    payment_status:"Unpaid",
    order_date: "2024-06-08	",
    amount: 850,
  },
];

export const DataOnlineOrder = [
  {
    sl: 1,
    invoice: "INV-001",
    customer_name: "John Doe",
    delivery_method_name: "Home Delivery",
    delivery_date_time: "24/7/2024, 5:00 PM",
    waiter: "Waiter1",
    table_no: "N/A",
    payment_status: "Paid",
    order_date: "24/7/2024",
    amount: 120.00,
  },
  {
    sl: 2,
    invoice: "INV-002",
    customer_name: "Jane Smith",
    delivery_method_name: "Pickup",
    delivery_date_time: "24/7/2024, 6:00 PM",
    waiter: "Waiter2",
    table_no: "N/A",
    payment_status: "Pending",
    order_date: "24/7/2024",
    amount: 75.50,
  },
  {
    sl: 3,
    invoice: "INV-003",
    customer_name: "Jane Smith",
    delivery_method_name: "Pickup",
    delivery_date_time: "1/6/2024, 4:03 PM",
    waiter: "Waiter3",
    table_no: "N/A",
    payment_status: "Unpaid",
    order_date: "24/7/2024",
    amount: 750.10,
  },
];

export const DataTodayOrder = [
  {
    sl: 1,
    invoice: "INV-001",
    customer_name: "John Doe",
    customer_type: "QR Customer",
    waiter: "Waiter1",
    table_no: "N/A",
    order_date: "24/7/2024",
    amount: 120.00,
  },
  {
    sl: 2,
    invoice: "INV-002",
    customer_name: "Jane Smith",
    customer_type: "Dine In",
    waiter: "Waiter2",
    table_no: "N/A",
    order_date: "24/7/2024",
    amount: 75.50,
  },
  {
    sl: 3,
    invoice: "INV-003",
    customer_name: "Jane Smith",
    customer_type: "QR Customer",
    waiter: "Waiter3",
    table_no: "N/A",
    order_date: "24/7/2024",
    amount: 750.10,
  },
];

export const DataClosingBalance = [
  {
    sl: 1,
    payment_type: "QR Customer",
    amount: 120.00,
  },  {
    sl: 2,
    payment_type: "QR Customer",
    amount: 180.00,
  },
];