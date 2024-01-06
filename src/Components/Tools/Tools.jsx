import React from 'react';
import './ToolStyle.css';


const ToolsList = [
    {title: 'Nuked Cockroach studio (The Biggest Tunisian Studio)', link:'https://store.steampowered.com/app/492840/Veterans_Online/',img:'tools.png'},
    { title: 'Advanced Payerprefs Tool', link:'https://github.com/Meher-StolenPad/PlayerPrefsTool',img:'tools.png'},
]

export default function Tools() {
    
  return (
    <div className="containerTools">
        {ToolsList.map((item,index) =>(
            <div className='cardTools' key={index}>
                <div className = 'image'>
                    <img src = {item.img} />
                </div>
                <div className = 'content'>
                    <h3>{item.title}</h3>
                    <a href={item.link}>Link</a>
                </div>
            </div>    
        ))}
    
  </div>
    
    
  )
}
