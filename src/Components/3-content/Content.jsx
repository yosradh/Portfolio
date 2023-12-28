import React from 'react'
import './ContentStyle.css';

export default function Content() {
  return (
    <main>
      <div className="LeftSection">
          <button className="BtProjects active" >all projects</button>
          <button className="BtTools" >Project 1</button>
      </div>

      

      <div className="RightSection card-list-container" >
       
      {["aa", "bb" , "cc","dd"].map((item)=>{
        return(
          <article key={item} className="card" >
            <img width={235} src="./jeu2.jpg" alt="" />  
            <div className="box" >
              <h1 className="titleBox"> {item}</h1>
              <p class="subtitle" id="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id libero magna.adipiscing elit. Suspendisse id libero magna.
              </p>
              <div className="footerCard">
                  <div className="iconsCard">
                    <div className="icon-link1" />
                    <div className="icon-github icon-githubCard" />                 
                  </div>
                  
                  <div className="IconsMore">
                    <p>more</p>
                    <div className="icon-arrow-right" />
                  </div>
              </div>
              
            
            </div>             
          </article>
      );})}
      </div>
    </main>
  )
}
