import React from "react";
import "./ProgressBarSec.css";
import {ProgressBar} from "../../../imports";
import { ProgressBarsData } from "../../../Data";
const ProgressBarSec = () => {
  return (
    <div className="progress-bars-section d-flex flex-column align-items-start justify-content-center">
      {ProgressBarsData.map((item, index) => {
        return (
          <ProgressBar
            key={index}
            title={item.title}
            dataProgress={item.percentage}
          />
        );
      })}
    </div>
  );
};

export default ProgressBarSec;
