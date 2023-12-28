import React, { useState } from 'react'
import './HeaderStyle.css';

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

      <div />
      <nav className="navbar">
        <ul className='flex'>
          <li> <a href="/about">About</a> </li>
          <li> <a href="/contact">Contact</a> </li>
          <li> <a href="/skills">Skills</a> </li>
          <li> <a href="/project">Project</a> </li>
          <li> <a href="/tools">Tools</a> </li>
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
            <li> <a href="/about">About</a> </li>
            <div className="dividerModal" />
            <li> <a href="/contact">Contact</a> </li>
            <div className="dividerModal" />
            <li> <a href="/skills">Skills</a> </li>
            <div className="dividerModal" />
            <li className="child"> <a href="/project">Project</a> </li>
            <li> <a href="/tools">Tools</a> </li>
          </ul>            
        </div>
      </div>)
      }
    </header>
  )
}
