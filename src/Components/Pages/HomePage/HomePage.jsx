import React from "react";
import {HeroSlider} from "../../../imports";
import {PropertiesSec} from "../../../imports";
import {ProgressSec} from "../../../imports";

import {ServicesSec} from "../../../imports";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <PropertiesSec />
      <ProgressSec />
      <ServicesSec />
    </div>
  );
};

export default HomePage;
