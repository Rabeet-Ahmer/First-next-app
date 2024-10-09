import Link from 'next/link';
import React from 'react';
import "./page.css"

const HomePage = () => {
  return (
    <>
    <div className='container'>
      <span className="logo">Nike</span>
      <ul className="links">
      <li><Link href="/" target="_blank">Home Page</Link></li>
      <li><Link href="/contact" target="_blank">Contact Page</Link></li>
      <li><Link href="/services" target="_blank">Services Page</Link></li>
      </ul>
    </div>
    <div className="div">
        <h1>This Is Home Page!</h1>
    </div></>
  );
};

export default HomePage;
