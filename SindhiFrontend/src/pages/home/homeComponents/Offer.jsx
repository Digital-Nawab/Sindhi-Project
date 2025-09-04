import React from 'react'

function Offer() {
  return (
   <section className="section-box pt-50">
  <div className="container">
    <div className="row">
      <div className="col-xl-4 col-lg-7 col-md-7 col-sm-12 mb-30">
        <div className="bg-4 block-charge">
          <span className="color-brand-3 font-sm-lh32">Power Bank</span>
          <h3 className="font-xl mb-10">Quick Charge</h3>
          <p className="font-base color-brand-3 mb-20">
            Lightweight and Portable
            <br className="d-none d-lg-block" /> Dual port fast charge
          </p>
          <a
            className="btn btn-brand-2 btn-arrow-right"
            href="shop-fullwidth.html"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 mb-30">
        <div className="bg-6 block-player">
          <h3 className="font-33 mb-20">Xbox Series XS Game Controller</h3>
          <div className="mb-30">
            <strong className="font-16">Replacement Kit D-pad ABXY Keys</strong>
          </div>
          <a
            className="btn btn-brand-3 btn-arrow-right"
            href="shop-fullwidth.html"
          >
            learn more
          </a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 mb-30">
        <div className="bg-5 block-iphone">
          <span className="color-brand-3 font-sm-lh32">Starting from $899</span>
          <h3 className="font-xl mb-10">iPhone 12 Pro 128Gb</h3>
          <p className="font-base color-brand-3 mb-10">Special Sale</p>
          <a className="btn btn-arrow" href="shop-fullwidth.html">
            learn more
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Offer