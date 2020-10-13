import React from 'react';

import '../styles/pages/landing.css';
import '../styles/global.css';

import{FiArrowRight}from 'react-icons/fi';
import{Link} from 'react-router-dom';
import Logoimg from '../image/Logo.svg';

function Landing(){
  return (
    <div id="page-landing">
    <div className="content-wrapper">
           <img src={Logoimg} alt="happy"/>


           <main>
             <h1>Leve felicidade para o mundo</h1>
             <p>Visite orfanatos e mude o dia  de muitas crianças.</p>
           </main>

           <div className="location">
             <strong>Campinas</strong>
             <span>São Paulo</span>
           </div>

           <Link to="/app" className="enter-app">
             <FiArrowRight size={26} color="rgba(0,0,0,0.5)"/>
           </Link>
    </div>
</div>
  );
}

export default Landing;