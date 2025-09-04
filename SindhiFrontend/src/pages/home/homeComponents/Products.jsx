import React from 'react'

function Products() {
  return (
   <section className="section-box mt-50">
  <div className="container">
    <div className="head-main bd-gray-200">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <h3 className="mb-5">Trending Products</h3>
          <p className="font-base color-gray-500">
            Shop living room furniture, crafted by designers all over the world
          </p>
        </div>
        <div className="col-xl-6 col-lg-6">
          <ul className="nav nav-tabs text-uppercase pr-100" role="tablist">
            <li>
              <a
                className="active"
                href="#tab-3-all"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-3-all"
                aria-selected="true"
                data-index={1}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#tab-3-bestseller"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-3-bestseller"
                aria-selected="false"
                data-index={2}
              >
                Best seller
              </a>
            </li>
            <li>
              <a
                href="#tab-3-mostviewed"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-3-mostviewed"
                aria-selected="false"
                data-index={3}
              >
                Most viewed
              </a>
            </li>
            <li>
              <a
                href="#tab-3-topbrands"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-3-topbrands"
                aria-selected="false"
                data-index={4}
              >
                Top Brands
              </a>
            </li>
          </ul>
          {/* Button slider*/}
          <div className="box-button-slider">
            <div className="button-slider-nav" id="tab-3-all-nav">
              <div className="swiper-button-next swiper-button-next-tab-1" />
              <div className="swiper-button-prev swiper-button-prev-tab-1" />
            </div>
            <div
              className="button-slider-nav"
              id="tab-3-bestseller-nav"
              style={{ display: "none" }}
            >
              <div className="swiper-button-next swiper-button-next-tab-2" />
              <div className="swiper-button-prev swiper-button-prev-tab-2" />
            </div>
            <div
              className="button-slider-nav"
              id="tab-3-mostviewed-nav"
              style={{ display: "none" }}
            >
              <div className="swiper-button-next swiper-button-next-tab-3" />
              <div className="swiper-button-prev swiper-button-prev-tab-3" />
            </div>
            <div
              className="button-slider-nav"
              id="tab-3-topbrands-nav"
              style={{ display: "none" }}
            >
              <div className="swiper-button-next swiper-button-next-tab-4" />
              <div className="swiper-button-prev swiper-button-prev-tab-4" />
            </div>
          </div>
          {/* End Button slider*/}
        </div>
      </div>
    </div>
    <div className="tab-content tab-content-slider">
      <div
        className="tab-pane fade active show"
        id="tab-3-all"
        role="tabpanel"
        aria-labelledby="tab-3-all"
      >
        <div className="box-swiper">
          <div className="swiper-container swiper-tab-1">
            <div className="swiper-wrapper pt-5">
              <div className="swiper-slide">
                <div className="list-products-5">
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-brand-2">-17%</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp1.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          HP 11.6" Chromebook, AMD A4, 4GB RAM, 32GB Storage
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-danger">Hot</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp2.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          ASUS VivoBook 15.6" 1080p PC Laptops, Intel Core i3
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-success">New</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp3.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          2020 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp4.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp5.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-brand-2">-17%</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp6.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          HP 11.6" Chromebook, AMD A4, 4GB RAM, 32GB Storage
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-danger">Hot</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp7.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          ASUS VivoBook 15.6" 1080p PC Laptops, Intel Core i3
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-success">New</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp8.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          2020 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp9.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp10.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
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
      <div
        className="tab-pane fade"
        id="tab-3-bestseller"
        role="tabpanel"
        aria-labelledby="tab-3-bestseller"
      >
        <div className="box-swiper">
          <div className="swiper-container swiper-tab-2">
            <div className="swiper-wrapper pt-5">
              <div className="swiper-slide">
                <div className="list-products-5">
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-brand-2">-17%</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp1.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          HP 11.6" Chromebook, AMD A4, 4GB RAM, 32GB Storage
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-danger">Hot</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp2.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          ASUS VivoBook 15.6" 1080p PC Laptops, Intel Core i3
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-success">New</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp3.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          2020 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp4.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp5.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-brand-2">-17%</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp6.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          HP 11.6" Chromebook, AMD A4, 4GB RAM, 32GB Storage
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-danger">Hot</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp7.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          ASUS VivoBook 15.6" 1080p PC Laptops, Intel Core i3
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-success">New</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp8.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          2020 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp9.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp10.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
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
      <div
        className="tab-pane fade"
        id="tab-3-mostviewed"
        role="tabpanel"
        aria-labelledby="tab-3-mostviewed"
      >
        <div className="box-swiper">
          <div className="swiper-container swiper-tab-3">
            <div className="swiper-wrapper pt-5">
              <div className="swiper-slide">
                <div className="list-products-5">
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-brand-2">-17%</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp1.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          HP 11.6" Chromebook, AMD A4, 4GB RAM, 32GB Storage
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-danger">Hot</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp2.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          ASUS VivoBook 15.6" 1080p PC Laptops, Intel Core i3
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-success">New</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp3.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          2020 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp4.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp5.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-brand-2">-17%</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp6.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          HP 11.6" Chromebook, AMD A4, 4GB RAM, 32GB Storage
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-danger">Hot</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp7.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          ASUS VivoBook 15.6" 1080p PC Laptops, Intel Core i3
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-success">New</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp8.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          2020 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp9.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp10.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
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
      <div
        className="tab-pane fade"
        id="tab-3-topbrands"
        role="tabpanel"
        aria-labelledby="tab-3-topbrands"
      >
        <div className="box-swiper">
          <div className="swiper-container swiper-tab-4">
            <div className="swiper-wrapper pt-5">
              <div className="swiper-slide">
                <div className="list-products-5">
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-brand-2">-17%</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp1.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          HP 11.6" Chromebook, AMD A4, 4GB RAM, 32GB Storage
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-danger">Hot</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp2.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          ASUS VivoBook 15.6" 1080p PC Laptops, Intel Core i3
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-success">New</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp3.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          2020 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp4.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp5.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-brand-2">-17%</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp6.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          HP 11.6" Chromebook, AMD A4, 4GB RAM, 32GB Storage
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-danger">Hot</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp7.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          ASUS VivoBook 15.6" 1080p PC Laptops, Intel Core i3
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <span className="label bg-success">New</span>
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp8.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          2020 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp9.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-grid-style-3 home6-style">
                    <div className="card-grid-inner">
                      <div className="tools">
                        <a
                          className="btn btn-trend btn-tooltip mb-10"
                          href="#"
                          aria-label="Trend"
                          data-bs-placement="left"
                        />
                        <a
                          className="btn btn-wishlist btn-tooltip mb-10"
                          href="shop-wishlist.html"
                          aria-label="Add To Wishlist"
                        />
                        <a
                          className="btn btn-compare btn-tooltip mb-10"
                          href="shop-compare.html"
                          aria-label="Compare"
                        />
                        <a
                          className="btn btn-quickview btn-tooltip"
                          aria-label="Quick view"
                          href="#ModalQuickview"
                          data-bs-toggle="modal"
                        />
                      </div>
                      <div className="image-box">
                        <a href="shop-single-product-2.html">
                          <img
                            src="assets/imgs/page/homepage6/sp10.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <a
                          className="font-xs color-gray-500"
                          href="shop-vendor-single.html"
                        >
                          Apple
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          MSI Optix G272 27" Full HD LED Gaming LCD Monitor
                        </a>
                        <div className="rating">
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star.svg"
                            alt="Ecom"
                          />
                          <span className="font-xs color-gray-500">(65)</span>
                        </div>
                        <div className="price-info mb-10">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2856.3
                          </strong>
                          <span className="color-gray-500 price-line">
                            $3225.6
                          </span>
                        </div>
                        <div className="mt-10 box-btn-cart">
                          <a className="btn btn-cart" href="shop-cart.html">
                            Add To Cart
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
  </div>
</section>

  )
}

export default Products