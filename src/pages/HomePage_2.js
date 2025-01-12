import "../Css/Home_Page2.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";
import { Link } from "react-router-dom";

function Home_page2() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const tools = [
    {
      title: "Daily Log",
      description: "Log and monitor your daily emotional states with our intuitive tracking system",
      icon: "🧠",
      link: "/Symptom_tracker",
    },
    {
      title: "Resource Library",
      description: "Access a comprehensive collection of mental health resources and exercises",
      icon: "📖",
      link: "/Guid_meditation",
    },
    {
      title: "Community Support",
      description: "Connect with others in a safe, anonymous, and supportive environment",
      icon: "👥",
      link: "/Community",
    },
    {
      title: "Crisis Support",
      description: "24/7 access to emergency resources and grounding exercises",
      icon: "💬",
      link: "/CBT",
    },
  ];

  return (
    <div className="toolsContainer">
      <h1 className="mainHeading" data-aos="fade-down" style={{ color: "green" }}>
        Comprehensive Mental Health Tools
      </h1>
      <p className="subHeading">
        Everything you need to track, understand, and improve your mental well-being in one place
      </p>
      <div className="toolsGrid" data-aos="zoom-in-up">
        {tools.map((tool, index) => (
          <div key={index} className="toolCard" style={{ cursor: "pointer" }}>
            <div className="toolIcon">{tool.icon}</div>
            <h3 className="toolTitle">{tool.title}</h3>
            <p className="toolDescription">{tool.description}</p>
            <Link to={tool.link}>
              <button className="toolButton" >Learn More</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="footer">
        <p className="footerHeading" style={{ color: "green" }}>
          Ready to start your wellness journey?
        </p>
      </div>
    </div>
  );
}

export default Home_page2;
