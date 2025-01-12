import '../Css/Home.css'; // Import the CSS file
import Home_page2 from '../pages/HomePage_2';
import { Section } from 'lucide-react';



function Home() {
  return (
    <section >
  <div className="heroContainer">
      <h1 className="heroTitle"  data-aos="zoom-in-down">Your Journey to Mental Wellness Starts Here</h1>
      <p className="heroSubtitle" data-aos="fade-down">
        Track your mood, journal your thoughts, and access personalized
        resources to improve your mental well-being. Join our supportive
        community on the path to better mental health.
      </p>
      <div className="heroButtons">
        <button className="heroButton primaryButton" data-aos="fade-down">Start Your Journey</button>
        <button className="heroButton secondaryButton" data-aos="fade-down">Learn More</button>
      </div>
    </div>
    <Home_page2/>




    </section>
   
  );

}

export default Home;
