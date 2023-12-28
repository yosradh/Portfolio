import './CompetanceStyle.css';
import React from 'react'

export default function Competances() {
    
  const languages = [
      { name: 'C#', years: '3 ans' },
      { name: 'VB.NET', years: '2 ans' },
      // ... autres langages
    ];
  
  
  return (
    <div>
      <div className="LeftParty">
        <h1 className="titreComp">COMPÉTENCES</h1>
          <p className="SubComp">
            Elles sont en constantes améliorations car pour moi la joie de ce métier fait que l’on en apprend tous les jours, d’autant plus en étant impliqué, curieux et passionné.
          </p>
      </div>

      <div className="RightParty">
        
        <div class="skills-container">
          {languages.map((lang, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{lang.name}</span>
              <span className="experience-years">{lang.years}</span>
            </div>
          ))}
        </div>


        <div className="cv-download">
          <img src="./CV1.png" className="ImgCv"/>
           <br/><p id="TelechargerTbn">Télécharger CV</p>
        </div>

      </div>
        
    </div>
  )
}
