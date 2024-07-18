import React from "react";
import "../css/ecommerce.css";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/Navbar";

function Ecommer() {
  return (
    <div className="eCom">
      <Navbar />
      <h1 style={{paddingTop:"5vh", paddingBottom:"3vh", fontWeight:"800"}}>E-COMMERCE</h1>
      <div className="top">
        <h2>
          An eCommerce Website Design Company That Delivers Unmatched Results
        </h2>
        <p>
          eCommerce stores are becoming the primary customer touchpoint, with
          33.3% of the world's population shopping online. A robust website
          design can increase earnings and sales for businesses. A user-friendly
          website enhances customer experience and drives conversions. Investing
          in eCommerce web development services can provide growth
          opportunities. AThrive Internet Marketing Agency ensures intuitive
          navigation, powerful search, and filtering for easy product browsing
          and purchase completion.
        </p>
        <h1>Why You Need an eCommerce Website</h1>
        <p></p>By integrating an eCommerce platform, user-friendly site design,
        and a robust online presence, you can expand your market share beyond
        local consumers.
      </div>
      <div className="box-container">
      <div className="box">Box 1</div>
      <div className="box">Box 2</div>
      <div className="box">Box 3</div>
      <div className="box">Box 4</div>
      <div className="box">Box 5</div>
      <div className="box">Box 6</div>
    </div>
    <Footer/>
    </div>
  );
}

export default Ecommer;
