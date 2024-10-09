import Link from "next/link";
import React from "react";
import graphic from "./assests/raphic.jpg";
import "./style.css";
import web from "./assests/web.jpg";
import HomePage from "../page"
import '../page.css'

const ServicePage = () => {
  return (<>
    <HomePage />
    <h1 >Services We Offer</h1>
    <div className="services"> 
      
      <Link href="/services/graphic-design" target="_blank">
        <div className="card">
          <img src={graphic.src} alt="" />
          <div className="card-text">
            <h2>Graphic Design</h2>
            <p>We make logos, banners and wedding cards etc.</p>
          </div>
        </div>
      </Link>

      <Link href="/services/web-dev" target="_blank">
        <div className="card">
          <img src={web.src} alt="" />
          <div className="card-text">
            <h2>Web Development</h2>
            <p>We develops website as you desired</p>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ServicePage;
