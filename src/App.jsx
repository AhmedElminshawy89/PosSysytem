import { Routes, Route } from "react-router-dom";
import "./styles/style.bundle.css";
import "./styles/datatables.bundle.css";
import PagesOutlet from "./pages/Outlet/Outlet";
import MainPage from "./pages/MainPage/MainPage";
import Pos from "./pages/POS/Pos";
import CreateExpense from "./pages/Accounting/CreateExpense/CreateExpense";
import CreateDeposite from "./pages/Accounting/CreateDeposite/CreateDeposite";
import OrderList from "./components/OrderList/OrderList";
import PendingOrder from "./components/PendingOrder/PendingOrder";
import InvoicePendingOrder from "./components/PendingOrder/InvoicePendingOrder";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import PreOrderDateList from "./components/PreOrderDateList/PreOrderDateList";
import PreOrderList from "./components/PreOrderList/PreOrderList";
import CompletedOrder from "./components/CompletedOrder/CompletedOrder";
import CanceledOrder from "./components/CanceledOrder/CanceledOrder";
import StationDashboard from "./components/StationDashboard/StationDashboard";
import CounteredDashboard from "./components/CounteredDashboard/CounteredDashboard";
import CounterList from "./components/CounterList/CounterList";
import PosSetting from "./components/PosSetting/PosSetting";
import SoundSetting from "./components/SoundSetting/SoundSetting";
import PlaceOrderInvoice from "./components/Invoices/PlaceOrderInvoice/PlaceOrderInvoice";
import OnGoingOrderInvoice from "./components/Invoices/OnGoingOrderInvoice/OnGoingOrderInvoice";
import SignIn from "./pages/Auth/Signin";
import SignUp from "./pages/Auth/Signup";
import PasswordReset from "./pages/Auth/ForgetPassword";
import Reservations from "./pages/Reservation/Reservations/Reservations";
import UnavailableDay from "./pages/Reservation/Reservations/UnavailableDay";
import CateringInquiry from "./pages/Reservation/Reservations/CateringInquiry";
import PurchaseItem from "./pages/Purchase/PurchaseItem";
import ReturnInvoice from "./pages/Purchase/ReturnInvoice";
import Supplier_List from "./pages/Purchase/Supplier_List";
import AddBooking from "./pages/Reservation/Reservations/AddBooking";
import ReservationSetting from "./pages/Reservation/Reservations/ReservationSetting";

function App() {
  return (
    <>
      <Routes>
          <Route path="/ordermanage/order/posorderinvoice/19" element={<InvoicePendingOrder />} />
          <Route path="/ordermanage/order/placeorder/posorderinvoice/19" element={<PlaceOrderInvoice />} />
          <Route path="/ordermanage/order/ongoingorder/posorderinvoice/19" element={<OnGoingOrderInvoice />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/" element={<PagesOutlet />}>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/ordermanage/order/pos_invoice" element={<Pos />} />
          <Route path="/ordermanage/order/orderlist" element={<OrderList />} />
          <Route path="/ordermanage/order/pendingorder" element={<PendingOrder />} />
          <Route path="/ordermanage/order/orderdetails/19" element={<OrderDetails />} />
          <Route path="/ordermanage/order/preorderdatelist" element={<PreOrderDateList />} />
          <Route path="/ordermanage/order/preorderlist" element={<PreOrderList />} />
          <Route path="/ordermanage/order/completelist" element={<CompletedOrder />} />
          <Route path="/ordermanage/order/cancellist" element={<CanceledOrder />} />
          <Route path="/ordermanage/order/allkitchen" element={<StationDashboard />} />
          <Route path="/ordermanage/order/counterboard" element={<CounteredDashboard />} />
          <Route path="/ordermanage/order/counterlist" element={<CounterList />} />
          <Route path="/ordermanage/order/possetting" element={<PosSetting />} />
          <Route path="/ordermanage/order/soundsetting" element={<SoundSetting />} />
          <Route path="/reservation/reservation/index" element={<Reservations />} />
          <Route path="/reservation/reservation/unavailablelist" element={<UnavailableDay />} />
          <Route path="/reservation/reservation/cateringinquiry" element={<CateringInquiry />} />
          <Route path="/purchase/purchase/index" element={<PurchaseItem />} />
          <Route path="/purchase/purchase/return_invoice" element={<ReturnInvoice />} />
          <Route path="/purchase/supplierlist/index" element={<Supplier_List />} />
          <Route path="/reservation/reservation/tablebooking" element={<AddBooking />} />
          <Route path="/reservation/reservation/setting" element={<ReservationSetting />} />
          {/* <Route
            path="/accounting/create-expense"
            element={<CreateExpense />}
          /> */}
          {/* <Route
            path="/accounting/create-deposite"
            element={<CreateDeposite />}
          /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
