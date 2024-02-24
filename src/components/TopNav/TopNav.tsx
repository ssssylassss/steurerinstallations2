import React from 'react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <div className="top_menu row m0">
      <div className="container">
        <div className="float-left">
          <a className="dn_btn" href="">
            <i className="ti-mobile"></i>+1 (815) 995-8820
          </a>
          <span className="dn_btn">
            {" "}
            <i className="ti-location-pin"></i> 540 Sumner St, Genoa City, Wi.
          </span>
        </div>
        <div className="float-right">
          <span className="follow_us">Follow us: </span>
          <ul className="list header_social">
            <li>
              <a href="https://www.facebook.com/sysflooring">
                <i className="ti-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNav