/* eslint-disable react-hooks/rules-of-hooks */
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import CheckInput from "../../components/Global/CheckInput/CheckInput";
const Themes = () => {

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
        <div className="d-flex justify-content-between align-items-center bg-white flex-sm-row flex-column">
          <Toolbar
            MainPage="Themes"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Themes"
          />
          <div>
          </div>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
            <div className="card card-flush mb-6">
                <div className="card-body pt-4">
                <div className="d-flex align-items-md-center gap-5 flex-md-row flex-column">
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                      Purchase Key
                        <span className="required-field-form-order">*</span>
                      </label>
                      <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Purchase Key`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                    </div>
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-column align-items-start position-relative my-1 mt-4 booking-reserve"
                    >
                      <label htmlFor="waiter" className="form-label">
                      Upload Theme
                      </label>
                      <input
                      type='file'
                        id="waiter"
                        name="waiter"
                        className="form-control form-control-solid border-0 ps-6"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-md-center gap-5 flex-md-row flex-column mt-6">
                    <div
                      style={{ flex: 1 }}
                      className="d-flex flex-row align-items-center gap-4 position-relative my-1 booking-reserve"
                    >

                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="card card-flush">
                <div className="card-body pt-4">
                    <div className="row gap-8">
                    <div className="col-md-4 themeboxTheme theme_classic">
  <div className="card_item">
    <div className="border-box pnav" id="pnav">
      <div className="img_partTheme">
        <img
          className="img-fluid img-thumbnail"
          src="https://fb.instasme.com/application/views/themes/classic/preview.png"
          style={{height:'190px',objectFit:'cover',objectPosition:'top'}}
          alt="classic"
        />
        <a
          href="https://fb.instasme.com/"
          target="__blank"
          className="btn btn-dtlsTheme btn-primary"
          rel="noopener noreferrer"
        >
          Theme Details
        </a>
      </div>
    </div>

    <div className="d-flex justify-content-between align-items-center">
      <h4>Classic</h4>
      <div className="caption_btnTheme activatedTheme">
        <a
          href="https://fb.instasme.com/"
          target="__blank"
          className="btn btn-primary btn-xs"
          rel="noopener noreferrer"
        >
          Activated
        </a>
      </div>
    </div>
  </div>
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

export default Themes;
