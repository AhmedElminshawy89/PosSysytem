import React from "react";
import Input from "../../components/Global/Input/Input";
import CheckInput from "../../components/Global/CheckInput/CheckInput";
import Button from "../../components/Global/Button/Button";
import classes from "../../styles/global.module.css";
import PrivateClasses from "./PosSettings.module.css";
import Toolbar from "../Global/ToolBar/Toolbar";

const PosSettings = () => {
  return (
    <div
      className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
    >
      <div className="d-flex flex-column flex-column-fluid">
        <Toolbar
          MainPage="POS Setting"
          CurrentPage="Home"
          path={"/"}
          TitlePage="POS Setting"
        />
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            class="app-container container-fluid"
          >
            <div>
              <p className="fs-1 fw-semibold">Place order Setting</p>
              <hr />
              <div className={`mt-8 ${PrivateClasses.checkInputs}`}>
                <CheckInput label={"Waiter"} />
                <CheckInput label={"Table"} />
                <CheckInput label={"Cooking Time "} />
                <CheckInput label={"Table Map "} />
                <CheckInput label={"Is Sound Enable"} />
              </div>
            </div>
            <div>
              <p className="fs-1 fw-semibold">Quick Order Setting</p>
              <hr />
              <div className={`mt-8 ${PrivateClasses.checkInputs}`}>
                <CheckInput label={"Waiter"} />
                <CheckInput label={"Table"} />
                <CheckInput label={"Cooking Time "} />
                <CheckInput label={"Table Map "} />
                <CheckInput label={"Is Sound Enable"} />
              </div>
            </div>
            {/* <div className="mt-8">
							<Button text={"Submit"} />
						</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosSettings;
