import React, { useEffect } from 'react'
import './HeroStyle.css';


export default function Hero() {

  useEffect(() => {
    // Au montage du composant, ajoutez la classe 'title' pour déclencher l'animation
    const title = document.querySelector('.title');
    title.classList.add('title');

  }, []);


  return (
    <section className='container'>
      <div className='LeftParty'>

        <div className='ImgParty'>
          <img src='./../Maher1.png' className='Avatar' alet="" />
          <div className='icon-verified' />
        </div>

        <h1 className='title'>Tools and Game developer</h1>
        <p className="sub-title"> I’m meher Senior network,Tools and Game developer</p>
       
        <div className='icons'>
            <div className="icon-twitter"/>
            <div className="icon-linkedin1"/>
            <div className="icon-github"/>
        </div>

      </div>

      <img src='./../meherr.gif' className='AnimIcon' alet="" />  
    </section>
  )
}
