

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "../pages/page_css/Pre_recorded.css";
import image1 from "../images/pre_image2.jpeg"
import image2 from "../images/pre_image3.jpeg"
import image3 from "../images/pre_image4.jpeg"
import image4 from "../images/pre_image5.jpeg"
import image5 from "../images/pre_image6.jpeg"
import image7 from "../images/pre_image7.jpeg"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const videos = [
      {
        title: "Release Stress & Improve Focus",
        duration: "10 MIN",
        thumbnail: image1, // Replace with actual image path
        views: "611K views",
        ago: "11 months ago",
        channel: "Hum Jeetenge Meditation",
        videoSrc: "https://www.youtube.com/embed/Lv1jpqkN4ZY?si=J23e1gx27c3yWO82",
      },
      {
        title: "7 Min Guided Meditation for Focus and Mental Clarity",
        duration: "7 MIN",
        thumbnail: image2, // Replace with actual image path
        views: "138K views",
        ago: "2 years ago",
        channel: "Hum Jeetenge Meditation",
        videoSrc: "https://www.youtube.com/embed/9O8xkWySvX4?si=I7_VoGIXAhP_og-i",
      },
      {
        title: "Calm Your Mind with Guided Meditation",
        duration: "15 MIN",
        thumbnail: image3, // Replace with actual image path
        views: "320K views",
        ago: "8 months ago",
        channel: "Hum Jeetenge Meditation",
        videoSrc: "https://www.youtube.com/embed/qqks74DW0DE?si=tbWFC1QQXiW2OUGd",
      },
      {
        title: "Daily Relaxation Techniques",
        duration: "20 MIN",
        thumbnail: image4, // Replace with actual image path
        views: "280K views",
        ago: "1 year ago",
        channel: "Hum Jeetenge Meditation",
        videoSrc: "https://www.youtube.com/embed/wPoZVN6WsQg?si=cKXMjafOoXD8Ufta",
      },
      {
        title: "Morning Energy Boost Meditation",
        duration: "10 MIN",
        thumbnail:image5, // Replace with actual image path
        views: "110K views",
        ago: "6 months ago",
        channel: "Hum Jeetenge Meditation",
        videoSrc: "https://www.youtube.com/embed/D08e9UZFKdE?si=MmR_2RGZqlJJDP_l",
      },
      {
        title: "Sleep Well Guided Meditation",
        duration: "12 MIN",
        thumbnail: image7, // Replace with actual image path
        views: "95K views",
        ago: "4 months ago",
        channel: "Hum Jeetenge Meditation",
        videoSrc: "https://www.youtube.com/embed/1B2BcayTPWY?si=mIyU9Wd6GzCwT3FU",
      },
      {
        title: "Evening Relaxation and Gratitude",
        duration: "8 MIN",
        thumbnail: image3, // Replace with actual image path
        views: "89K views",
        ago: "3 months ago",
        channel: "Hum Jeetenge Meditation",
        videoSrc: "https://www.youtube.com/embed/Ax05WkNwOiU?si=u7rSuSkQxeH_3WbA",
      },
    ];

function ChildModal({ selectedVideo, open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 600 }}>
        <h2 id="child-modal-title">{selectedVideo.title}</h2>
        <p id="child-modal-description">{selectedVideo.duration} Guided Meditation</p>

        <iframe
          width="560"
          height="315"
          src={selectedVideo.videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
}

export default function NestedModal() {
  const [openParent, setOpenParent] = React.useState(false); // For parent modal
  const [openChild, setOpenChild] = React.useState(false); // For child modal
  const [selectedVideo, setSelectedVideo] = React.useState(videos[0]); // Default video

  const handleParentOpen = () => setOpenParent(true);
  const handleParentClose = () => setOpenParent(false);

  const handleChildOpen = (video) => {
    setSelectedVideo(video); // Set selected video
    setOpenChild(true); // Open child modal
  };
  const handleChildClose = () => setOpenChild(false);

  return (
    <div>
      <Button onClick={handleParentOpen} id="model_button">
        Pre-recorded Sessions
      </Button>
      <Modal
        open={openParent}
        onClose={handleParentClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }} id="model">
          <div className="playlist">
            <h2>Guided Meditation Playlist</h2>

            {videos.map((video, index) => (
              <div
                className="video-card"
                key={index}
                onClick={() => handleChildOpen(video)} // Open child modal on click
                style={{ cursor: "pointer" }}
              >
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.duration} Guided Meditation</p>
                  <p>
                    {video.channel} • {video.views} • {video.ago}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Modal>

      {/* Child Modal */}
      <ChildModal
        selectedVideo={selectedVideo}
        open={openChild}
        handleClose={handleChildClose}
      />
    </div>
  );
}
