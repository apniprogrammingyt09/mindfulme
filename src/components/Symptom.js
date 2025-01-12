import React, { useState } from 'react';
import '../Css/Symptom.css';
import { Section } from 'lucide-react';
import Aos from "aos";
import "../../node_modules/aos/dist/aos.css"
import QLearningRecommendation from '../apiTesting/Code';

function Symptom() {
  const [sleepHours, setSleepHours] = useState(7);
  const [sleepQuality, setSleepQuality] = useState(50); // 0-100
  const [appetiteLevel, setAppetiteLevel] = useState(50); // 0-100
  const [exerciseDuration, setExerciseDuration] = useState(30);

  const handleSleepHoursChange = (event) => {
    setSleepHours(event.target.value);
  };

  const handleSleepQualityChange = (event) => {
    setSleepQuality(event.target.value);
  };

  const handleAppetiteLevelChange = (event) => {
    setAppetiteLevel(event.target.value);
  };

  const handleExerciseDurationChange = (event) => {
    setExerciseDuration(event.target.value);
  };

  const saveLog = () => {
    // Handle saving logic here (e.g., sending data to a server)
    console.log('Saved Data:', {
      sleepHours,
      sleepQuality,
      appetiteLevel,
      exerciseDuration,
    });
  };

  return (
    <section className='Container'>

    <QLearningRecommendation/>
    </section>
  
  );
}

export default Symptom;
// export default Symptom


