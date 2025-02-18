import React, { useEffect } from "react";
import { Header } from "../imports";
import { TestimonialSec } from "../imports";
import { FooterTop } from "../imports";
import { FooterBtm } from "../imports";
import { Outlet, useLocation } from "react-router-dom";
import Practice1 from "./uselocationpractice/Practice1";
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // console.log(location);
}
const Layout = () => {
  return (
    <div>
      <Practice1/>
      <ScrollToTop />
      <Header />
      <Outlet />
      <TestimonialSec />
      <FooterTop />
      <FooterBtm />
    </div>
  );
};

export default Layout;
