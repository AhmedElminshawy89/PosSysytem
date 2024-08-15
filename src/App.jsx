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
import Paymentmethod from "./pages/Setting/Setting";
import PaymentSetup from "./pages/Setting/PaymentSetUp";
import ShippingMethods from "./pages/Setting/ShippingMethod";
import TableList from "./pages/Setting/TableList";
import TableSetting from "./pages/Setting/TableSetting";
import CustomerList from "./pages/Setting/CustomerList";
import CustomerType from "./pages/Setting/CustomerType";
import ThirdPartyCustomer from "./pages/Setting/ThirdPartyCutsomer";
import CardTerminal from "./pages/Setting/CardTerminal";
import StationList from "./pages/Setting/StationList";
import StationAssign from "./pages/Setting/StationAssign";
import StationDashboardSetting from "./pages/Setting/StationDashboard";
import UnitMeasurement from "./pages/Setting/Unit Measurement";
import Ingredients from "./pages/Setting/Ingredients";
import SmsConfiguration from "./pages/Setting/SmsConfiguration";
import SmsSetting from "./pages/Setting/SmsSetting";
import BankList from "./pages/Setting/BankList";
import BankTransaction from "./pages/Setting/BankTransaction";
import Language from "./pages/Setting/Language";
import ApplicationSetting from "./pages/Setting/ApplicationSetting";
import AppSetting from "./pages/Setting/AppSetting";
import FactoryReset from "./pages/Setting/FactoryReset";
import Currency from "./pages/Setting/Currency";
import Country from "./pages/Setting/Country";
import City from "./pages/Setting/City";
import Area from "./pages/Setting/Area";
import Hotels from "./pages/Setting/Hotels";
import Commssion from "./pages/Setting/Commision";
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
          <Route path="/setting/paymentmethod/index" element={<Paymentmethod/>} />
          <Route path="/setting/paymentmethod/paymentsetup" element={<PaymentSetup/>} />
          <Route path="/setting/shippingmethod/index" element={<ShippingMethods/>} />
          <Route path="/setting/restauranttable/index" element={<TableList/>} />
          <Route path="/setting/restauranttable/tablesetting" element={<TableSetting/>} />
          <Route path="/setting/customerlist/index" element={<CustomerList/>} />
          <Route path="/setting/customertype/index" element={<CustomerType/>} />
          <Route path="/setting/thirdpratycustomer/index" element={<ThirdPartyCustomer/>} />
          <Route path="/setting/card_terminal/index" element={<CardTerminal/>} />
          <Route path="/setting/kitchensetting/index" element={<StationList/>} />
          <Route path="/setting/kitchensetting/assignkitchen" element={<StationAssign/>} />
          <Route path="/setting/kitchensetting/kitchen_dashboardsetting" element={<StationDashboardSetting/>} />
          <Route path="/setting/unitmeasurement/index" element={<UnitMeasurement/>} />
          <Route path="/setting/ingradient/index" element={<Ingredients/>} />
          <Route path="/setting/smsetting/sms_configuration" element={<SmsConfiguration/>} />
          <Route path="/setting/smsetting/sms_template" element={<SmsSetting/>} />
          <Route path="/setting/bank_list/index" element={<BankList/>} />
          <Route path="/setting/bank_list/bank_transaction" element={<BankTransaction/>} />
          <Route path="/setting/language" element={<Language/>} />
          <Route path="/setting/setting/index" element={<ApplicationSetting/>} />
          <Route path="/setting/serversetting/index" element={<AppSetting/>} />
          <Route path="/setting/setting/factoryreset" element={<FactoryReset/>} />
          <Route path="/setting/currency/index" element={<Currency/>} />
          <Route path="/setting/country_city_list/index" element={<Country/>} />
          <Route path="/setting/country_city_list/statelist" element={<City/>} />
          <Route path="/setting/country_city_list/citylist" element={<Area/>} />
          <Route path="/setting/hotels/index" element={<Hotels/>} />
          <Route path="/setting/Commissionsetting/payroll_commission" element={<Commssion/>} />
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
