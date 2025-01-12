import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "../Css/Model_Card.css"; // Your provided CSS
import deep1 from "../images/deep1.jpeg"
import deep2 from "../images/deep2.jpeg"
import deep3 from "../images/deep3.jpeg"
import deep4 from "../images/deep4.jpeg"
import deep5 from "../images/deep5.jpeg"

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

const items = [
    {
      title: "Deep Relaxation Music 1",
      description: "A calming track designed to help you unwind and release stress.",
      thumbnail:deep1, // Example thumbnail URL
      iframeSrc: "https://www.youtube.com/embed/yditiWAHTCM?si=13d-u0xJh97zLSdy", // Add iframe URL for each item
    },
    {
      title: "Tranquil Mind Meditation",
      description: "Soft, serene music to clear your mind and bring you peace.",
      thumbnail:deep2, // Example thumbnail URL
      iframeSrc: "https://www.youtube.com/embed/ysLkaafDyGw?si=ISprh3KxTuVgj9pP", // Add iframe URL for each item
    },
    {
      title: "Healing Soundscapes",
      description: "Relaxing soundscapes that rejuvenate your mind and soul.",
      thumbnail:deep3, // Example thumbnail URL
      iframeSrc: "https://www.youtube.com/embed/1NeAIuVl5JY?si=aD0AQ06KE-5RIfCh", // Add iframe URL for each item
    },
    {
      title: "Calming Waves Meditation",
      description: "A beautiful blend of ocean waves and calming music for deep relaxation.",
      thumbnail: deep4, // Example thumbnail URL
      iframeSrc: "https://www.youtube.com/embed/VEWmRyZJcQI?si=Prs26fvKEBYVQXTA", // Add iframe URL for each item
    },
    {
      title: "Serenity Sounds",
      description: "Peaceful music designed to help you find serenity and inner calm.",
      thumbnail: deep5, // Example thumbnail URL
      iframeSrc: "https://www.youtube.com/embed/rD9jpzZc4ZQ?si=rz1oudIlcEKg_owq", // Add iframe URL for each item
    }
    // Add more items as needed
  ];
  
  

function ChildModal({ selectedItem, open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 600 }}>
        <h2 id="child-modal-title">{selectedItem.title}</h2>
        <p id="child-modal-description">{selectedItem.description}</p>

        {/* Embed the iframe video */}
        <iframe
          width="560"
          height="315"
          src={selectedItem.iframeSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <Button onClick={handleClose}>Close </Button>
      </Box>
    </Modal>
  );
}

export default function NestedModal() {
  const [openParent, setOpenParent] = React.useState(false);
  const [openChild, setOpenChild] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(items[0]);

  const handleParentOpen = () => setOpenParent(true);
  const handleParentClose = () => setOpenParent(false);

  const handleChildOpen = (item) => {
    setSelectedItem(item);
    setOpenChild(true);
  };
  const handleChildClose = () => setOpenChild(false);

  return (
    <div>
      <Button onClick={handleParentOpen} id="model_button">ASMR video</Button>
      <Modal
        open={openParent}
        onClose={handleParentClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }} id="model">
          <div className="playlist">
            <h2>Animated visuals</h2>
            {items.map((item, index) => (
              <div
                key={index}
                className="video-card"
                onClick={() => handleChildOpen(item)}
                style={{ cursor: "pointer" }}
              >
                <img src={item.thumbnail} alt={item.title} />
                <div className="video-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Modal>

      {/* Child Modal */}
      <ChildModal
        selectedItem={selectedItem}
        open={openChild}
        handleClose={handleChildClose}
      />
    </div>
  );
}
