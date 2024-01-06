import React, { useState,useEffect } from 'react';
import './HeaderStyle.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const MenuDiv = [
  {link:"Home", to :"/"},
  {link:"Compétences", to :"/competances"},
  {link:"Projects", to :"/project"},
  {link:"Tools", to :"/tools"},
  {link:"Contact", to :"/contact"}

]
export default function Header() {
  const location = useLocation();

  useEffect(() => {
    // Trouver l'index de l'élément actif basé sur le chemin actuel (location.pathname)
    const activeIndex = MenuDiv.findIndex(item => item.to === location.pathname);
    setActiveItem(activeIndex);
  }, [location.pathname]); 

  const [activeItem, setActiveItem] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const ShowMenu = () => {
    setToggle(true);
  };

  const FermerModal = () => {
    setToggle(false);
  };

  return (
    <header>
      <div className="MenuDiv">
        <button className='Menu icon-menu' onClick={ShowMenu} />
      </div>

      <div className='ImgParty'>
        <Link to="/"><img src='./Maher1.png' className='Avatar' alt="" /></Link>
      </div>

      <nav className="navbar">
        <ul className='flex'>
        {MenuDiv.map((item, index) => (
            <li key={index} className={index === activeItem ? 'active' : ''} onClick={() => handleItemClick(index)}>
              <Link to={item.to}>{item.link}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="Mood">
        <button className='icon-moon-stars' />
      </div>

      {toggle && (
        <div className="fixed">
          <div className="modal">
            <div className='headerModal'>
              <p className="navigationTitle">Navigation</p>
              <button className="closeBtn icon-close" onClick={FermerModal} />
            </div>
            
            <ul className='UlModal'>
              {MenuDiv.map((item, index) => (
                <>
                  <li key={index} className={index === activeItem ? 'active' : ''} onClick={() => handleItemClick(index)}>
                    <Link to={item.to}>{item.link}</Link>
                  </li>
                  {index !== 4 && <div className="dividerModal" />}
                </>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
