import React from "react";
import "../css/sme.css";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/Navbar";

function Sem() {
  return (
    <div className="Sem" >
      <Navbar />
      <div className="sem-container">
        <h1>Search Engine Marketing</h1>
        <p>
          In the competitive digital landscape, Search Engine Marketing (SEM) is
          a critical strategy for businesses to increase their visibility on
          search engine results pages (SERPs). SEM involves the use of paid
          advertising campaigns to drive traffic to your website.
        </p>
        <h2>Benefits of Search Engine Marketing</h2>
        <ul>
          <li>Increased Visibility</li>
          <li>Targeted Advertising</li>
          <li>Measurable Results</li>
          <li>Cost-Effective</li>
        </ul>
        <h2>Our SEM Services</h2>
        <p>
          Our SEM services include keyword research, ad creation, bid
          management, and performance analysis to ensure you get the most out of
          your marketing budget. We use the latest tools and techniques to
          maximize your ROI and drive more qualified traffic to your site.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Sem;
