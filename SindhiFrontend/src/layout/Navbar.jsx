import React from 'react'

function Navbar() {
  return (
   <div>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="text-center">
              <img
                className="mb-10"
                src="assets/imgs/template/favicon.svg"
                alt="Ecom"
              />
              <div className="preloader-dots" />
            </div>
          </div>
        </div>
      </div>
      <div className="topbar">
        <div className="container-topbar">
          <div className="menu-topbar-left d-none d-xl-block">
            <ul className="nav-small">
              <li>
                <a className="font-xs" href="page-about-us.html">
                  About Us
                </a>
              </li>
              <li>
                <a className="font-xs" href="page-careers.html">
                  Careers
                </a>
              </li>
              <li>
                <a className="font-xs" href="page-register.html">
                  Open a shop
                </a>
              </li>
            </ul>
          </div>
          <div className="info-topbar text-center d-none d-xl-block">
            <span className="font-xs color-brand-3">
              Free shipping for all orders over
            </span>
            <span className="font-sm-bold color-success"> $75.00</span>
          </div>
          <div className="menu-topbar-right">
            <span className="font-xs color-brand-3">Need help? Call Us:</span>
            <span className="font-sm-bold color-success"> + 1800 900</span>
            <div className="dropdown dropdown-language">
              <button
                className="btn dropdown-toggle"
                id="dropdownPage"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                data-bs-display="static"
              >
                <span className="dropdown-right font-xs color-brand-3">
                  <img src="assets/imgs/template/en.svg" alt="Ecom" /> English
                </span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-light"
                aria-labelledby="dropdownPage"
                data-bs-popper="static"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <img src="assets/imgs/template/flag-en.svg" alt="Ecom" />{" "}
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src="assets/imgs/template/flag-fr.svg" alt="Ecom" />{" "}
                    Français
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src="assets/imgs/template/flag-es.svg" alt="Ecom" />{" "}
                    Español
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src="assets/imgs/template/flag-pt.svg" alt="Ecom" />{" "}
                    Português
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src="assets/imgs/template/flag-cn.svg" alt="Ecom" />{" "}
                    中国人
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-language">
              <button
                className="btn dropdown-toggle"
                id="dropdownPage2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                data-bs-display="static"
              >
                <span className="dropdown-right font-xs color-brand-3">
                  USD
                </span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                aria-labelledby="dropdownPage2"
                data-bs-popper="static"
              >
                <li>
                  <a className="dropdown-item active" href="#">
                    USD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    EUR
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    AUD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SGP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header className="header sticky-bar">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <a className="d-flex" href="index.html">
                  <img alt="Ecom" src="assets/imgs/template/logo.svg" />
                </a>
              </div>
              <div className="header-search">
                <div className="box-header-search">
                  <form className="form-search" method="post" action="#">
                    <div className="box-category">
                      <select className="select-active select2-hidden-accessible">
                        <option>All categories</option>
                        <option value="Computers Accessories">
                          Computers Accessories
                        </option>
                        <option value="Cell Phones">Cell Phones</option>
                        <option value="Gaming Gatgets">Gaming Gatgets</option>
                        <option value="Smart watches">Smart watches</option>
                        <option value="Wired Headphone">Wired Headphone</option>
                        <option value="Mouse & Keyboard">Mouse Keyboard</option>
                        <option value="Headphone">Headphone</option>
                        <option value="Bluetooth devices">
                          Bluetooth devices
                        </option>
                        <option value="Cloud Software">Cloud Software</option>
                      </select>
                    </div>
                    <div className="box-keysearch">
                      <input
                        className="form-control font-xs"
                        type="text"
                        defaultValue
                        placeholder="Search for items"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li className="has-children">
                      <a className="active" href="index.html">
                        Home
                      </a>
                      <ul className="sub-menu two-col">
                        <li>
                          <a href="index.html">Homepage - 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Homepage - 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Homepage - 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Homepage - 4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Homepage - 5</a>
                        </li>
                        <li>
                          <a href="index-6.html">Homepage - 6</a>
                        </li>
                        <li>
                          <a href="index-7.html">Homepage - 7</a>
                        </li>
                        <li>
                          <a href="index-8.html">Homepage - 8</a>
                        </li>
                        <li>
                          <a href="index-9.html">Homepage - 9</a>
                        </li>
                        <li>
                          <a href="index-10.html">Homepage - 10</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="shop-grid.html">Shop</a>
                      <ul className="sub-menu two-col">
                        <li>
                          <a href="shop-grid.html">Shop Grid</a>
                        </li>
                        <li>
                          <a href="shop-grid-2.html">Shop Grid 2</a>
                        </li>
                        <li>
                          <a href="shop-list.html">Shop list - Left sidebar</a>
                        </li>
                        <li>
                          <a href="shop-list-2.html">
                            Shop list - Right sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth.html">Shop Fullwidth</a>
                        </li>
                        <li>
                          <a href="shop-single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="shop-single-product-2.html">
                            Single Product 2
                          </a>
                        </li>
                        <li>
                          <a href="shop-single-product-3.html">
                            Single Product 3
                          </a>
                        </li>
                        <li>
                          <a href="shop-single-product-4.html">
                            Single Product 4
                          </a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Shop Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Shop Checkout</a>
                        </li>
                        <li>
                          <a href="shop-compare.html">Shop Compare</a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html">Shop Wishlist</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="shop-vendor-list.html">Vendors</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop-vendor-list.html">Vendors Listing</a>
                        </li>
                        <li>
                          <a href="shop-vendor-single.html">Vendor Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="page-about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="page-contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="page-careers.html">Careers</a>
                        </li>
                        <li>
                          <a href="page-term.html">Term and Condition</a>
                        </li>
                        <li>
                          <a href="page-register.html">Register</a>
                        </li>
                        <li>
                          <a href="page-login.html">Login</a>
                        </li>
                        <li>
                          <a href="page-404.html">Error 404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="blog.html">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog - No Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-2.html">Blog - Right Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-big.html">Blog category big</a>
                        </li>
                        <li>
                          <a href="blog-single.html">
                            Blog Single - Left sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-2.html">
                            Blog Single - Right sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-3.html">
                            Blog Single - No sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="page-contact.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
              <div className="header-shop">
                <div className="d-inline-block box-dropdown-cart">
                  <span className="font-lg icon-list icon-account">
                    <span>Account</span>
                  </span>
                  <div className="dropdown-account">
                    <ul>
                      <li>
                        <a href="page-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="page-account.html">Order Tracking</a>
                      </li>
                      <li>
                        <a href="page-account.html">My Orders</a>
                      </li>
                      <li>
                        <a href="page-account.html">My Wishlist</a>
                      </li>
                      <li>
                        <a href="page-account.html">Setting</a>
                      </li>
                      <li>
                        <a href="page-login.html">Sign out</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  className="font-lg icon-list icon-wishlist"
                  href="shop-wishlist.html"
                >
                  <span>Wishlist</span>
                  <span className="number-item font-xs">5</span>
                </a>
                <div className="d-inline-block box-dropdown-cart">
                  <span className="font-lg icon-list icon-cart">
                    <span>Cart</span>
                    <span className="number-item font-xs">2</span>
                  </span>
                  <div className="dropdown-cart">
                    <div className="item-cart mb-20">
                      <div className="cart-image">
                        <img
                          src="assets/imgs/page/homepage1/imgsp5.png"
                          alt="Ecom"
                        />
                      </div>
                      <div className="cart-info">
                        <a
                          className="font-sm-bold color-brand-3"
                          href="shop-single-product.html"
                        >
                          2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB
                          SSD
                        </a>
                        <p>
                          <span className="color-brand-2 font-sm-bold">
                            1 x $2856.4
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="item-cart mb-20">
                      <div className="cart-image">
                        <img
                          src="assets/imgs/page/homepage1/imgsp4.png"
                          alt="Ecom"
                        />
                      </div>
                      <div className="cart-info">
                        <a
                          className="font-sm-bold color-brand-3"
                          href="shop-single-product-2.html"
                        >
                          2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB
                          SSD
                        </a>
                        <p>
                          <span className="color-brand-2 font-sm-bold">
                            1 x $2856.4
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="border-bottom pt-0 mb-15" />
                    <div className="cart-total">
                      <div className="row">
                        <div className="col-6 text-start">
                          <span className="font-md-bold color-brand-3">
                            Total
                          </span>
                        </div>
                        <div className="col-6">
                          <span className="font-md-bold color-brand-1">
                            $2586.3
                          </span>
                        </div>
                      </div>
                      <div className="row mt-15">
                        <div className="col-6 text-start">
                          <a
                            className="btn btn-cart w-auto"
                            href="shop-cart.html"
                          >
                            View cart
                          </a>
                        </div>
                        <div className="col-6">
                          <a
                            className="btn btn-buy w-auto"
                            href="shop-checkout.html"
                          >
                            Checkout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="font-lg icon-list icon-compare"
                  href="shop-compare.html"
                >
                  <span>Compare</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <a className="d-flex" href="index.html">
                <img alt="Ecom" src="assets/imgs/template/logo.svg" />
              </a>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    <li className="has-children">
                      <a className="active" href="index.html">
                        Home
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Homepage - 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Homepage - 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Homepage - 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Homepage - 4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Homepage - 5</a>
                        </li>
                        <li>
                          <a href="index-6.html">Homepage - 6</a>
                        </li>
                        <li>
                          <a href="index-7.html">Homepage - 7</a>
                        </li>
                        <li>
                          <a href="index-8.html">Homepage - 8</a>
                        </li>
                        <li>
                          <a href="index-9.html">Homepage - 9</a>
                        </li>
                        <li>
                          <a href="index-10.html">Homepage - 10</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="shop-grid.html">Shop</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop-grid.html">Shop Grid</a>
                        </li>
                        <li>
                          <a href="shop-grid-2.html">Shop Grid 2</a>
                        </li>
                        <li>
                          <a href="shop-list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="shop-list-2.html">Shop List 2</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth.html">Shop Fullwidth</a>
                        </li>
                        <li>
                          <a href="shop-single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="shop-single-product-2.html">
                            Single Product 2
                          </a>
                        </li>
                        <li>
                          <a href="shop-single-product-3.html">
                            Single Product 3
                          </a>
                        </li>
                        <li>
                          <a href="shop-single-product-4.html">
                            Single Product 4
                          </a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Shop Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Shop Checkout</a>
                        </li>
                        <li>
                          <a href="shop-compare.html">Shop Compare</a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html">Shop Wishlist</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="shop-vendor-list.html">Vendors</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop-vendor-list.html">Vendors Listing</a>
                        </li>
                        <li>
                          <a href="shop-vendor-single.html">Vendor Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="page-about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="page-contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="page-careers.html">Careers</a>
                        </li>
                        <li>
                          <a href="page-term.html">Term and Condition</a>
                        </li>
                        <li>
                          <a href="page-register.html">Register</a>
                        </li>
                        <li>
                          <a href="page-login.html">Login</a>
                        </li>
                        <li>
                          <a href="page-404.html">Error 404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="blog.html">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-2.html">Blog Grid 2</a>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-big.html">Blog Big</a>
                        </li>
                        <li>
                          <a href="blog-single.html">
                            Blog Single - Left sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-2.html">
                            Blog Single - Right sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-3.html">
                            Blog Single - No sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="page-contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account">
                <div className="mobile-header-top">
                  <div className="user-account">
                    <a href="page-account.html">
                      <img src="assets/imgs/template/ava_1.png" alt="Ecom" />
                    </a>
                    <div className="content">
                      <h6 className="user-name">
                        Hello<span className="text-brand"> Steven !</span>
                      </h6>
                      <p className="font-xs text-muted">
                        You have 3 new messages
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mobile-menu">
                  <li>
                    <a href="page-account.html">My Account</a>
                  </li>
                  <li>
                    <a href="page-account.html">Order Tracking</a>
                  </li>
                  <li>
                    <a href="page-account.html">My Orders</a>
                  </li>
                  <li>
                    <a href="page-account.html">My Wishlist</a>
                  </li>
                  <li>
                    <a href="page-account.html">Setting</a>
                  </li>
                  <li>
                    <a href="page-login.html">Sign out</a>
                  </li>
                </ul>
              </div>
              <div className="mobile-banner">
                <div className="bg-5 block-iphone">
                  <span className="color-brand-3 font-sm-lh32">
                    Starting from $899
                  </span>
                  <h3 className="font-xl mb-10">iPhone 12 Pro 128Gb</h3>
                  <p className="font-base color-brand-3 mb-10">Special Sale</p>
                  <a className="btn btn-arrow" href="shop-grid.html">
                    learn more
                  </a>
                </div>
              </div>
              <div className="site-copyright color-gray-400 mt-30">
                Copyright 2022 © Ecom - Marketplace Template.
                <br />
                Designed by
                <a href="http://alithemes.com" target="_blank">
                  &nbsp; AliThemes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-left">
        <a className="btn btn-open" href="#" />
        <ul className="menu-icons hidden">
          <li>
            <a href="javascript:void(0)">
              <img src="assets/imgs/template/monitor.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="assets/imgs/template/mobile.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/game.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/clock.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/airpod.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/airpods.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/mouse.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/music-play.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/bluetooth.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/clound.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/electricity.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/cpu.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/devices.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/driver.svg" alt="Ecom" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imgs/template/lamp.svg" alt="Ecom" />
            </a>
          </li>
        </ul>
        <ul className="menu-texts menu-close">
          <li className="has-children">
            <a href="shop-grid-2.html">
              <span className="img-link">
                <img src="assets/imgs/template/monitor.svg" alt="Ecom" />
              </span>
              <span className="text-link">Computers &amp; Accessories</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Computer Accessories</a>
              </li>
              <li>
                <a href="shop-grid.html">Computer Cases</a>
              </li>
              <li>
                <a href="shop-grid.html">Laptop</a>
              </li>
              <li>
                <a href="shop-grid.html">HDD</a>
              </li>
              <li>
                <a href="shop-grid.html">RAM</a>
              </li>
              <li>
                <a href="shop-grid.html">Headphone</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="#">
              <span className="img-link">
                <img src="assets/imgs/template/mobile.svg" alt="Ecom" />
              </span>
              <span className="text-link">Cell Phones</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Phone Accessories</a>
              </li>
              <li>
                <a href="shop-grid.html">Phone Cases</a>
              </li>
              <li>
                <a href="shop-grid.html">Postpaid Phones</a>
              </li>
              <li>
                <a href="shop-grid.html">Unlocked Phones</a>
              </li>
              <li>
                <a href="shop-grid.html">Prepaid Phones</a>
              </li>
              <li>
                <a href="shop-grid.html">Prepaid Plans</a>
              </li>
              <li>
                <a href="shop-grid.html">Refurbished Phones</a>
              </li>
              <li>
                <a href="shop-grid.html">Straight Talk</a>
              </li>
              <li>
                <a href="shop-grid.html">iPhone</a>
              </li>
              <li>
                <a href="shop-grid.html">Samsung Galaxy</a>
              </li>
              <li>
                <a href="shop-grid.html">Samsung Galaxy</a>
              </li>
              <li>
                <a href="shop-grid.html">Samsung Galaxy</a>
              </li>
              <li>
                <a href="shop-grid.html">Samsung Galaxy</a>
              </li>
              <li>
                <a href="shop-grid.html">Samsung Galaxy</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/game.svg" alt="Ecom" />
              </span>
              <span className="text-link">Gaming Gatgets</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Wireless Routers</a>
              </li>
              <li>
                <a href="shop-grid.html">Cool New Gadgets</a>
              </li>
              <li>
                <a href="shop-grid.html">Tech and Gadgets</a>
              </li>
              <li>
                <a href="shop-grid.html">Geek Gifts and Gadgets</a>
              </li>
              <li>
                <a href="shop-grid.html">Xbox Accessories</a>
              </li>
              <li>
                <a href="shop-grid.html">PlayStation Accessories</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/clock.svg" alt="Ecom" />
              </span>
              <span className="text-link">Smart watches</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Smart Watches</a>
              </li>
              <li>
                <a href="shop-grid.html">Fashion Smart Watches</a>
              </li>
              <li>
                <a href="shop-grid.html">Smart Bracelets</a>
              </li>
              <li>
                <a href="shop-grid.html">Pocket Watches</a>
              </li>
              <li>
                <a href="shop-grid.html">Smart Rings</a>
              </li>
              <li>
                <a href="shop-grid.html">Other Watches</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/airpods.svg" alt="Ecom" />
              </span>
              <span className="text-link">Wired Headphone</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">On-Ear Headphones</a>
              </li>
              <li>
                <a href="shop-grid.html">Earbud &amp; In-Ear</a>
              </li>
              <li>
                <a href="shop-grid.html">DJ Headphones</a>
              </li>
              <li>
                <a href="shop-grid.html">PC Accessories</a>
              </li>
              <li>
                <a href="shop-grid.html">PC Game Headsets</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/mouse.svg" alt="Ecom" />
              </span>
              <span className="text-link">Mouse &amp; Keyboard</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Logitech</a>
              </li>
              <li>
                <a href="shop-grid.html">Redragon</a>
              </li>
              <li>
                <a href="shop-grid.html">Amazon Basics</a>
              </li>
              <li>
                <a href="shop-grid.html">Microsoft</a>
              </li>
              <li>
                <a href="shop-grid.html">MageGee</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/music-play.svg" alt="Ecom" />
              </span>
              <span className="text-link">Headphone</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Car Audio Systems</a>
              </li>
              <li>
                <a href="shop-grid.html">Cellphones</a>
              </li>
              <li>
                <a href="shop-grid.html">Desktops</a>
              </li>
              <li>
                <a href="shop-grid.html">Gaming Consoles</a>
              </li>
              <li>
                <a href="shop-grid.html">Telephones</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/bluetooth.svg" alt="Ecom" />
              </span>
              <span className="text-link">Bluetooth devices</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Player Accessories</a>
              </li>
              <li>
                <a href="shop-grid.html">Computer Accessories</a>
              </li>
              <li>
                <a href="shop-grid.html">Speakers &amp; Audio</a>
              </li>
              <li>
                <a href="shop-grid.html">Computer Networking</a>
              </li>
              <li>
                <a href="shop-grid.html">Movies &amp; Films</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/clound.svg" alt="Ecom" />
              </span>
              <span className="text-link">Cloud Software</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Android</a>
              </li>
              <li>
                <a href="shop-grid.html">Linux &amp; Unix</a>
              </li>
              <li>
                <a href="shop-grid.html">Macintosh</a>
              </li>
              <li>
                <a href="shop-grid.html">Windows</a>
              </li>
              <li>
                <a href="shop-grid.html">iPhone &amp; iOS</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/electricity.svg" alt="Ecom" />
              </span>
              <span className="text-link">Electric accessories</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Antenna Toppers</a>
              </li>
              <li>
                <a href="shop-grid.html">Automotive Body Armor</a>
              </li>
              <li>
                <a href="shop-grid.html">Power Inverter</a>
              </li>
              <li>
                <a href="shop-grid.html">Gas Tank Doors</a>
              </li>
              <li>
                <a href="shop-grid.html">Hood Scoops &amp; Vents</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/cpu.svg" alt="Ecom" />
              </span>
              <span className="text-link">Mainboard &amp; CPU</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Computer CPU Processors</a>
              </li>
              <li>
                <a href="shop-grid.html">Internal Fans &amp; Cooling</a>
              </li>
              <li>
                <a href="shop-grid.html">Graphics Cards</a>
              </li>
              <li>
                <a href="shop-grid.html">Network I/O Port Cards</a>
              </li>
              <li>
                <a href="shop-grid.html">Internal Memory Card</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/devices.svg" alt="Ecom" />
              </span>
              <span className="text-link">Desktop PC</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Graphic PC</a>
              </li>
              <li>
                <a href="shop-grid.html">Office PC</a>
              </li>
              <li>
                <a href="shop-grid.html">Gaming PC</a>
              </li>
              <li>
                <a href="shop-grid.html">Server</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/driver.svg" alt="Ecom" />
              </span>
              <span className="text-link">Speaker</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">JBL</a>
              </li>
              <li>
                <a href="shop-grid.html">Anker</a>
              </li>
              <li>
                <a href="shop-grid.html">Pyle</a>
              </li>
              <li>
                <a href="shop-grid.html">Bose</a>
              </li>
              <li>
                <a href="shop-grid.html">Logitech</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/airpod.svg" alt="Ecom" />
              </span>
              <span className="text-link">Bluetooth Headphone</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">On-Ear Headphones</a>
              </li>
              <li>
                <a href="shop-grid.html">In-Ear Headphones</a>
              </li>
              <li>
                <a href="shop-grid.html">Earbud</a>
              </li>
              <li>
                <a href="shop-grid.html">Over-Ear Headphones</a>
              </li>
              <li>
                <a href="shop-grid.html">Other</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="shop-grid.html">
              <span className="img-link">
                <img src="assets/imgs/template/lamp.svg" alt="Ecom" />
              </span>
              <span className="text-link">Computer Decor</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="shop-grid.html">Copyholders</a>
              </li>
              <li>
                <a href="shop-grid.html">Office Bookends</a>
              </li>
              <li>
                <a href="shop-grid.html">Business Card Holders</a>
              </li>
              <li>
                <a href="shop-grid.html">Lap Desks</a>
              </li>
              <li>
                <a href="shop-grid.html">Mouse Pads</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <a className="d-flex" href="index.html">
                <img alt="Ecom" src="assets/imgs/template/logo.svg" />
              </a>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    <li className="has-children">
                      <a className="active" href="index.html">
                        Home
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Homepage - 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Homepage - 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Homepage - 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Homepage - 4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Homepage - 5</a>
                        </li>
                        <li>
                          <a href="index-6.html">Homepage - 6</a>
                        </li>
                        <li>
                          <a href="index-7.html">Homepage - 7</a>
                        </li>
                        <li>
                          <a href="index-8.html">Homepage - 8</a>
                        </li>
                        <li>
                          <a href="index-9.html">Homepage - 9</a>
                        </li>
                        <li>
                          <a href="index-10.html">Homepage - 10</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="shop-grid.html">Shop</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop-grid.html">Shop Grid</a>
                        </li>
                        <li>
                          <a href="shop-grid-2.html">Shop Grid 2</a>
                        </li>
                        <li>
                          <a href="shop-list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="shop-list-2.html">Shop List 2</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth.html">Shop Fullwidth</a>
                        </li>
                        <li>
                          <a href="shop-single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="shop-single-product-2.html">
                            Single Product 2
                          </a>
                        </li>
                        <li>
                          <a href="shop-single-product-3.html">
                            Single Product 3
                          </a>
                        </li>
                        <li>
                          <a href="shop-single-product-4.html">
                            Single Product 4
                          </a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Shop Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Shop Checkout</a>
                        </li>
                        <li>
                          <a href="shop-compare.html">Shop Compare</a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html">Shop Wishlist</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="shop-vendor-list.html">Vendors</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop-vendor-list.html">Vendors Listing</a>
                        </li>
                        <li>
                          <a href="shop-vendor-single.html">Vendor Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="page-about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="page-contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="page-careers.html">Careers</a>
                        </li>
                        <li>
                          <a href="page-term.html">Term and Condition</a>
                        </li>
                        <li>
                          <a href="page-register.html">Register</a>
                        </li>
                        <li>
                          <a href="page-login.html">Login</a>
                        </li>
                        <li>
                          <a href="page-404.html">Error 404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="blog.html">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-2.html">Blog Grid 2</a>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-big.html">Blog Big</a>
                        </li>
                        <li>
                          <a href="blog-single.html">
                            Blog Single - Left sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-2.html">
                            Blog Single - Right sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-3.html">
                            Blog Single - No sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="page-contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account">
                <div className="mobile-header-top">
                  <div className="user-account">
                    <a href="page-account.html">
                      <img src="assets/imgs/template/ava_1.png" alt="Ecom" />
                    </a>
                    <div className="content">
                      <h6 className="user-name">
                        Hello<span className="text-brand"> Steven !</span>
                      </h6>
                      <p className="font-xs text-muted">
                        You have 3 new messages
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mobile-menu">
                  <li>
                    <a href="page-account.html">My Account</a>
                  </li>
                  <li>
                    <a href="page-account.html">Order Tracking</a>
                  </li>
                  <li>
                    <a href="page-account.html">My Orders</a>
                  </li>
                  <li>
                    <a href="page-account.html">My Wishlist</a>
                  </li>
                  <li>
                    <a href="page-account.html">Setting</a>
                  </li>
                  <li>
                    <a href="page-login.html">Sign out</a>
                  </li>
                </ul>
              </div>
              <div className="mobile-banner">
                <div className="bg-5 block-iphone">
                  <span className="color-brand-3 font-sm-lh32">
                    Starting from $899
                  </span>
                  <h3 className="font-xl mb-10">iPhone 12 Pro 128Gb</h3>
                  <p className="font-base color-brand-3 mb-10">Special Sale</p>
                  <a className="btn btn-arrow" href="shop-grid.html">
                    learn more
                  </a>
                </div>
              </div>
              <div className="site-copyright color-gray-400 mt-30">
                Copyright 2022 © Ecom - Marketplace Template.
                <br />
                Designed by
                <a href="http://alithemes.com" target="_blank">
                  &nbsp; AliThemes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar