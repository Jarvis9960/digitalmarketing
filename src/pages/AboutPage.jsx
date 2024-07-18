import React from "react";
import "../css/aboutpage.css"
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/Navbar";

function AboutPage() {
  return (
    <div className="" style={{backgroundColor:"#EDEDED"}}>
      <Navbar />
      <div className="about">
        <p>About Company:-</p>
        <h1>We’re All About </h1>
        <h2>Relationships and </h2>
        <h3>Results</h3>
      </div>
      <div className="about1">
        <img
          src="digitalM\src\assets\jason-leung-mZNRsYE9Qi4-unsplash-removebg-preview.png"
          alt=""
        />
        <p>
          Founded in 2022, Netcare Consulting has quickly become a leading
          digital marketing agency, empowering businesses across various
          industries to optimize their marketing strategies and gain a
          significant edge in the competitive landscape. Initially a solo
          operation, the agency has flourished into a full-service provider,
          currently serving thousands of clients globally. Notably, India and
          the United States have a strong presence among their active clientele,
          demonstrating their diverse reach and expertise. Netcare Consulting
          caters to businesses of all sizes, from budding startups to
          established franchises, and possesses extensive experience across a
          wide range of industries and niches. As the agency continues to grow,
          it remains committed to refining its processes and investing in
          cutting-edge tools and resources, ensuring that its digital marketing
          partners receive the highest quality service.
        </p>
        <h2>100% Campaign transparency</h2>
        <h3>Friendly team of experts our company</h3>
      </div>
      <div className="about2">
        <div className="abouts">
          <p>Digital Marketing</p>
          <h1>
            "Digital marketing: where creativity meets strategy to captivate
            audiences in the online realm."
          </h1>
        </div>
        <div className="abouts">
          <p>Web Design</p>
          <h1>
            "Web design: crafting digital experiences that marry form with
            function, delighting users at every click."
          </h1>
        </div>
        <div className="abouts">
          <p>Social Media Marketing</p>
          <h1>
            "Social media marketing: strategically engaging, and influencing
            audiences through compelling content across digital communities."
          </h1>
        </div>
      </div>
      <h1 style={{fontSize:"5vh"}}  >Our Company Provided digital marketing Service</h1>
      <div className="about3">
        <div className="aboutS">
          <p>Why Choose Us</p>
          <h1>What we offer Explore now</h1>
          <h6>
            "What we offer: Explore now for innovative solutions tailored to
            elevate your digital presence and drive impactful results."
          </h6>
        </div>

        <div className="aboutUS">
          <div className="aboutus">
            <h1>Dedicated Service Solution</h1>
            <p>
              " Your personalized pathway to seamless operations and
              unparalleled customer satisfaction."
            </p>
          </div>
          <div className="aboutus">
            <h1>Dedicated Service Solution</h1>
            <p>
              " Your personalized pathway to seamless operations and
              unparalleled customer satisfaction."
            </p>
          </div>
          <div className="aboutus">
            <h1>Dedicated Service Solution</h1>
            <p>
              " Your personalized pathway to seamless operations and
              unparalleled customer satisfaction."
            </p>
          </div>
          <div className="aboutus">
            <h1>Dedicated Service Solution</h1>
            <p>
              " Your personalized pathway to seamless operations and
              unparalleled customer satisfaction."
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
