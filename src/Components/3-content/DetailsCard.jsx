import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetailsStyle.css';
import { Projects } from './Projects';


export default function DetailsCard() {
  const navigate = useNavigate();
  const {id} = useParams();

  const project = Projects.find(project => project.id == id);

  return (
    <>
      <div className="containerDetails">
          <div className="icon-circle-left" onClick={()=> navigate("/project")} />
          <img width={266} src={`./../${project.img}`} alt=""/>  
          <h2>{project.title}</h2>
          <p>{project.description}</p>
      </div>
    </>
   
  )
}
