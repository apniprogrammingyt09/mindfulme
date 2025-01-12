import React from 'react';
import '../Css/Guid.css';
import { Route  ,Routes ,Link} from 'react-router-dom';
import Pre_record from '../pages/Pre_record';
import Asmr from '../pages/Musics';
import Animated_visuals from '../pages/AMSR';
import GAMES from "../pages/Games"

const GuidedMeditations = () => {
  const meditations = [
    { title: '5-Minute Breathing Exercise', duration: '5:00' },
    { title: 'Body Scan Meditation', duration: '10:00' },
    { title: 'Loving-Kindness Practice', duration: '15:00' },
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1  style={{fontSize:"2vmax",fontWeight:"700"}}>Resource Library</h1>
        </div>
      </header>

      <main className="main">
        <nav className="tabs">
          <button className="tab">  <Pre_record  /></button>
          <button className="tab"> <Animated_visuals/></button>
          <button className="tab"><Asmr/> </button>
          <button className="tab"><GAMES/> </button>
        </nav>

        <section className="content">
         
    
        </section>

        <footer className="footer">
          <div className="controls">
            <button className="control-button">dasf</button>
            <button className="control-button">sdadfs</button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default GuidedMeditations;


