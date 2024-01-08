import { useTranslation } from 'react-i18next';
import './CompetanceStyle.css';
import React from 'react'

const languages = [
  { name: 'C#', years: '7 ans' },
  { name: 'Unity 3D', years: '7 ans' },
  { name: 'Virtual Reality', years: '3 ans' },
  { name: 'Augmented Reality', years: '3 ans' },    
  { name: 'Hyper Casual Games', years: '2 ans (3 hits)' },
  { name: 'Project Management', years: '3 ans' }
];


const experiences = [
  {societe: 'PolySmart : Nuked Cockroach studio Link (6 Awards )', poste:'Nuked Cockroach studio (The Biggest Tunisian Studio)', periode: '08/2019-Present',description: 'Network developer (C#: server side):- Game serveur : Game modes(TDM/FOL)- Account Serveur and Master serveur- Creating of Twitch serveur ( a system where streamer can claim achievements for his viewers)/Gameplay and C# developer (Unity 3D: client side)/UI : Game modes, missions, Achievements/Tools : Creating tools to help managing data from non developer side (Game designers) : Maps tool,Couch DB tool ( Non SQL DB)', link:'https://store.steampowered.com/app/492840/Veterans_Online/',img:'tools.png'},
  { societe:"Stolenpad studio (Homa Game studio)",poste :'Lead Game Developer (Hyper casual)' ,periode :'06/2021 - Present' , link :'https://stolenpad-studio.com',description: 'Optimize game performance to run efficiently on specified hardware requirements./Manager build and release pipelines for games(android, IOS)./Develop and deploy games on multiple platforms and form factors./Provide technical leadership and mentorship to junior and mid-level developers'},
  { societe:"Higher Institute of Multimedia Arts(ISAMM)",poste :'University Teacher' ,periode :'09/2020 - Present' , link :'www.isa2m.rnu.tn',description: 'Gameplay development courses./Video games production.'},
  { societe:'Black Dune Studio',poste :'AR/VR Lead Product Manager' ,periode :'04/2019 - 08/2019' , link :'https://blackdunestudio.com/',description: 'Manager and head of department Projects./ AR application development(ARCore,Vuforia…).'},
  { societe:'Galactech Studio (Tunisian Mobile Games Leader)',poste :'Head Of XR Department' ,periode :'01/2019 - 04/2019' , link :'https://www.galactechstudio.com/',description: 'Manager and head of department projects./AR application development (Unity 3D,Vuforia, Google ARCore)./Supervisor of interns.'},
  { societe:'Laser Game Evolution Tunisia',poste :'Co-Managing Director & Technical Director' ,periode :'09/2018 - 01/2019' , link :'https://www.lasergame-evolution.tn/',description: 'Head of THOR game project./Management of studio projects./Gameplay developer (Unity 3D): THOR VR.'},
  { societe:"Z'orchestra Studio",poste :'CEO & co-founder' ,periode :'01/2018 - 09/2018' , link :'Indie Video Game development studio',description: 'Head of studio projects./Management of studio Projects./Gameplay developer (Unity 3D) : Angles of Naseeben.'},
  { societe:"Galactech Studio",poste :'Unity 3d & Network Developer' ,periode :'06/2017 - 12/2017' , link :'https://www.galactechstudio.com',description: 'Gameplay developer (Unity 3D)./Implementation of google play API./Accounting system: (C#, PHP, MySQL)'},

]
export default function Competances() {
    const { t }= useTranslation();
  
  return (
    <div className="competences-container">
      <div className="left-section">
        <h1 className="titreComp">{t('competances.titre1')}</h1>
        <p className="SubComp">
          {t('competances.description')}        
        </p>
      </div>

      <div className="right-section">
        <div className="skills-container">
          <ul className="skills-list">
            {languages.map((lang, index) => (
              <li key={index} className="skill-item">
                <span className="skill-icon">{lang.name}</span>
                <span className="experience-years">{lang.years}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="exp-container">
          <h1 className="titreComp">{t('competances.titre2')}</h1>
          {experiences.map((item, index) => (
            <div className="BoxExp" key={index}>
              <div className="PartySociete">
                <p className="StylePoste">{item.poste}</p><br />
                <p className="StyleSociete">{item.societe}</p> <br />
                <p className="StylePeriode">{item.periode}</p> <br />
                <a href={item.link} target="_blank" rel="noopener noreferrer"><p className="LinkSociete">Link societe</p></a> <br />
              </div>
              <div className="DescriptionExperiences"><p className="TitreTasks">Achievements/Tasks :</p> <br />{item.description.split('/')[0]}<br /><br /> {item.description.split('/')[1]}<br /><br /> {item.description.split('/')[2]}</div>
            </div>    
          ))}
               
        </div>



    <div >
      <ul className="align">
        <li>
          <figure className='book'>
            <ul className='hardcover_front'>
              <li>
                <div className="coverDesign blue"> <h1>CV</h1> </div>
              </li>
              <li></li>
            </ul>

            <ul className='page'>
              <li></li>
              <li><a className="btn "href="./Meher-Resume.pdf" download="Meher-Resume.pdf">{t('telecharger')}</a></li>
              <li></li><li></li><li></li>
            </ul>
                
            <ul className='hardcover_back'>
              <li></li><li></li>
            </ul>
                  
            <ul className='book_spine'>
              <li></li><li></li>
            </ul>
                
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>
        
  )
}
