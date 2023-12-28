import React, { useState } from 'react'
import './HeaderStyle.css';
import { Outlet, Link } from "react-router-dom";

export default function Header() {

  const [toggle,setToggle]=useState(false);
  const ShowMenu =() =>{
    setToggle(true);
  }

  const FermerModal=()=>{
    setToggle(false);
  }

  return (
    <header >
      <div className="MenuDiv">
        <button  className='Menu icon-menu' onClick={ShowMenu} />
      </div>

      <div className='ImgParty'>
        <Link to="/"><img src='./Maher1.png' className='Avatar' alet="" /></Link>
      </div>

      <nav className="navbar">
        <ul className='flex'>

          <li> <Link to="/competance">Compétences</Link> </li>
          <li> <Link to="/project">Projects</Link> </li>
          <li> <Link to="/contact">Experiences</Link> </li>
          <li> <Link to="/tools">Tools</Link> </li>
          <li> <Link to="/contact">Contact</Link> </li>
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
            <li> <Link to="/competance">Compétences</Link> </li>
            <div className="dividerModal" />

            <li> <Link to="/project">Projects</Link> </li>
            <div className="dividerModal" />

            <li> <Link to="/contact">Experiences</Link> </li>
            <div className="dividerModal" />

            <li> <Link to="/tools">Tools</Link> </li>
            <div className="dividerModal" />

            <li className="child"> <Link to="/contact">Contact</Link> </li>
          </ul>            
        </div>
      </div>)
      }
    </header>
  )
}
