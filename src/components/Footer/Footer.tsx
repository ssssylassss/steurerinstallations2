import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="footer-area ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4  col-md-6">
            <div className="single-footer-widget">
              <h6>Userful Links</h6>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="footer-nav">
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">home</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">about us</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">company news</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">projects</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="footer-nav">
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">our services</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">terms and conditions</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">shop</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="#">contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">Business Hours</h6>
              <ul className="business-hour">
                <li>
                  Monday - Friday : <span>7:00 am - 5:00 pm</span>{" "}
                </li>
                <li>
                  Saturday :<span>8:00 am - 3:00 pm</span>
                </li>
                <li>
                  Sunday :<span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row ">
            <p className="col-lg-12 footer-text ">
              Steurer Installations &copy;
              2024 All
              rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer