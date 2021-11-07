import React, { useContext } from "react";

import { AppContext } from "context/AppContext";
import Link from 'next/link';

const Menu = ({ route }) => {
  const { showCakeCategory, setShowCakeCategory } = useContext(AppContext);

  return (
    <div className="menu">
      <ul className="menu-navigation">
        <li
          className={`menu-navigation-item ${route == '/' ? 'active' : ''}`}
          onMouseEnter={() => setShowCakeCategory(false)}
        >
          <Link href='/'>
            <a>
              Beranda
            </a>
          </Link>
        </li>
        <li
          className={
            showCakeCategory
              ? "menu-navigation-item active"
              : "menu-navigation-item"
          }
          onMouseEnter={() => setShowCakeCategory(true)}
        >
          Profil
        </li>
        <li
          className={`menu-navigation-item ${route == '/account' ? 'active' : ''}`}
          onMouseEnter={() => setShowCakeCategory(false)}
        >
          <Link href='/account'>
            <a>
              Berita
            </a>
          </Link>
        </li>
        <li
          className="menu-navigation-item"
          onMouseEnter={() => setShowCakeCategory(false)}
        >
          PPDB
        </li>
        <li
          className="menu-navigation-item"
          onMouseEnter={() => setShowCakeCategory(false)}
        >
          Galeri
        </li>
        <li
          className="menu-navigation-item"
          onMouseEnter={() => setShowCakeCategory(false)}
        >
          Artikel
        </li>
        
      </ul>
    </div>
  );
};

export default Menu;
