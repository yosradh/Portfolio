import React,{ useState } from 'react'
import './ContentStyle.css';
import { useNavigate } from 'react-router-dom';

export const Projects=[
  {id: 1 ,title: 'Veterans Online', description : 'Veterans Online is a thrilling top-down twin-stick shooter suited for both casual and hardcore players, featuring fun warfare with easy to learn but hard to master mechanics. ', link: 'https://store.steampowered.com/app/492840/Veterans_Online/',linkGit:'vide', img:'project1.png',nomCategorie:'PC & Consoles Games'},
  {id: 2 ,title: 'Multiplayer Moba Game Protoype Using Photon networking', description : "n'est pas disponnible", link: '' ,linkGit:'https://github.com/Davancimeher/Moba-Game-proto',img:'project2.png',nomCategorie:'Personal Projects'},
  {id: 3 ,title: 'City Builder', description : "n'est pas disponnible", link: 'https://play.google.com/store/apps/details?id=com.stolenpad.citybuilder' ,linkGit:'vide',img:'project3.png',nomCategorie:'Personal Projects'},
  {id: 4 ,title: 'Sword Maker', description : "Top 5 world wide", link: 'https://apps.apple.com/us/app/swords-maker/id1601831541',linkGit:'vide', img:'project4.png',nomCategorie:'Mobile Casuals'},
  {id: 5 ,title: 'Fighters  Run', description : 'Top 50 world wide', link: 'https://apps.apple.com/us/app/fighters-run/id1583767409' ,linkGit:'',img:'project5.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 6 ,title: 'Smash Hero', description : "Top 10 new applications", link: 'https://apps.apple.com/us/app/smash-hero/id1636495678' ,linkGit:'',img:'project6.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 7 ,title: 'Car Fight', description : "n 'est pas disponnible", link: 'https://play.google.com/store/apps/details?id=com.stolenpad.carfight',linkGit:'', img:'dossierVide.jpg',nomCategorie:'Mobile Hyper Casuals'},
  {id: 8 ,title: 'Ninja Scarf', description : 'pas dispo', link: 'https://apps.apple.com/us/app/ninja-scarf/id1594089749' ,linkGit:'',img:'project7.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 9 ,title: 'Bullet Challenge', description : "pas dispo", link: 'https://apps.apple.com/us/app/bullet-challenge/id1597341181',linkGit:'' ,img:'./project8.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 10 ,title: 'Barrel Maker', description : "vous êtes un homme en mission pour débarrasser le monde de vos ennemis, aimez-vous tirer sur les ennemis sur les toits et les rues ? aimez-vous fabriquer vos propres armes ? , Ce jeu de tir épique est fait pour vous.", link: 'https://play.google.com/store/apps/details?id=com.stolenpad.barrelmaker',linkGit:'', img:'project9.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 11 ,title: 'Ice Cream Gang', description : 'The Ice Cream Gang is here!!Help the Gang making their ice cream and customize it by picking the ingredient you like while avoiding the obstacles.', link: 'https://apps.apple.com/us/app/ice-cream-gang-3d/id1579201941' ,linkGit:'',img:'./project10.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 12 ,title: 'Shuriken Shuffle', description : "All you have to do is pass Shurikens from left to right and vice versa.Gather your Shurikens in the correct hand, multiply them and reach the maximum Shuriken number.", link: 'https://apps.apple.com/us/app/shuriken-shuffle/id1607833084' ,linkGit:'',img:'project11.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 13 ,title: 'Shoot If You Can', description : 'can you guess her position ? can you find him behind the wall?Guess their positions and shoot the target before you run out of arrows.Many challenging positions waiting for you. BE CREATIVE!', link: 'https://apps.apple.com/us/app/shoot-if-you-can/id1601833579' ,linkGit:'',img:'project12.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 14 ,title: 'Car Keys 3D', description : "pas dispo", link: 'https://apps.apple.com/us/app/car-keys-3d/id1597780595' ,linkGit:'',img:'project13.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 15 ,title: 'Splash The Coke', description : "Throw, Hit and Splash !!The key to the game is precision. Target the multipliers in order to reach the coke bottles. Explode the bottles and enjoy the coke fountains.", link: 'https://apps.apple.com/us/app/splash-the-coke/id1583040979',linkGit:'', img:'project14.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 16 ,title: 'Dracula Run', description : 'Vampires are undead creatures seeking their eternal lovers!Collect all you can and help them live what they have been looking for.', link: 'https://apps.apple.com/us/app/dracula-run/id1583766861' ,linkGit:'',img:'project15.png',nomCategorie:'Mobile Hyper Casuals'},
  {id: 17 ,title: 'AR/VR Portfolio', description : "pas dispo", link: 'https://drive.google.com/file/d/1EkMRJxzFLjD0iZ_SjFPNP_mS0me7-hhf/view' ,linkGit:'',img:'project16.png',nomCategorie:'VR/AR'},
]

const categories= [
  {nom:'PC & Consoles Games'},  {nom:'Personal Projects'},{nom:'Mobile Casuals'},  {nom:'Mobile Hyper Casuals'},{nom: 'VR/AR'}];

export default function Content() {

  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState('all'); // Ajoutez un état pour la catégorie active
  const filteredProjects = activeCategory === 'all' ? Projects : Projects.filter(project => project.nomCategorie === activeCategory); 

  const handleCardHover = (index, isHovering) => {
    // Sélectionne toutes les cartes dans le DOM
    const cards = document.querySelectorAll('.card');
    // Parcourt chaque carte
    cards.forEach((card, i) => {
        if (i === index && isHovering) {
            card.style.transform = 'scale(1.1)';
            card.style.opacity = '1';
            card.style.zIndex = '2';
        } else if (i !== index && isHovering) {
            card.style.transform = 'scale(0.95)';
            card.style.opacity = '0.72';
            card.classList.add('blur');
        } else {
            card.style.transform = 'scale(0.95)';
            card.style.opacity = '1';
            card.style.zIndex = '1';
            card.classList.remove('blur');
        }
      });
  };


  return (
    <main>

            <div className="LeftSection">
            <button className={`BtProjects ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>all projects</button>
            {categories.map((item, index) => (
              <button 
                className={`BtTools ${activeCategory === item.nom ? 'active' : ''}`} 
                key={index} onClick={() => setActiveCategory(item.nom)} >
                {item.nom}
              </button>
            ))}
            </div>
    
            

            <div className="RightSection " >
            {filteredProjects.map((item, index) => (

                 <article key={item.id} className="card"
                 onMouseEnter={() => handleCardHover(index, true)}
                 onMouseLeave={() => handleCardHover(index, false)}  >

                  <img src={item.img} alt="" />  
                  <div  className="box" >
                    <h1 className="titleBox"> {item.title}</h1>
                    <p className="subtitle" >{item.description}</p>
                   
                    <div className="icons">

                      <div className="iconsCard">
                        <a href={item.link}><div className="icon-link1" /></a>
                        <a href={item.linkGit}><div className="icon-github icon-githubCard" /></a>                      
                      </div>
                                 
                      <span className="link" onClick={()=> navigate(`/project/${item.id}`)}>
                        more
                        <div style={{marginTop:'2px'}} className="icon-arrow-right" />
                      </span>

                    </div>                  
                  </div>             
                </article>
                ))}
            </div>      
    </main>
  )
}
