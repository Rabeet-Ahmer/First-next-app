import style from "./contact.module.css";
import React from "react";
import HomePage from "../page"

const ContactPage = () => {
  return (
    <>
    <HomePage />
    <div className={style.contact}>
      
      <h1>This is Contact Page</h1>
      <p>
        <b>Gmail:</b>abc@gmail.com
      </p>
      <p>
        <b>Phone:</b>0300009821
      </p>
    </div>
    </>
  );
};

export default ContactPage;
