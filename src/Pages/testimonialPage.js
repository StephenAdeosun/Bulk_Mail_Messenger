import React, { useRef, useState } from "react";
import ScrollingComponent from "../components/carousel";



function TestimonialPage() {

  return (
    <section className="testimonial-section flex flex-col justify-center items-center w-full pb-40 relative">
      <div className="w-5/6 flex flex-col justify-center items-center">
        <h4 className="font-semibold text-lg uppercase customer-h4 pt-5">customer reviews</h4>

        <div className="mt-6">
          <h3 className="customer-h3 font-semibold text-3xl md:text-4xl ">What our Customer Say</h3>
          <p className="font-normal text-base customer-p mt-5">Don’t take our words for it, listen to our customer.</p>
        </div>
      </div>

      <ScrollingComponent />



    </section >


  )
}

export default TestimonialPage;
