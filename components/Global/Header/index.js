import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import Action from "./Action";
import Information from './Information';

const Header = ({ route }) => {
  return (
    <header>
      <div className="header-main container">
        <Logo />
        <Action />
        <Menu/>
      </div>
      <Information/>
      {/* <div className="header-dropdown">
        <CakeCategory />
      </div> */}
    </header>
  );
};

export default Header;
