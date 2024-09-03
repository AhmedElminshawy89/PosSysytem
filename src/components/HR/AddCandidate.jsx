import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import AddCandidateSteper from "./Steper/AddCandidate";
import AddEmployeeSteper from "./Steper/AddEmployeeSteper";

const AddCandidate = () => {


  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <div className="d-flex justify-content-between bg-white flex-sm-row flex-column">
            <Toolbar
              MainPage="Add New Candidate"
              CurrentPage="Home"
              path={"/"}
              TitlePage="Candidate"
            />
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush">
                <div className="card-body pt-5">
                    <AddCandidateSteper/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCandidate;
