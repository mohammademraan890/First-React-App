import React from "react";
import Header from "./Includes/Header/Header";
import TestimonialSec from "./Layouts/TestimonialSec/TestimonialSec";
import FooterTop from "./Layouts/FooterTop/FooterTop";
import FooterBtm from "./FooterBtm/FooterBtm";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <TestimonialSec />
      <FooterTop />
      <FooterBtm />
    </div>
  );
};

export default Layout;
