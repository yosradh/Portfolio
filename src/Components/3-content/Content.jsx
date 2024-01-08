import React, { useState } from 'react'
import './ContentStyle.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Projects } from './Projects';
export default function Content() {
  const { t } = useTranslation(); 
  const navigate = useNavigate();

  const categories = [
    { nom: 'PC & Consoles Games' }, { nom: 'Personal Projects' }, { nom: 'Mobile Casuals' }, { nom: 'Mobile Hyper Casuals' }, { nom: 'VR/AR' }];


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
        <button className={`BtProjects ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>{t('content.allProjects')}</button>
        {categories.map((item, index) => (
          <button
            className={`BtTools ${activeCategory === item.nom ? 'active' : ''}`}
            key={index} onClick={() => setActiveCategory(item.nom)} >
            {t(item.nom)}
          </button>
        ))}
      </div>



      <div className="RightSection " >
        {filteredProjects.map((item, index) => (

          <article key={item.id} className="card"
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}  >

            <img src={item.img} alt="" />
            <div className="box" >
              <h1 className="titleBox"> {item.title}</h1>
              <p className="subtitle" >{item.description}</p>

              <div className="icons">

                <div className="iconsCard">
                  <a href={item.link}><div className="icon-link" /></a>
                  <a href={item.linkGit}><div className="icon-github icon-githubCard" /></a>
                </div>

                <span className="link" onClick={() => navigate(`/project/${item.id}`)}>
                  {t('content.More')}
                  <div style={{ marginTop: '2px' }} className="icon-arrow-right" />
                </span>

              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
