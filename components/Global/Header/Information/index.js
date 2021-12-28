import React, { useContext } from "react";
import Link from 'next/link'

import { whiteTahfidz, burgerIcon, emailIcon, bgHero } from "public/assets/icons";
import { AppContext } from 'context/AppContext';

const Information = () => {
  const { isMedium, isMobile } = useContext(AppContext)

  return (
    <div>
      <div className="img-bg-wrapper">
        <img src={bgHero} alt="bg-hero" className="bg-hero" />
      </div>

      <div className="information container">
        <div className="">
          <div className="information-icon">
            <div className="information-icon">
              <div className="information-img-wrapper">
                <img src={whiteTahfidz} alt="cart-icon" />
              </div>
              <div style={{ marginTop: 0 }}>
                <h1 className="information-title">YITAS</h1>
                <h1 className="information-description">{'Yayasan Istiqomah Tarbiyah Sunnah'}</h1>
              </div>
            </div>
            <div className="information-burger" >
              <img src={burgerIcon} alt="cart-icon" />
            </div>
            {<div className="information-flexing">
              <div className="information-dropdown">
                <h1 className="information-title-mini">Profil</h1>
                <div className="information-dropdown-content">
                  <a href="#">Profil Sekolah</a>
                  <a href="#">Profil Pengajar</a>
                  <a href="#">Profil Murid</a>
                </div>
              </div>
              <h1 className="information-title-mini">Berita</h1>
              <h1 className="information-title-mini">PPDB</h1>
              <h1 className="information-title-mini">Galeri</h1>
              <h1 className="information-title-mini">Artikel</h1>
            </div>}
          </div>
          
        </div>
        <h1 className="title-center">an inspired life begins</h1>  
      </div>
      
    </div>
  );
};

export default Information;
