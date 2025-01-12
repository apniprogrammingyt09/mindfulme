// CommunityForum.js
import React from 'react';
import "../Css/Community.css"
const Community = () => {
  return (
    <div className="community-forum">
    

      <div className="forum-container">
        <h2 style={{fontSize:"2vmax" ,fontWeight:"600"}}>Community Forum</h2>

        <div className="discussion-list">
          <div className="discussion-item">
            <h3>Deaking with work realated  stress </h3>
            <p className="tags">Stress • Work-Life Balance</p>
            <div className="discussion-meta">
              <span>👤 Anonymous</span>
              <span>💬 23 replies</span>
              <span>❤️ 45 likes</span>
            </div>
            <button className="join-button" ><a href='https://chat.whatsapp.com/LsixLN2yLhN7NnRuBT9yf2' target='_blank'> Join Discussion </a> </button>
          </div>

          <div className="discussion-item">
            <h3>Meditation Techniques </h3>
            <p className="tags">Meditation • Beginners</p>
            <div className="discussion-meta">
              <span>👤 Anonymous</span>
              <span>💬 15 replies</span>
              <span>❤️ 32 likes</span>
            </div>
            <button className="join-button"><a href='https://chat.whatsapp.com/FFq5k8nvtHAAWnfcEceRgw' target='_blank'> Join Discussion </a></button>
          </div>

          <div className="discussion-item">
            <h3>Health Tips  </h3>
            <p className="tags">Sleep • Habits</p>
            <div className="discussion-meta">
              <span>👤 Anonymous</span>
              <span>💬 19 replies</span>
              <span>❤️ 38 likes</span>
            </div>
            <button className="join-button"><a href='https://chat.whatsapp.com/GIK1TVNUelW4zBcywmLqCG' target='_blank'> Join Discussion </a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

// export default Community
