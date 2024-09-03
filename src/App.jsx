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
import ChartOfAccount from "./pages/Setting/ChartOfAccount";
import SupplierPayment from "./pages/Setting/SupplierPayment";
import CashAdjustment from "./pages/Setting/CashAdjustment";
import DebitVouchr from "./pages/Setting/DebitVouchr";
import CreditVoucher from "./pages/Setting/CreditVoucher";
import ContratVoucher from "./pages/Setting/ContraVoucher";
import VoucherApproval from "./pages/Setting/VoucherApproval";
import VoucherReport from "./pages/Setting/VoucherReport";
import CashBook from "./pages/Setting/CashBook";
import BankBook from "./pages/Setting/BankBook";
import GeneralAccounts from "./pages/Setting/GeneralAccounts";
import TrialBalance from "./pages/Setting/TrialBalance";
import ProfitLoss from "./pages/Setting/ProfitLoss";
import CashFlow from "./pages/Setting/CashFlow";
import BalanceSheet from './pages/Setting/BalanceSheet';
import JournalVoucher from "./pages/Setting/JournalVoucher";
import Designation from "./components/HR/Designation";
import AddEmployee from "./components/HR/AddEmolyee";
import ManageEmployee from "./components/HR/ManageEmployee";
import ManageEmployeeSalary from "./components/HR/ManageEmployeeSalary";
import AddExpensesItem from "./components/HR/AddExpensesItem";
import ManageExpenses from "./components/HR/ManageExpenses";
import AddExpense from "./components/HR/AddExpense";
import ManageExoenses2 from "./components/HR/ManageExoenses2";
import ExpensesStatement from "./components/HR/ExpenseStatement";
import NewAward from "./components/HR/NewAward";
import AwardController from "./components/HR/AwardController";
import AddCandidate from "./components/HR/AddCandidate";
import ManageCandidate from "./components/HR/ManageCandidate";
import CandidateShortList from "./components/HR/CandidateShortList";
import ManageCandidateShortList from "./components/HR/ManageCandidateShortlist";
import Interview from './components/HR/Interview';
import ManageInterview from "./components/HR/ManageInterview";
import CandidateSelection from "./components/HR/CandidateSelection";
import ManageCandidateSelection from './components/HR/ManageCandidateSelection';
import Department from "./components/HR/Department";
import ManageDepartment from "./components/HR/ManageDepartment";
import AddDivision from "./components/HR/AddDevision";
import WeeklyHoliday from "./components/HR/WeeklyHoliday";
import HolidaySelection from "./components/HR/HolidaySelectiona";
import ManageHolidaySelection from "./components/HR/ManageHolidaySelection";
import AddLeaveType from "./components/HR/AddLeaveType";
import LeaveApplication from "./components/HR/LeaveApplication";
import ManageLeaveApplication from "./components/HR/ManageLeaveApplication";
import GrantLoan from './components/HR/GrantLoan';
import ManageGrantLoan from "./components/HR/ManageGrantLoan";
import LoanInstallment from "./components/HR/LoanInstallment";
import ManageLoanInstallment from "./components/HR/ManageLoanInstallment";
import LoanReport from "./components/HR/LoanReport";
import SalaryType from "./components/HR/SalaryType";
import ManageSalaryType from "./components/HR/ManageSalaryType";
import SalarySetup from "./components/HR/SalarySetup";
import ManageSalarySetup from "./components/HR/ManageSalarySetup";
import SalaryGenerate from "./components/HR/SalaryGenerate";
import ManageSalaryGenerate from "./components/HR/ManageSalaryGenerate";
import WhatsappSetting from "./components/WhatsappSetting/WhatsappSetting";
import QROrderList from "./components/QRApp/QROrderList";
import AlltableQr from "./components/QRApp/AlltableQr";
import QRPaymentSetting from "./components/QRApp/QRPaymentSetting";
import ShiftManagement from "./components/ShiftManagement/ShiftManagement";
import Assignshift from "./components/ShiftManagement/Assignshift";
import PackageFood from "./components/WasteTrcking/PackageFood";
import PurchaseFoodWaste from "./components/WasteTrcking/PurchaseFoodWaste";
import MakingFoodWaste from "./components/WasteTrcking/MakingFoodWaste";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
import Modules from "./components/Modules/Modules";
import Themes from "./components/Modules/Themes";
import Role_Permission from "./components/Role/Role_Permission";
import RoleList from "./components/Role/RoleList";
import AssignRole from "./components/Role/AssignRole";
import AutoUpdate from "./components/WhatsappSetting/AutoUpdate";
import NewMessage from "./components/WhatsappSetting/NewMessage";
import InboxMessage from "./components/WhatsappSetting/InboxMessage";
import SentMessage from "./components/WhatsappSetting/SentMessage";
import CommonSetting from "./components/WebSetting/CommonSetting";
import ManageStoreTime from "./components/WebSetting/ManageStoreTime";
import BannerSetting from "./components/WebSetting/BannerSetting";
import MenuSetting from "./components/WebSetting/MenuSetting";
import SeoSetting from "./components/WebSetting/SeoSetting";
import SocialSetting from "./components/WebSetting/SocialSetting";
import WidgetSetting from "./components/WebSetting/WidgetSetting";
import EmailSetting from "./components/WebSetting/EmailSetting";
import CustomerRating from "./components/WebSetting/Customerrate";
import CoponList from "./components/WebSetting/CoponList";
import SubscribeList from "./components/WebSetting/SubscribeList";
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
          <Route path="/" element={<MainPage />} />
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
          <Route path="/accounts/accounts/show_tree" element={<ChartOfAccount/>} />
          <Route path="/accounts/accounts/supplier_payments" element={<SupplierPayment/>} />
          <Route path="/accounts/accounts/cash_adjustment" element={<CashAdjustment/>} />
          <Route path="/accounts/accounts/debit_voucher" element={<DebitVouchr/>} />
          <Route path="/accounts/accounts/credit_voucher" element={<CreditVoucher/>} />
          <Route path="/accounts/accounts/contra_voucher" element={<ContratVoucher/>} />
          <Route path="/accounts/accounts/aprove_v" element={<VoucherApproval/>} />
          <Route path="/accounts/accounts/voucher_report" element={<VoucherReport/>} />
          <Route path="/accounts/accounts/cash_book" element={<CashBook/>} />
          <Route path="/accounts/accounts/bank_book" element={<BankBook/>} />
          <Route path="/accounts/accounts/general_ledger" element={<GeneralAccounts/>} />
          <Route path="/accounts/accounts/trial_balance" element={<TrialBalance/>} />
          <Route path="/accounts/accounts/profit_loss_report" element={<ProfitLoss/>} />
          <Route path="/accounts/accounts/cash_flow_report" element={<CashFlow/>} />
          <Route path="/accounts/accounts/balance_sheet" element={<BalanceSheet/>} />
          <Route path="/accounts/accounts/journal_voucher" element={<JournalVoucher/>} />
          <Route path="/hrm/Employees/create_position" element={<Designation/>} />
          <Route path="/hrm/Employees/viewEmhistory" element={<AddEmployee/>} />
          <Route path="/hrm/Employees/manageemployee" element={<ManageEmployee/>} />
          <Route path="/hrm/Employees/emp_payment_view" element={<ManageEmployeeSalary/>} />
          <Route path="/hrm/Cexpense/add_expense_item" element={<AddExpensesItem/>} />
          <Route path="/hrm/Cexpense/manage_expense_item" element={<ManageExpenses/>} />
          <Route path="/hrm/Cexpense/add_expense" element={<AddExpense/>} />
          <Route path="/hrm/Cexpense/manage_expense" element={<ManageExoenses2/>} />
          <Route path="/hrm/Cexpense/expense_statement_form" element={<ExpensesStatement/>} />
          <Route path="/hrm/Award_controller/create_award" element={<NewAward/>} />
          <Route path="/hrm/Award_controller/award_view" element={<AwardController/>} />
          <Route path="/hrm/Candidate/caninfo_create" element={<AddCandidate/>} />
          <Route path="/hrm/Candidate/candidateinfo_view" element={<ManageCandidate/>} />
          <Route path="/hrm/Candidate_select/create_shortlist" element={<CandidateShortList/>} />
          <Route path="/hrm/Candidate_select/candidate_shortlist_view" element={<ManageCandidateShortList/>} />
          <Route path="/hrm/Candidate_select/create_interview" element={<Interview/>} />
          <Route path="/hrm/Candidate_select/candidate_interview_view" element={<ManageInterview/>} />
          <Route path="/hrm/Candidate_select/create_selection" element={<CandidateSelection/>} />
          <Route path="/hrm/Candidate_select/candidate_selection_view" element={<ManageCandidateSelection/>} />
          <Route path="/hrm/Department_controller/create_dept" element={<Department/>} />
          <Route path="/hrm/Department_controller/dept_view" element={<ManageDepartment/>} />
          <Route path="/hrm/Division_controller/division_form" element={<AddDivision/>} />
          <Route path="/hrm/Division_controller/index" element={<ManageDepartment/>} />
          <Route path="/hrm/Leave/create_weekleave" element={<WeeklyHoliday/>} />
          <Route path="/hrm/Leave/holiday_view" element={<HolidaySelection/>} />
          <Route path="/hrm/Leave/manage_holiday" element={<ManageHolidaySelection/>} />
          <Route path="/hrm/Leave/add_leave_type" element={<AddLeaveType/>} />
          <Route path="/hrm/Leave/others_leave" element={<LeaveApplication/>} />
          <Route path="/hrm/Leave/application_view" element={<ManageLeaveApplication/>} />
          <Route path="/hrm/Loan/create_grandloan" element={<GrantLoan/>} />
          <Route path="/hrm/Loan/loan_view" element={<ManageGrantLoan/>} />
          <Route path="/hrm/Loan/create_installment" element={<LoanInstallment/>} />
          <Route path="/hrm/Loan/installmentView" element={<ManageLoanInstallment/>} />
          <Route path="/hrm/Loan/loan_report" element={<LoanReport/>} />
          <Route path="/hrm/Payroll/create_salary_setup" element={<SalaryType/>} />
          <Route path="/hrm/Payroll/emp_salary_setup_view" element={<ManageSalaryType/>} />
          <Route path="/hrm/Payroll/create_s_setup" element={<SalarySetup/>} />
          <Route path="/hrm/Payroll/salary_setup_view" element={<ManageSalarySetup/>} />
          <Route path="/hrm/Payroll/create_salary_generate" element={<SalaryGenerate/>} />
          <Route path="/hrm/Payroll/salary_generate_view" element={<ManageSalaryGenerate/>} />
          <Route path="/whatsapp/whatsappback/showsetting" element={<WhatsappSetting/>} />
          <Route path="/qrapp/qrmodule/index" element={<QROrderList/>} />
          <Route path="/qrapp/qrmodule/tableqrcode" element={<AlltableQr/>} />
          <Route path="/qrapp/qrmodule/qrpaymentsetting" element={<QRPaymentSetting/>} />
          <Route path="/shiftmangment/shiftmangmentback/addeditshift" element={<ShiftManagement/>} />
          <Route path="/shiftmangment/shiftmangmentback/assign_shift" element={<Assignshift/>} />
          <Route path="/wastemangment/wastetracking/addpackagingfood" element={<PackageFood/>} />
          <Route path="/wastemangment/wastetracking/addpurchasfoodwaste" element={<PurchaseFoodWaste/>} />
          <Route path="/wastemangment/wastetracking/makeingfoodwaste" element={<MakingFoodWaste/>} />
          <Route path="/dashboard/user/form" element={<AddUser/>} />
          <Route path="/dashboard/user/index" element={<UserList/>} />
          <Route path="/addon/module/index" element={<Modules/>} />
          <Route path="/addon/theme/index" element={<Themes/>} />
          <Route path="/dashboard/permission_setup" element={<Role_Permission/>} />
          <Route path="/dashboard/role/role_list" element={<RoleList/>} />
          <Route path="/dashboard/role/user_access_role" element={<AssignRole/>} />
          <Route path="/dashboard/autoupdate" element={<AutoUpdate/>} />
          <Route path="/dashboard/message/new_message" element={<NewMessage/>} />
          <Route path="/dashboard/message/index" element={<InboxMessage/>} />
          <Route path="/dashboard/message/sent" element={<SentMessage/>} />
          <Route path="/dashboard/web_setting/" element={<CommonSetting/>} />
          <Route path="/dashboard/web_setting/storetime" element={<ManageStoreTime/>} />
          <Route path="/dashboard/web_setting/bannersetting" element={<BannerSetting/>} />
          <Route path="/dashboard/web_setting/menusetting" element={<MenuSetting/>} />
          <Route path="/dashboard/web_setting/seosetting" element={<SeoSetting/>} />
          <Route path="/dashboard/web_setting/socialtting" element={<SocialSetting/>} />
          <Route path="/dashboard/web_setting/widgetsetting" element={<WidgetSetting/>} />
          <Route path="/dashboard/web_setting/email_config_setup" element={<EmailSetting/>} />
          <Route path="/dashboard/rating" element={<CustomerRating/>} />
          <Route path="/dashboard/couponlist" element={<CoponList/>} />
          <Route path="/dashboard/couponlist" element={<SubscribeList/>} />
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
