import React, { useEffect,useState } from 'react'
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

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleText = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className='container'>
      <div className='LeftParty'>
{/*
        <div className='ImgParty'>
          <img src='./Maher1.png' className='Avatar' alet="" />
          <div className='icon-verified' /> 
        </div>
*/}
        <h1 className='title'>Bonjour, Je suis Maher Jouini</h1>

        <p className={`sub-title ${isCollapsed ? 'collapsed' : ''}`}>
          un développeur passionné spécialisé dans la création de jeux vidéo et d'outils innovants. Fort d'une expérience enrichissante de cinq années dans le domaine, j'ai eu le privilège de travailler sur une variété de projets qui m'ont permis d'affiner mes compétences techniques et créatives. Chaque jeu et chaque outil que je développe reflète mon dévouement à l'excellence et mon désir constant d'apprendre et d'innover. Mon parcours m'a enseigné l'importance de la collaboration, de la persévérance et de la passion dans la réalisation de projets qui captivent et engagent les utilisateurs. Je suis toujours à la recherche de nouvelles opportunités pour mettre mes compétences au service de projets passionnants et stimulants.
        </p>
        <span onClick={toggleText} className="BtnPlus">
          {isCollapsed ? 'Voir plus' : 'Voir moins'}
        </span>
       
        <div className='icons'>
            <div className="MailContact icon-mail " />
            <div className="icon-twitter"/>
            <div className="icon-linkedin1"/>
            <div className="icon-github githubHerro"/>
        </div>

      </div>

      <Lottie  style={style} animationData={anim}/>   
    </section>
  )
}
