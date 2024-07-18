import React from "react";
import Footer from "../component/Footer";
import "../css/webhost.css";
import Navbar from "../component/Navbar/Navbar";

function WebsiteHosting() {
  return (
    <div className="web">
      <Navbar />
      <div className="hosting">
        <h1>Web Hosting</h1>
        <p>
          EXELIGO INNOVATIONS is a comprehensive online services agency
          specializing in digital marketing and web design. They provide
          ultra-reliable website hosting, including managed WordPress hosting,
          ensuring a seamless online experience with higher uptime percentages
          than the industry average. Their hosting service includes free malware
          removal for hacked sites and prioritizes security to protect your
          website and data. With WordPress specialized hosting, they offer the
          fastest and most secure experience available. Their support team is
          always available to ensure your uptime, page speed, and security are
          fully operational. While Netcare Consulting often offers website
          hosting alongside web design and development services, they can also
          accommodate clients seeking hosting services alone
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default WebsiteHosting;
