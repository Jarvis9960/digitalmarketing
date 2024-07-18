import React from "react";
import "../css/sections.css";

function Sections() {
  return (
    <div className="section">
        <div className="top1">

        
      <div className="sections">
        <h6> Who are we</h6>
        <h1>A New Digital Work</h1>
        <h2>System For You.</h2>
        <p>
          Netcare Consulting: Your One-Stop Shop for Digital Marketing Success.
        </p>
      </div>
      <div className="top2">
       <img src="src\assets\diego-ph-fIq0tET6llw-unsplash-removebg-preview (1).png" alt="" />
        </div>
      </div>
    
      <div className="icons">
        <h1>Experience</h1>
        <h1>satisfaction</h1>
      </div>
      <div className="paragraph">
        <p>
          Exeligo Innovations pvt ltd: We elevate brands through data-driven
          digital marketing. Our passionate consultants and in-house
          specialists, guided by the OCMX methodology, deliver comprehensive
          SEO, social media, influencer, and paid advertising solutions to
          achieve your target audience and fuel business growth.
        </p>
      </div>
      <p>2022: Your Digital Marketing</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>

      {/* <hr /> */}
      <div className="para">
        <p>
          Welcome to the Exeligo Innovations pvt ltd FAQ! Here you'll find
          answers to some of the most common questions we receive about our
          digital marketing services. We hope this information helps you
          understand how we can support your business growth. If you have any
          further questions, please don't hesitate to reach out to us directly.
        </p>
      </div>
    </div>
  );
}

export default Sections;
