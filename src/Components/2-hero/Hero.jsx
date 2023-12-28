import React, { useEffect } from 'react'
import './HeroStyle.css';
import Lottie from "lottie-react";
import anim from "./anim";


export default function Hero() {

    
  const style = {
    height: '28em',
    marginTop:'-4em',    
  };

  useEffect(() => {
    // Au montage du composant, ajoutez la classe 'title' pour déclencher l'animation
    const title = document.querySelector('.title');
    title.classList.add('title');

  }, []);


  return (
    <section className='container'>
      <div className='LeftParty'>

        <div className='ImgParty'>
          <img src='./Maher1.png' className='Avatar' alet="" />
          {/*<div className='icon-verified' /> */}
        </div>

        <h1 className='title'>Tools and Game developer</h1>
        <p className="sub-title"> I’m meher Senior network,Tools and Game developer</p>
       
        <div className='icons'>
            <div className="icon-twitter"/>
            <div className="icon-linkedin1"/>
            <div className="icon-github githubHerro"/>
        </div>

      </div>

      <Lottie  style={style} animationData={anim}/>   
    </section>
  )
}
