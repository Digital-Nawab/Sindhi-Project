import React from 'react'

function CategoryProducts() {
  return (
<section className="section-box mt-50">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-6">
            <div className="banner-bottom-1">
              {" "}
              <a href="#">
                <div className="banner-bottom-info top-style-1">
                  <h4 className="color-white mb-5">Reading Table</h4>
                  <p className="font-base-2 color-white">Under $50</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-12 col-md-6 col-sm-6">
            <div className="banner-bottom-2">
              {" "}
              <a href="#">
                <div className="banner-bottom-info top-style-1">
                  <h4 className="color-white mb-5">Table Lamp Collection</h4>
                  <p className="font-base-2 color-white">
                    Aqua Shift Special Edition
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="banner-bottom-3">
          <div className="banner-bottom-info top-style-2">
            <h4 className="color-white mb-5">Top Rated Chair</h4>
            <p className="font-base-2 color-white mb-20">Under $120</p>
            <a className="btn btn-info btn-arrow-right">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-6">
            <div className="banner-bottom-4">
              {" "}
              <a href="#">
                <div className="banner-bottom-info top-style-1">
                  <h4 className="color-white mb-5">Sofa Collection</h4>
                  <p className="font-base-2 color-white">
                    Aqua Shift Special Edition
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-12 col-md-6 col-sm-6">
            <div className="banner-bottom-5">
              {" "}
              <a href="#">
                <div className="banner-bottom-info top-style-1">
                  <h4 className="color-white mb-5">Relaxing Chair</h4>
                  <p className="font-base-2 color-white">
                    From $100. Free shipping
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default CategoryProducts