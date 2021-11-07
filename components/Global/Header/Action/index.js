import React from "react";
import Link from 'next/link'

import { facebookIcon, twitterIcon, youtubeIcon} from "public/assets/icons";

const Action = () => {
  return (
    <div className="action">
      {/* <Link href='/search'>
        <a>
          <img src={fafce} alt="search-icon" />
        </a>
      </Link> */}
      <img src={facebookIcon} alt="cart-icon" />
      <img src={twitterIcon} alt="cart-icon" />
      <img src={youtubeIcon} alt="cart-icon" />
    </div>
  );
};

export default Action;
