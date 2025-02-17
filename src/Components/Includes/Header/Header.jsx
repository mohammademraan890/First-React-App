import React from "react";
import {MobileNav} from "../../../imports"
import {CenterNav} from "../../../imports"
import {MenuNav} from "../../../imports"
import {TopNav} from "../../TopNav/TopNav"
import "./Header.css";


const Header = () => {
  return (
    <div>
      <TopNav/>
      <div className="header">
        <CenterNav />
       <MobileNav />
        <MenuNav />
      </div>
    </div>
  );
};

export default Header;
