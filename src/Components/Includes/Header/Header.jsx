import React from "react";
// import {CenterNav} from "../../../imports";
import CenterNav from "../../CenterNav/CenterNav"
import MenuNav from "../../MenuNav/MenuNav";
import "./Header.css";
import TopNav from "../../TopNav/TopNav";
import MobileNav from "../../MobileNav/MobileNav";
const Header = () => {
  return (
    <div>
      <TopNav />
      <MobileNav />
      <div className="header">
        <CenterNav />
        <MenuNav />
      </div>
    </div>
  );
};

export default Header;
