import React from 'react'
import './ContactStyle.css';
import Lottie from "lottie-react";
import email from "./email";


export default function Contact() {

    
  const style = {
    height: '28em',
    marginTop:'-4em',    
    Float: 'right'
  };

  return (
    <section name="containerContact">

        <span className="sectionTitle">
          <div className="icon-mail"/>
          Contact us
        </span>
        <p className="paragraphe">Contact us for more information and Get notified when <br /> I publish something new.</p>

        <div className="SectionB">
          <form className="form">
            <div className="emailSection">
              <label className="" htmlFor="email" >Email Adresse:</label>
              <input required type="email" name="email" id="email" placeholder="Email Adress"/>
            </div>
            
            <div className="AdresseSection">
              <label className="" htmlFor="message">Your message:</label>
              <textarea name="message" required id ="message" placeholder="Message"/>
            </div>
            <button className="submit">Envoyer</button>
          </form>

            <Lottie style={style} animationData={email}/>   
        </div>
      
      
    </section>
  )
}
