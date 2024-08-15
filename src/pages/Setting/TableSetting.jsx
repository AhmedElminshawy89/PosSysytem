/* eslint-disable react-hooks/rules-of-hooks */
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import icon from '../../data/Img/7.png'


const TableSetting = () => {

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <Toolbar
            MainPage="Setting"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Restaurant Table"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush">
                <div className="card-body pt-0">
                <div className="d-flex gap-4 flex-wrap mt-6">
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
            <div className="border d-flex align-items-center justify-content-center cursor-pointer"  style={{borderRadius:'.7rem',width:'100px',height:'80px'}}>
            <img src={icon} style={{width:'100px'}} />
            </div>
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableSetting;
