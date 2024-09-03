/* eslint-disable react-hooks/rules-of-hooks */
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import CheckInput from "../../components/Global/CheckInput/CheckInput";
const Modules = () => {

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
        <div className="d-flex justify-content-between align-items-center bg-white flex-sm-row flex-column">
          <Toolbar
            MainPage="Module List"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Modules"
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
                      Module (.zip | .rar | .gz) 
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
                      <label htmlFor="waiter" className="form-label mt-3">
                      Overwrite
                      </label>
                      <CheckInput/>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="card card-flush">
                <div className="card-body pt-4">
                    <div className="row gap-8">
                    <div className="col-md-4 addonsbox p-4" style={{border:'1px solid #ddd',borderRadius:'.75rem'}}>
  <div className="thumbnail">
    <div className="addon_img">
      <img
        src="https://store.bdtask.com/assets/img/modules/thumbs/loyality.jpg"
        alt="Loyalty Program"
        className="mod_thumb_img "
        style={{borderRadius:'.75rem',marginBottom:'15px',width:'100%',height:'190px',objectFit:'cover'}}
      />
    </div>
    <div className="caption">
      <h3 className="d-flex justify-content-between">
        <span className="addon_title">Loyalty Program</span>
        <span className="price text-primary">$25.00</span>
      </h3>
      <p className="caption_desc">
        Give points to your favorite customers. Make members among them to give valuable services and discounts.
      </p>
      <p>
        <a
          href="https://store.bdtask.com/payment/1d1b9a3c2a20292986392ccecb78679d"
          target="_blank"
          role="button"
          className="btn btn-primary"
          rel="noopener noreferrer"
        >
          Buy Now
        </a>
      </p>
    </div>
  </div>
</div>
<div className="col-md-4 addonsbox p-4" style={{border:'1px solid #ddd',borderRadius:'.75rem'}}>
  <div className="thumbnail">
    <div className="addon_img">
      <img
        src="https://store.bdtask.com/assets/img/modules/thumbs/rozarpay.jpg"
        alt="Loyalty Program"
        className="mod_thumb_img "
        style={{borderRadius:'.75rem',marginBottom:'15px',width:'100%',height:'190px',objectFit:'cover'}}
      />
    </div>
    <div className="caption">
      <h3 className="d-flex justify-content-between flex-wrap">
        <span className="addon_title">Razorpay        </span>
        <span className="price text-primary">$10.00</span>
      </h3>
      <p className="caption_desc">
      Give points to your favorite customers. Make members among them to give valuable services and discounts.
      </p>
      <p>
        <a
          href="https://store.bdtask.com/payment/1d1b9a3c2a20292986392ccecb78679d"
          target="_blank"
          role="button"
          className="btn btn-primary"
          rel="noopener noreferrer"
        >
          Buy Now
        </a>
      </p>
    </div>
  </div>
</div>
<div className="col-md-4 addonsbox p-4" style={{border:'1px solid #ddd',borderRadius:'.75rem'}}>
  <div className="thumbnail">
    <div className="addon_img">
      <img
        src="https://fb.instasme.com/application/modules/qrapp/assets/images/thumbnail.jpg"
        alt="Loyalty Program"
        className="mod_thumb_img "
        style={{borderRadius:'.75rem',marginBottom:'15px',width:'100%',height:'190px',objectFit:'cover'}}
      />
    </div>
    <div className="caption">
      <h3 className="d-flex justify-content-between">
        <span className="addon_title">Qr Order
        </span>
      </h3>
      <p className="caption_desc">
      Give points to your favorite customers. Make members among them to give valuable services and discounts.

</p>
<div className="d-flex gap-4">
      <p>
        <a
          href="https://store.bdtask.com/payment/1d1b9a3c2a20292986392ccecb78679d"
          target="_blank"
          role="button"
          className="btn btn-danger"
          rel="noopener noreferrer"
        >
          Uninstall
        </a>
      </p>
      <p>
        <a
          href="https://store.bdtask.com/payment/1d1b9a3c2a20292986392ccecb78679d"
          target="_blank"
          role="button"
          className="btn btn-danger"
          rel="noopener noreferrer"
        >
          Delete
        </a>
      </p>
    
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

export default Modules;
