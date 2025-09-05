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
    setExpandedMenuItems((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  // Handle body class and overlay
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-active");
    } else {
      document.body.classList.remove("mobile-menu-active");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("mobile-menu-active");
    };
  }, [isMobileMenuOpen]);

  // Menu items data structure for easier management
  const menuItems = [
    {
      key: "home",
      label: "Home",
      href: "/",
      active: true,
    },
    {
      key: "shop",
      label: "Top Services",
      href: "#",
    },
    {
      key: "vendors",
      label: "Top Vendors",
      href: "#",
    },
    {
      key: "pages",
      label: "We Are Hiring",
      href: "#",
    },

  
    {
      key: "pages",
      label: "Become a Seller",
      href: "#",
    },
    {
      key: "pages",
      label: "Contact Us",
      href: "/contact",
    },
  ];

  // Render menu items recursively
  const renderMenuItem = (item, isDesktop = false) => {
    const isExpanded = expandedMenuItems[item.key];

    return (
      <li
        key={item.key}
        className={`${item.hasChildren ? "has-children" : ""} ${
          item.active ? "active" : ""
        }`}
      >
        <a
          className={item.active ? "active" : ""}
          href={item.href}
          onClick={
            item.hasChildren && !isDesktop
              ? (e) => toggleSubmenu(item.key, e)
              : undefined
          }
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
                <i className={`fi-rr-caret-${isExpanded ? "up" : "down"}`}></i>
              </span>
            )}
            <ul
              className={`sub-menu ${isDesktop ? "two-col" : ""}`}
              style={
                !isDesktop
                  ? {
                      display: isExpanded ? "block" : "none",
                      transition: "all 0.3s ease",
                    }
                  : {}
              }
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
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 500,
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
                <a className="font-xs" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="font-xs" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="font-xs" href="#">
                  Open a shop
                </a>
              </li>
            </ul>
          </div>
          <div className="info-topbar text-center d-none d-xl-block">
            {/* <span className="font-xs color-brand-3">
              Free shipping for all orders over
            </span>
            <span className="font-sm-bold color-success"> $75.00</span> */}
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
                <a className="d-flex" href="/">
                  <img alt="Ecom" src="assets/imgs/template/logo.png" />
                </a>
              </div>

              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    {menuItems.map((item) => renderMenuItem(item, true))}
                  </ul>
                </nav>
                <div
                  className={`burger-icon burger-icon-white ${
                    isMobileMenuOpen ? "burger-close" : ""
                  }`}
                  onClick={toggleMobileMenu}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>

              <div className="header-shop">
                <a class="btn btn-brand-3 btn-arrow-right" href="#">Login Now</a>
                
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${
          isMobileMenuOpen ? "sidebar-visible" : ""
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <a className="d-flex" href="index.html">
                <img alt="Ecom" src="assets/imgs/template/logo.png"   className="mobile-logo-img"/>
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
                    {menuItems.map((item) => renderMenuItem(item, false))}
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
  );
}

export default Navbar;
