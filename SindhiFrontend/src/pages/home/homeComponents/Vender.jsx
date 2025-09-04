import React from 'react'

function Vender() {
  return (
  <section className="section-box shop-template mt-0">
  <div className="container">
    <h2>Best Services Provider</h2>
    <div className="row align-items-center">
      <div className="col-lg-6 mb-30">
        <p className="font-md color-gray-500">
          We have<span className="font-md-bold color-brand-3"> 780</span>
          <span> vendors now</span>
        </p>
      </div>
      <div className="col-lg-6 mb-30 text-end">
        <a className="font-sm color-gray-900 mr-30" href="#">
          Support Ticket
        </a>
        <a className="font-sm color-gray-900 mr-30" href="#">
          Become an Affilate
        </a>
        <a
          className="btn btn-buy w-auto font-sm-bold"
          href="page-register.html"
        >
          Open a Shop
        </a>
      </div>
    </div>
    <div className="border-bottom pt-0 mb-30" />
    <div className="row">
      <div className="col-lg-9 order-first order-lg-last">
        <div className="box-filters mt-0 pb-5 border-bottom">
          <div className="row">
            <div className="col-xl-2 col-lg-3 mb-10 text-lg-start text-center">
              <a
                className="btn btn-filter font-sm color-brand-3 font-medium"
                href="#ModalFiltersForm"
                data-bs-toggle="modal"
              >
                All Fillters
              </a>
            </div>
            <div className="col-xl-10 col-lg-9 mb-10 text-lg-end text-center">
              <span className="font-sm color-gray-900 font-medium border-1-right span">
                Showing 1–16 of 17 results
              </span>
              <div className="d-inline-block">
                <span className="font-sm color-gray-500 font-medium">
                  Sort by:
                </span>
                <div className="dropdown dropdown-sort border-1-right">
                  <button
                    className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                    id="dropdownSort"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Latest added
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="dropdownSort"
                    style={{ margin: 0 }}
                  >
                    <li>
                      <a className="dropdown-item active" href="#">
                        Latest added
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Oldest added
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Comments added
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-inline-block">
                <span className="font-sm color-gray-500 font-medium">Show</span>
                <div className="dropdown dropdown-sort border-1-right">
                  <button
                    className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                    id="dropdownSort2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                  >
                    <span>30 items</span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="dropdownSort2"
                  >
                    <li>
                      <a className="dropdown-item active" href="#">
                        30 items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        50 items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        100 items
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-inline-block">
                <a
                  className="view-type-grid mr-5 active"
                  href="shop-vendor-list.html"
                />
                <a className="view-type-list" href="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-20">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-vendor">
              <div className="card-top-vendor">
                <div className="card-top-vendor-left">
                  <img src="assets/imgs/page/vendor/futur.png" alt="Ecom" />
                  <div className="rating">
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                </div>
                <div className="card-top-vendor-right">
                  <a className="btn btn-gray" href="shop-vendor-single.html">
                    360 Products
                  </a>
                  <p className="font-xs color-gray-500 mt-10">
                    Member since 2012
                  </p>
                </div>
              </div>
              <div className="card-bottom-vendor">
                <p className="font-sm color-gray-500 location mb-10">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </p>
                <p className="font-sm color-gray-500 phone">
                  (+91) - 540-025-124553
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-vendor">
              <div className="card-top-vendor">
                <div className="card-top-vendor-left">
                  <img src="assets/imgs/page/vendor/elmado.png" alt="Ecom" />
                  <div className="rating">
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                </div>
                <div className="card-top-vendor-right">
                  <a className="btn btn-gray" href="shop-vendor-single.html">
                    360 Products
                  </a>
                  <p className="font-xs color-gray-500 mt-10">
                    Member since 2012
                  </p>
                </div>
              </div>
              <div className="card-bottom-vendor">
                <p className="font-sm color-gray-500 location mb-10">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </p>
                <p className="font-sm color-gray-500 phone">
                  (+91) - 540-025-124553
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-vendor">
              <div className="card-top-vendor">
                <div className="card-top-vendor-left">
                  <img src="assets/imgs/page/vendor/costctrl.png" alt="Ecom" />
                  <div className="rating">
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                </div>
                <div className="card-top-vendor-right">
                  <a className="btn btn-gray" href="shop-vendor-single.html">
                    360 Products
                  </a>
                  <p className="font-xs color-gray-500 mt-10">
                    Member since 2012
                  </p>
                </div>
              </div>
              <div className="card-bottom-vendor">
                <p className="font-sm color-gray-500 location mb-10">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </p>
                <p className="font-sm color-gray-500 phone">
                  (+91) - 540-025-124553
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-vendor">
              <div className="card-top-vendor">
                <div className="card-top-vendor-left">
                  <img src="assets/imgs/page/vendor/fasfox.png" alt="Ecom" />
                  <div className="rating">
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                </div>
                <div className="card-top-vendor-right">
                  <a className="btn btn-gray" href="shop-vendor-single.html">
                    360 Products
                  </a>
                  <p className="font-xs color-gray-500 mt-10">
                    Member since 2012
                  </p>
                </div>
              </div>
              <div className="card-bottom-vendor">
                <p className="font-sm color-gray-500 location mb-10">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </p>
                <p className="font-sm color-gray-500 phone">
                  (+91) - 540-025-124553
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-vendor">
              <div className="card-top-vendor">
                <div className="card-top-vendor-left">
                  <img src="assets/imgs/page/vendor/elmado.png" alt="Ecom" />
                  <div className="rating">
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                </div>
                <div className="card-top-vendor-right">
                  <a className="btn btn-gray" href="shop-vendor-single.html">
                    360 Products
                  </a>
                  <p className="font-xs color-gray-500 mt-10">
                    Member since 2012
                  </p>
                </div>
              </div>
              <div className="card-bottom-vendor">
                <p className="font-sm color-gray-500 location mb-10">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </p>
                <p className="font-sm color-gray-500 phone">
                  (+91) - 540-025-124553
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-vendor">
              <div className="card-top-vendor">
                <div className="card-top-vendor-left">
                  <img src="assets/imgs/page/vendor/fasfox.png" alt="Ecom" />
                  <div className="rating">
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                </div>
                <div className="card-top-vendor-right">
                  <a className="btn btn-gray" href="shop-vendor-single.html">
                    360 Products
                  </a>
                  <p className="font-xs color-gray-500 mt-10">
                    Member since 2012
                  </p>
                </div>
              </div>
              <div className="card-bottom-vendor">
                <p className="font-sm color-gray-500 location mb-10">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </p>
                <p className="font-sm color-gray-500 phone">
                  (+91) - 540-025-124553
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-vendor">
              <div className="card-top-vendor">
                <div className="card-top-vendor-left">
                  <img src="assets/imgs/page/vendor/tropper.png" alt="Ecom" />
                  <div className="rating">
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                </div>
                <div className="card-top-vendor-right">
                  <a className="btn btn-gray" href="shop-vendor-single.html">
                    360 Products
                  </a>
                  <p className="font-xs color-gray-500 mt-10">
                    Member since 2012
                  </p>
                </div>
              </div>
              <div className="card-bottom-vendor">
                <p className="font-sm color-gray-500 location mb-10">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </p>
                <p className="font-sm color-gray-500 phone">
                  (+91) - 540-025-124553
                </p>
              </div>
            </div>
          </div>
          
          
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-vendor">
              <div className="card-top-vendor">
                <div className="card-top-vendor-left">
                  <img src="assets/imgs/page/vendor/aslan.png" alt="Ecom" />
                  <div className="rating">
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                </div>
                <div className="card-top-vendor-right">
                  <a className="btn btn-gray" href="shop-vendor-single.html">
                    360 Products
                  </a>
                  <p className="font-xs color-gray-500 mt-10">
                    Member since 2012
                  </p>
                </div>
              </div>
              <div className="card-bottom-vendor">
                <p className="font-sm color-gray-500 location mb-10">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </p>
                <p className="font-sm color-gray-500 phone">
                  (+91) - 540-025-124553
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-vendor">
              <div className="card-top-vendor">
                <div className="card-top-vendor-left">
                  <img src="assets/imgs/page/vendor/market.png" alt="Ecom" />
                  <div className="rating">
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <img src="assets/imgs/template/icons/star.svg" alt="Ecom" />
                    <span className="font-xs color-gray-500"> (65)</span>
                  </div>
                </div>
                <div className="card-top-vendor-right">
                  <a className="btn btn-gray" href="shop-vendor-single.html">
                    360 Products
                  </a>
                  <p className="font-xs color-gray-500 mt-10">
                    Member since 2012
                  </p>
                </div>
              </div>
              <div className="card-bottom-vendor">
                <p className="font-sm color-gray-500 location mb-10">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </p>
                <p className="font-sm color-gray-500 phone">
                  (+91) - 540-025-124553
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 order-last order-lg-first">
        <div className="box-slider-item">
          <div className="head pb-15 border-brand-2">
            <h5 className="color-gray-900">Vendor by tags</h5>
          </div>
          <div className="content-slider mb-50">
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Games
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Electronics
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Video
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Cellphone
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Indoor
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              VGA Card
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              USB
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Lightning
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Camera
            </a>
            <a className="btn btn-border" href="shop-vendor-list.html">
              Window
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Air Vent
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Bedroom
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Laptop
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Dashboard
            </a>
            <a className="btn btn-border mr-5" href="shop-vendor-list.html">
              Keyboard
            </a>
          </div>
        </div>
        <div className="box-slider-item">
          <div className="head pb-15 border-brand-2 mb-20">
            <h5 className="color-gray-900">Make money with us</h5>
          </div>
          <div className="content-slider mb-50">
            <div className="footer">
              <ul className="menu-footer">
                <li>
                  <a href="#">Open shop on Ecom</a>
                </li>
                <li>
                  <a href="#">Sell Your Services on Ecom</a>
                </li>
                <li>
                  <a href="#">Sell on Ecom Business</a>
                </li>
                <li>
                  <a href="#">Sell Your Apps on Ecom</a>
                </li>
                <li>
                  <a href="#">Become an Affilate</a>
                </li>
                <li>
                  <a href="#">Advertise Your Products</a>
                </li>
                <li>
                  <a href="#">Sell-Publish with Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Vender