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
import AddPurchase from "./pages/Purchase/AddPurchase";
import PurchaseReturn from "./pages/Purchase/PurchaseReturn";
import SupplierLedger from "./pages/Purchase/SupplierLedger";
import OutofStockIngredients from "./pages/Purchase/OutofStockIngredients";
import PurchaseReport from "./components/Report/PurchaseReport";
import StockReport from "./components/Report/StockReport";
import StockReportStation from "./components/Report/StockReportStation";
import SalesReport from "./components/Report/SalesReport";
import ItemsSalesReport from "./components/Report/ItemsSalesReport";
import ServiceChargeReport from "./components/Report/ServiceChargeReport";
import WaiterSalesReport from "./components/Report/WaiterSalesReport";
import StationSalesReport from "./components/Report/StationSalesReport";
import DeliveryType from "./components/Report/DeliveryType";
import SalesReportCashier from "./components/Report/SaleReportCashier";
import SalesByDate from "./components/Report/SalesByDate";
import Commision from "./components/Report/Commision";
import SaleByTable from "./components/Report/SaleByTable";
import SalesReportFiltering from "./components/Report/SalesReportFiltering";
import CashRegisterReport from "./components/Report/CashRegisterReport";
import SetProductionUnit from "./pages/Production/SetProductionUnit";
import ProductionSetList from './pages/Production/ProductionSetList';
import AddProduction from "./pages/Production/AddProduction";
import ProductionSettings from "./pages/Production/ProductionSetting";
import AddCategory from "./pages/Food/AddCategory";
import CategoryList from "./pages/Food/CategoryList";
import AddFood from "./pages/Food/AddFood";
import FoodList from "./pages/Food/FoodList";
import FoodVariant from "./pages/Food/FoodVariant";
import FoodAvailability from "./pages/Food/FoodAvailability";
import MenuType from "./pages/Food/MenuType";
import AddOnsList from "./pages/Food/AddOnsList";
import AddAddOns from "./pages/Food/AddAddOns";

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
          <Route path="/reservation/reservation/tablebooking" element={<AddBooking />} />
          <Route path="/reservation/reservation/setting" element={<ReservationSetting />} />
          <Route path="/purchase/purchase/index" element={<PurchaseItem />} />
          <Route path="/purchase/purchase/return_invoice" element={<ReturnInvoice />} />
          <Route path="/purchase/supplierlist/index" element={<Supplier_List />} />
          <Route path="/purchase/purchase/create" element={<AddPurchase />} />
          <Route path="/purchase/purchase/return_form" element={<PurchaseReturn />} />
          <Route path="/purchase/supplierlist/supplier_ledger_report" element={<SupplierLedger />} />
          <Route path="/purchase/purchase/stock_out_ingredients" element={<OutofStockIngredients />} />
          <Route path="/report/reports/index" element={<PurchaseReport />} />
          <Route path="/report/reports/productwise" element={<StockReport />} />
          <Route path="/report/reports/ingredientwise" element={<StockReportStation />} />
          <Route path="/report/reports/sellrpt" element={<SalesReport />} />
          <Route path="/report/reports/sellrptItems" element={<ItemsSalesReport />} />
          <Route path="/report/reports/servicerpt" element={<ServiceChargeReport />} />
          <Route path="/report/reports/sellrptwaiter" element={<WaiterSalesReport />} />
          <Route path="/report/reports/kichansrpt" element={<StationSalesReport />} />
          <Route path="/report/reports/sellrptdelvirytype" element={<DeliveryType />} />
          <Route path="/report/reports/sellrptCasher" element={<SalesReportCashier />} />
          <Route path="/report/reports/sellrptbydate" element={<SalesByDate />} />
          <Route path="/report/reports/payroll_commission" element={<Commision />} />
          <Route path="/report/reports/table_sale" element={<SaleByTable />} />
          <Route path="/report/reports/sellrpt2" element={<SalesReportFiltering />} />
          <Route path="/report/reports/cashregister" element={<CashRegisterReport />} />
          <Route path="/production/production/productionunit" element={<SetProductionUnit />} />
          <Route path="/production/production/index" element={<ProductionSetList />} />
          <Route path="/production/production/create" element={<AddProduction />} />
          <Route path="/production/production/possetting" element={<ProductionSettings />} />
          <Route path="/itemmanage/item_category/create" element={<AddCategory />} />
          <Route path="/itemmanage/item_category/index" element={<CategoryList />} />
          <Route path="/itemmanage/item_food/create" element={<AddFood />} />
          <Route path="/itemmanage/item_food/index" element={<FoodList />} />
          <Route path="/itemmanage/item_food/addgroupfood" element={<AddFood />} />
          <Route path="/itemmanage/item_food/foodvarientlist" element={<FoodVariant />} />
          <Route path="/itemmanage/item_food/availablelist" element={<FoodAvailability />} />
          <Route path="/itemmanage/item_food/todaymenutype" element={<MenuType />} />
          <Route path="/itemmanage/menu_addons/index" element={<AddOnsList />} />
          <Route path="/itemmanage/menu_addons/create" element={<AddAddOns />} />
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
