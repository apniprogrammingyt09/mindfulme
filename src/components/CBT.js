import React from "react";
import "../Css/CBT.css"; // Import the CSS file

function SupportCrisis() {
  return (
    <div className="support-crisis">
      <div className="content-area">
        <div className="overlay-background">
          <h1 className="main-title">Crisis Support</h1>
          <div className="info-cards">
            <div className="info-card">
              <h2>📞 Emergency Hotline</h2>
              <p>Call for immediate support in crisis situations.</p>
              <button>
                <a
                  href="https://call.whatsapp.com/voice/KHRFDaUQIGdTS9noD81u26"
                  target="_black"
                  className="btn btn-success"
                >
                  Call
                </a>
              </button>
            </div>
            <div className="info-card">
              <h2>💬 Crisis Text Line</h2>
              <p>Text with a crisis counselor 24/7.</p>
              <button>
                <a
                  href="https://wa.me/917067954499?text=I'm%20seeking%20help%20immediately"
                  target="_blank"
                  className="btn btn-success"
                >
                  Text Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="site-footer">© 2023 MindfulMe. All rights reserved.</footer>
    </div>
  );
}

export default SupportCrisis;

// // export default CBT
//  /* <h2 className="section-title" id='text_2'>Mindfulness Tips</h2>
//       <ul className="tips-list">
//         <li>Practice deep breathing exercises for 5 minutes daily.</li>
//         <li>Use the 5-4-3-2-1 grounding technique when feeling anxious.</li>
//         <li>Try a body scan meditation before bed for better sleep.</li>
//         <li>Engage in mindful eating during one meal each day.</li>
//         <li>Take short mindfulness breaks throughout your workday.</li>
//       </ul>
 


