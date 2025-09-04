import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenuItems, setExpandedMenuItems] = useState({});

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Scroll to top when opening menu
    if (!isMobileMenuOpen) {
      window.scrollTo(0, 0);
    }
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMenuItems({}); // Reset all expanded menus when closing
  };

  // Handle submenu toggle
  const toggleSubmenu = (menuKey, e) => {
    e.preventDefault();
    setExpandedMenuItems(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  // Handle body class and overlay
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-active');
    } else {
      document.body.classList.remove('mobile-menu-active');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-active');
    };
  }, [isMobileMenuOpen]);

  // Menu items data structure for easier management
  const menuItems = [
    {
      key: 'home',
      label: 'Home',
      href: 'index.html',
      active: true,
      hasChildren: true,
      children: [
        { label: 'Homepage - 1', href: 'index.html' },
        { label: 'Homepage - 2', href: 'index-2.html' },
        { label: 'Homepage - 3', href: 'index-3.html' },
        { label: 'Homepage - 4', href: 'index-4.html' },
        { label: 'Homepage - 5', href: 'index-5.html' },
        { label: 'Homepage - 6', href: 'index-6.html' },
        { label: 'Homepage - 7', href: 'index-7.html' },
        { label: 'Homepage - 8', href: 'index-8.html' },
        { label: 'Homepage - 9', href: 'index-9.html' },
        { label: 'Homepage - 10', href: 'index-10.html' },
      ]
    },
    {
      key: 'shop',
      label: 'Shop',
      href: 'shop-grid.html',
      hasChildren: true,
      children: [
        { label: 'Shop Grid', href: 'shop-grid.html' },
        { label: 'Shop Grid 2', href: 'shop-grid-2.html' },
        { label: 'Shop List', href: 'shop-list.html' },
        { label: 'Shop List 2', href: 'shop-list-2.html' },
        { label: 'Shop Fullwidth', href: 'shop-fullwidth.html' },
        { label: 'Single Product', href: 'shop-single-product.html' },
        { label: 'Single Product 2', href: 'shop-single-product-2.html' },
        { label: 'Single Product 3', href: 'shop-single-product-3.html' },
        { label: 'Single Product 4', href: 'shop-single-product-4.html' },
        { label: 'Shop Cart', href: 'shop-cart.html' },
        { label: 'Shop Checkout', href: 'shop-checkout.html' },
        { label: 'Shop Compare', href: 'shop-compare.html' },
        { label: 'Shop Wishlist', href: 'shop-wishlist.html' },
      ]
    },
    {
      key: 'vendors',
      label: 'Vendors',
      href: 'shop-vendor-list.html',
      hasChildren: true,
      children: [
        { label: 'Vendors Listing', href: 'shop-vendor-list.html' },
        { label: 'Vendor Single', href: 'shop-vendor-single.html' },
      ]
    },
    {
      key: 'pages',
      label: 'Pages',
      href: '#',
      hasChildren: true,
      children: [
        { label: 'About Us', href: 'page-about-us.html' },
        { label: 'Contact Us', href: 'page-contact.html' },
        { label: 'Careers', href: 'page-careers.html' },
        { label: 'Term and Condition', href: 'page-term.html' },
        { label: 'Register', href: 'page-register.html' },
        { label: 'Login', href: 'page-login.html' },
        { label: 'Error 404', href: 'page-404.html' },
      ]
    },
    {
      key: 'blog',
      label: 'Blog',
      href: 'blog.html',
      hasChildren: true,
      children: [
        { label: 'Blog Grid', href: 'blog.html' },
        { label: 'Blog Grid 2', href: 'blog-2.html' },
        { label: 'Blog List', href: 'blog-list.html' },
        { label: 'Blog Big', href: 'blog-big.html' },
        { label: 'Blog Single - Left sidebar', href: 'blog-single.html' },
        { label: 'Blog Single - Right sidebar', href: 'blog-single-2.html' },
        { label: 'Blog Single - No sidebar', href: 'blog-single-3.html' },
      ]
    },
    {
      key: 'contact',
      label: 'Contact Us',
      href: 'page-contact.html',
      hasChildren: false
    }
  ];

  // Render menu items recursively
  const renderMenuItem = (item, isDesktop = false) => {
    const isExpanded = expandedMenuItems[item.key];
    
    return (
      <li key={item.key} className={`${item.hasChildren ? 'has-children' : ''} ${item.active ? 'active' : ''}`}>
        <a 
          className={item.active ? 'active' : ''} 
          href={item.href}
          onClick={item.hasChildren && !isDesktop ? (e) => toggleSubmenu(item.key, e) : undefined}
        >
          {item.label}
        </a>
        {item.hasChildren && (
          <>
            {!isDesktop && (
              <span 
                className="menu-expand"
                onClick={(e) => toggleSubmenu(item.key, e)}
              >
                <i className={`fi-rr-caret-${isExpanded ? 'up' : 'down'}`}></i>
              </span>
            )}
            <ul 
              className={`sub-menu ${isDesktop ? 'two-col' : ''}`}
              style={!isDesktop ? { 
                display: isExpanded ? 'block' : 'none',
                transition: 'all 0.3s ease'
              } : {}}
            >
              {item.children?.map((child, index) => (
                <li key={index}>
                  <a href={child.href}>{child.label}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
    );
  };

  return (
    <div>
      {/* Body Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="body-overlay-1"
          onClick={closeMobileMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998
          }}
        />
      )}

      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="text-center">
              <img
                className="mb-10"
                src="assets/imgs/template/logo.png"
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
          </div>
        </div>
      </div>

      <header className="header sticky-bar">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <a className="d-flex" href="index.html">
                  <img alt="Ecom" src="assets/imgs/template/logo.png" />
                </a>
              </div>
              
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    {menuItems.map(item => renderMenuItem(item, true))}
                  </ul>
                </nav>
                <div 
                  className={`burger-icon burger-icon-white ${isMobileMenuOpen ? 'burger-close' : ''}`}
                  onClick={toggleMobileMenu}
                >
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
                      <li><a href="page-account.html">My Account</a></li>
                      <li><a href="page-account.html">Order Tracking</a></li>
                      <li><a href="page-account.html">My Orders</a></li>
                      <li><a href="page-account.html">My Wishlist</a></li>
                      <li><a href="page-account.html">Setting</a></li>
                      <li><a href="page-login.html">Sign out</a></li>
                    </ul>
                  </div>
                </div>
                <a className="font-lg icon-list icon-wishlist" href="shop-wishlist.html">
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
                        <img src="assets/imgs/page/homepage1/imgsp5.png" alt="Ecom" />
                      </div>
                      <div className="cart-info">
                        <a className="font-sm-bold color-brand-3" href="shop-single-product.html">
                          2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB SSD
                        </a>
                        <p><span className="color-brand-2 font-sm-bold">1 x $2856.4</span></p>
                      </div>
                    </div>
                    <div className="item-cart mb-20">
                      <div className="cart-image">
                        <img src="assets/imgs/page/homepage1/imgsp4.png" alt="Ecom" />
                      </div>
                      <div className="cart-info">
                        <a className="font-sm-bold color-brand-3" href="shop-single-product-2.html">
                          2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB SSD
                        </a>
                        <p><span className="color-brand-2 font-sm-bold">1 x $2856.4</span></p>
                      </div>
                    </div>
                    <div className="border-bottom pt-0 mb-15" />
                    <div className="cart-total">
                      <div className="row">
                        <div className="col-6 text-start">
                          <span className="font-md-bold color-brand-3">Total</span>
                        </div>
                        <div className="col-6">
                          <span className="font-md-bold color-brand-1">$2586.3</span>
                        </div>
                      </div>
                      <div className="row mt-15">
                        <div className="col-6 text-start">
                          <a className="btn btn-cart w-auto" href="shop-cart.html">View cart</a>
                        </div>
                        <div className="col-6">
                          <a className="btn btn-buy w-auto" href="shop-checkout.html">Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="font-lg icon-list icon-compare" href="shop-compare.html">
                  <span>Compare</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${isMobileMenuOpen ? 'sidebar-visible' : ''}`}
        style={{ zIndex: 999 }}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <a className="d-flex" href="index.html">
                <img alt="Ecom" src="assets/imgs/template/logo.png" />
              </a>
              {/* <button 
                className="mobile-menu-close"
                onClick={closeMobileMenu}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}
              >
                ×
              </button> */}
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    {menuItems.map(item => renderMenuItem(item, false))}
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
                      <p className="font-xs text-muted">You have 3 new messages</p>
                    </div>
                  </div>
                </div>
                <ul className="mobile-menu">
                  <li><a href="page-account.html">My Account</a></li>
                  <li><a href="page-account.html">Order Tracking</a></li>
                  <li><a href="page-account.html">My Orders</a></li>
                  <li><a href="page-account.html">My Wishlist</a></li>
                  <li><a href="page-account.html">Setting</a></li>
                  <li><a href="page-login.html">Sign out</a></li>
                </ul>
              </div>

              <div className="mobile-banner">
                <div className="bg-5 block-iphone">
                  <span className="color-brand-3 font-sm-lh32">Starting from $899</span>
                  <h3 className="font-xl mb-10">iPhone 12 Pro 128Gb</h3>
                  <p className="font-base color-brand-3 mb-10">Special Sale</p>
                  <a className="btn btn-arrow" href="shop-grid.html">learn more</a>
                </div>
              </div>

              <div className="site-copyright color-gray-400 mt-30">
                Copyright 2022 © Ecom - Marketplace Template.
                <br />
                Designed by
                <a href="http://alithemes.com" target="_blank">&nbsp; AliThemes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;