import React from "react";
import Link from 'next/link'

import { facebookIcon, tahfidzIcon, phoneIcon, emailIcon} from "public/assets/icons";

const Information = () => {
  return (
    <div className="container">
    <div className="information">
      <div className="information-icon" style={{alignItems: 'center'}}>
      <Link href='/search'>
        <a className="information-icon">
          <img src={tahfidzIcon} alt="cart-icon" />
          <div style={{marginTop: 20}}>
            <h1 className="information-title">YITAS</h1>
            <h1 className="information-description">Yayasan Istiqomah Tarbiyah Sunnah</h1>
          </div>
        </a>
      </Link>
      <div className="information-flexing">
      <a className="information-icon information-line">
          <img src={phoneIcon} style={{height: 30, width: 30, marginRight: 10}} alt="cart-icon" />
          <div>
            <h1 className="information-title-mini">Kontak</h1>
            <h1 className="information-description">+628123456789</h1>
          </div>
      </a>
      <a className="information-icon information-line">
          <img src={emailIcon} style={{height: 30, width: 30, marginRight: 10}} alt="cart-icon" />
          <div>
            <h1 className="information-title-mini">Email</h1>
            <h1 className="information-description">tahfidz@gmail.com</h1>
          </div>
      </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Information;
