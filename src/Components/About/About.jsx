import React from 'react'
import './AboutStyle.css';

export default function About() {
  return (
    <div>


        <h1 className='Titre'>ABOUT ME</h1>
        <p className='Description'>Je suis un développeur passionné spécialisé dans la création de jeux vidéo et d'outils innovants. Fort d'une expérience enrichissante de cinq années dans le domaine, j'ai eu le privilège de travailler sur une variété de projets qui m'ont permis d'affiner mes compétences techniques et créatives. Chaque jeu et chaque outil que je développe reflète mon dévouement à l'excellence et mon désir constant d'apprendre et d'innover. Mon parcours m'a enseigné l'importance de la collaboration, de la persévérance et de la passion dans la réalisation de projets qui captivent et engagent les utilisateurs. Je suis toujours à la recherche de nouvelles opportunités pour mettre mes compétences au service de projets passionnants et stimulants.</p>
    
        <div className='icons'>
            <div className="MailContact icon-mail " />
            <div className="icon-twitter"/>
            <div className="icon-linkedin1"/>
            <div className="icon-github githubHerro"/>
        </div>

    </div>
  )
}
