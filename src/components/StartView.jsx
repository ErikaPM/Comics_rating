import React from 'react';
import '../assets/styles/components/StartView.scss';
import { Link } from 'react-router-dom';

function StartView() {
  return (
    <div className="main">
      <div className="main-container-start">
      <div className="main-text">Califica los comics a continuación, para empezar pulsa el botón:</div>
        <div className="start-button">
          <Link to ="/rating">
            <button className="btn btn-primary ready-button">Comenzar</button>
          </Link>
        </div>
      </div>    
    </div> 
  );
}

export default StartView;