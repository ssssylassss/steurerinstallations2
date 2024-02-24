import Image from 'next/image'
import React from 'react'

type Props = {
  showHeading?: boolean;
}

const Portfolio = ({ showHeading = true }: Props) => {
  return (
    <section className="portfolio_area area-padding" id="portfolio">
      <div className="container">

        {showHeading ? (<div className="area-heading">
          <h3 className="line">Our Recent Projects</h3>
        </div>) : null}

        <div className="filters portfolio-filter">
          <ul>
            <li className="active" data-filter="*">
              all
            </li>
            <li data-filter=".hardwood">Hardwood</li>
            <li data-filter=".refinishing">Hardwood Refinishing</li>
            <li data-filter=".lvt">LVT</li>
            <li data-filter=".tile">Tile</li>
            <li data-filter=".carpet">Carpet</li>
            <li data-filter=".concrete">Concrete</li>
          </ul>
        </div>
        <div className="filters-content">
          <div className="row portfolio-grid">

            <div className="col-lg-6 col-md-6 all following">
              <div className="single_portfolio">
                <Image width={555} height={419}
                  className="img-fluid w-100"
                  src="/images/1.jpg.webp"
                  alt=""
                />
                <div className="short_info">
                  <p>construction</p>
                  <h4>
                    <a href="portfolio-details.html">Desert Work, Dubai</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest popular upcoming">
              <div className="single_portfolio">
                <Image width={555} height={419}
                  className="img-fluid w-100"
                  src="/images/2.jpg.webp"
                  alt=""
                />
                <div className="short_info">
                  <p>construction</p>
                  <h4>
                    <a href="portfolio-details.html">Desert Work, Dubai</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest following">
              <div className="single_portfolio">
                <Image width={555} height={419}
                  className="img-fluid w-100"
                  src="/images/3.jpg.webp"
                  alt=""
                />
                <div className="short_info">
                  <p>construction</p>
                  <h4>
                    <a href="portfolio-details.html">Desert Work, Dubai</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest upcoming">
              <div className="single_portfolio">
                <Image width={555} height={419}
                  className="img-fluid w-100"
                  src="/images/4.jpg.webp"
                  alt=""
                />

                <div className="short_info">
                  <p>construction</p>
                  <h4>
                    <a href="portfolio-details.html">Desert Work, Dubai</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio