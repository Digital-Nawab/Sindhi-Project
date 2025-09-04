import React from 'react'

function Hero() {
  return (
      <>  
        <section className="section-box">
          <div className="banner-hero banner-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="box-swiper">
                    <div className="swiper-container swiper-group-1">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div
                            className="banner-big bg-11"
                            style={{
                              backgroundImage:
                                "url(assets/imgs/page/homepage1/banner.png)",
                            }}
                          >
                            <span className="font-sm text-uppercase">
                              Hot Right Now
                            </span>
                            <h2 className="mt-10">Sale Up to 50% Off</h2>
                            <h1>Mobile Devices</h1>
                            <div className="row">
                              <div className="col-lg-5 col-md-7 col-sm-12">
                                <p className="font-sm color-brand-3">
                                  Curabitur id lectus in felis hendrerit
                                  efficitur quis quis lectus. Donec sollicitudin
                                  elit eu ipsum maximus blandit. Curabitur
                                  blandit tempus consectetur.
                                </p>
                              </div>
                            </div>
                            <div className="mt-30">
                              <a
                                className="btn btn-brand-2"
                                href="shop-grid.html"
                              >
                                Shop now
                              </a>
                              <a className="btn btn-link" href="shop-grid.html">
                                Learn more
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="banner-big bg-11-2"
                            style={{
                              backgroundImage:
                                "url(assets/imgs/page/homepage1/banner-hero-2.png)",
                            }}
                          >
                            <span className="font-sm text-uppercase">
                              Trending Now
                            </span>
                            <h2 className="mt-10">Big Sale 25%</h2>
                            <h1>Laptop &amp; PC</h1>
                            <div className="row">
                              <div className="col-lg-5 col-md-7 col-sm-12">
                                <p className="font-sm color-brand-3">
                                  Curabitur id lectus in felis hendrerit
                                  efficitur quis quis lectus. Donec sollicitudin
                                  elit eu ipsum maximus blandit. Curabitur
                                  blandit tempus consectetur.
                                </p>
                              </div>
                            </div>
                            <div className="mt-30">
                              <a
                                className="btn btn-brand-2"
                                href="shop-grid.html"
                              >
                                Shop now
                              </a>
                              <a className="btn btn-link" href="shop-grid.html">
                                Learn more
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="banner-big bg-11-3"
                            style={{
                              backgroundImage:
                                "url(assets/imgs/page/homepage1/banner-hero-3.png)",
                            }}
                          >
                            <span className="font-sm text-uppercase">
                              Top Sale This Month
                            </span>
                            <h2 className="mt-10">Hot Collection</h2>
                            <h1>Virtual glasses</h1>
                            <div className="row">
                              <div className="col-lg-5 col-md-7 col-sm-12">
                                <p className="font-sm color-brand-3">
                                  Curabitur id lectus in felis hendrerit
                                  efficitur quis quis lectus. Donec sollicitudin
                                  elit eu ipsum maximus blandit. Curabitur
                                  blandit tempus consectetur.
                                </p>
                              </div>
                            </div>
                            <div className="mt-30">
                              <a
                                className="btn btn-brand-2"
                                href="shop-grid.html"
                              >
                                Shop now
                              </a>
                              <a className="btn btn-link" href="shop-grid.html">
                                Learn more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-pagination swiper-pagination-1" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12">
                      <div className="banner-small banner-small-1 bg-13">
                        <span className="color-danger text-uppercase font-sm-lh32">
                          10%<span className="color-brand-3">Sale Off</span>
                        </span>
                        <h4 className="mb-10">Apple Watch Serial 7</h4>
                        <p className="color-brand-3 font-desc">
                          Don't miss the last
                          <br className="d-none d-lg-block" /> opportunity.
                        </p>
                        <div className="mt-20">
                          <a
                            className="btn btn-brand-3 btn-arrow-right"
                            href="shop-grid.html"
                          >
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12">
                      <div className="banner-small banner-small-2 bg-14">
                        <span className="color-danger text-uppercase font-sm-lh32">
                          LATEST COLLECTION
                        </span>
                        <h4 className="mb-10">Apple Devices &amp; Software</h4>
                        <p className="color-brand-3 font-md">
                          Don't miss the last
                          <br className="d-none d-lg-block" /> opportunity.
                        </p>
                        <div className="mt-20">
                          <a
                            className="btn btn-brand-2 btn-arrow-right"
                            href="shop-grid.html"
                          >
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}

export default Hero