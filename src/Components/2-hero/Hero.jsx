import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroStyle.css';
import Lottie from "lottie-react";
import anim from "./anim";

export default function Hero() {

  const navigate = useNavigate();

  const style = {
    height: '28em',
    marginTop:'-4em',    
  };


  
{/** 
  useEffect(() => {
    const title = document.querySelector('.title');
    title.classList.add('title');

  }, []);

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleText = () => {
    setIsCollapsed(!isCollapsed);
  };
*/}
  return (
    <section className='container'>
      <div className='LeftParty'>
        <h1 className='title'>Bonjour ,  Je suis <h1 className="Nom">Maher Jouini</h1><br/>
          Sr Game & Tools & Network Developer , University Teacher and Automation Enginner .<br/>  
          </h1>

          <p className='sub-title'>Game & Tools & Network Developer / University Teacher /Automation Enginner <span className="VoirPlusBtn" onClick={()=> navigate('/about')}>Voir plus</span> </p>
          
          <span className="GroupContact">
            <img src="./anim.gif" alt="" className="AnimBtn"/>
            <p className="BtnConatct" onClick={()=> navigate('/about')}><span style={{color:'white'}}>CONTA</span>CT ME</p>
          </span>
      </div>

      <Lottie  style={style} animationData={anim}/>   
    </section>
  )
}
