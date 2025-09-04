import React from 'react'

function DeliveryFeatures() {
  return (
    <>
    <section className="section-box mt-90 mb-50">
  <div className="container">
    <ul className="list-col-5">
      <li>
        <div className="item-list">
          <div className="icon-left">
            <img src="assets/imgs/template/delivery.svg" alt="Ecom" />
          </div>
          <div className="info-right">
            <h5 className="font-lg-bold color-gray-100">Free Delivery</h5>
            <p className="font-sm color-gray-500">From all orders over $10</p>
          </div>
        </div>
      </li>
      <li>
        <div className="item-list">
          <div className="icon-left">
            <img src="assets/imgs/template/support.svg" alt="Ecom" />
          </div>
          <div className="info-right">
            <h5 className="font-lg-bold color-gray-100">Support 24/7</h5>
            <p className="font-sm color-gray-500">Shop with an expert</p>
          </div>
        </div>
      </li>
      <li>
        <div className="item-list">
          <div className="icon-left">
            <img src="assets/imgs/template/voucher.svg" alt="Ecom" />
          </div>
          <div className="info-right">
            <h5 className="font-lg-bold color-gray-100">Gift voucher</h5>
            <p className="font-sm color-gray-500">Refer a friend</p>
          </div>
        </div>
      </li>
      <li>
        <div className="item-list">
          <div className="icon-left">
            <img src="assets/imgs/template/return.svg" alt="Ecom" />
          </div>
          <div className="info-right">
            <h5 className="font-lg-bold color-gray-100">Return &amp; Refund</h5>
            <p className="font-sm color-gray-500">Free return over $200</p>
          </div>
        </div>
      </li>
      <li>
        <div className="item-list">
          <div className="icon-left">
            <img src="assets/imgs/template/secure.svg" alt="Ecom" />
          </div>
          <div className="info-right">
            <h5 className="font-lg-bold color-gray-100">Secure payment</h5>
            <p className="font-sm color-gray-500">100% Protected</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
    </section>
    <section className="section-box box-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 col-sm-12">
            <h3 className="color-white">
              Subscrible &amp; Get <span className="color-warning">10%</span>{" "}
              Discount
            </h3>
            <p className="font-lg color-white">
              Get E-mail updates about our latest shop and{" "}
              <span className="font-lg-bold">special offers.</span>
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="box-form-newsletter mt-15">
              <form className="form-newsletter">
                <input
                  className="input-newsletter font-xs"
                  defaultValue=""
                  placeholder="Your email Address"
                />
                <button className="btn btn-brand-2">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default DeliveryFeatures