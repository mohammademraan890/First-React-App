import React from "react";
import "./TestimonialLeft.css";
import {Buttons} from "../../../imports";
import {SeactionsHeading} from "../../../imports";
const TestimonialLeft = () => {
  return (
    <div className="testimonial-sec-left">
      <SeactionsHeading title="What Clients Say About Our Lab Services!" Color="var(--primary-color)" margin="0px 0px 17px 0px" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        excepturi laborum perspiciatis dicta, nulla eum!
      </p>
      <Buttons title="More Testimonials" />
    </div>
  );
};

export default TestimonialLeft;
