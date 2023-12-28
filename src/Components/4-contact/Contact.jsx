import React from 'react'
import './ContactStyle.css';
import Lottie from "lottie-react";
import email from "./email";


export default function Contact() {

    
  const style = {
    height: '25em',
    marginTop:'-4em',    
  };

  return (
    <section className="containerContact">

        <span className="sectionTitle">
          
          <div className="icon-mail"/>
          Contact us
        </span>
        <p className="paragraphe">Contact us for more information and Get notified when I publish something new.</p>

        <div className="SectionB">          
          <form className="form">

            <div className="NomSection">
              <label htmlFor="nomPrenom" >Nom Prénom *:</label>
              <input required type="text" id="nomPrenom" placeholder="nom et prénom" />
            </div>

            <div className="ObjectSection">
              <label htmlFor="ObjectEmail" >Object Email *:</label>
              <input required type="text"  id="ObjectEmail" placeholder="Object email" />
            </div>

            <div className="emailSection">
              <label htmlFor="email" >Email Adresse *:</label>
              <input required type="email" name="email" id="email" placeholder="Object" />
            </div>
            
            <div className="AdresseSection">
              <label htmlFor="message">Your message *:</label>
              <textarea required name="message"  id ="message" placeholder="Message" />
            </div>

            <button id="BtnSubmit">Envoyer</button>

          </form>

          <Lottie className='AnimContact' style={style} animationData={email}/>   
        </div>

        <p className="ChampObligatoire">* Champ obligatoire</p>
      
      
    </section>
  )
}
