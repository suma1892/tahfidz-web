import React from "react";
import Link from 'next/link';

// const logo = "/assets/images/logo.png";
import {tahfidzIcon} from "public/assets/icons";

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <a>
          {/* <img src={tahfidzIcon} alt="cart-icon" style={{height: 70, width: 70}} /> */}
        </a>
      </Link>
    </div>
  );
};

export default Logo;
