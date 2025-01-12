import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "../pages/page_css/Pre_recorded.css";
import image1 from "../images/game_image1.jpeg";
import image2 from "../images/game_image2.jpeg";
import image3 from "../images/game_image3.jpeg";
import image4 from "../images/game_image4.jpeg";
import image5 from "../images/game_image5.jpeg";
import image6 from "../images/game_image6.jpeg";
import image7 from "../images/game_image6.jpeg";

// Define styles for modals
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 8,
  backgroundColor: '#1c1c1c', // Dark background color
  color: 'white', // Light text color for contrast
  padding: '20px',
};

const modalBackgroundStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background for modal overlay
};

const buttonStyle = {
  backgroundColor: '#ff6347', // Tomato color for button
  color: '#fff', 
  padding: '10px 20px',
  borderRadius: '5px',
  fontWeight: 'bold',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#ff4500', // Darker tomato color on hover
  },
};

// Define a list of games
const games = [
  {
    title: "Game 4: Connect 4",
    duration: "15 MIN",
    thumbnail: image1, 
    views: "1M views",
    ago: "5 days ago",
    description: "Solve puzzles and unlock mysteries!",
    gameLink: "/Games/game1/index.html"
  },
  {
    title: "Game 5: Gorilla Throw",
    duration: "10 MIN",
    thumbnail: image2, 
    views: "500K views",
    ago: "1 week ago",
    description: "Defend the galaxy in this thrilling space shooter!",
    gameLink: "/Games/game2/index.html"
  },
  {
    title: "Game 6: Mind Card",
    duration: "20 MIN",
    thumbnail: image3, 
    views: "2M views",
    ago: "2 weeks ago",
    description: "Race against time and opponents in adrenaline-fueled speed!",
    gameLink: "/Games/game3/index.html"
  },
  {
    title: "Game 7: Snake Game",
    duration: "5 MIN",
    thumbnail: image4, 
    views: "800K views",
    ago: "1 day ago",
    description: "A classic strategy game where you connect four pieces in a row!",
    gameLink: "/Games/game4/index.html"
  },
  {
    title: "Game 5:Z-jumper",
    duration: "10 MIN",
    thumbnail: image5, 
    views: "1.2M views",
    ago: "3 days ago",
    description: "Help the gorilla throw objects to hit targets in the jungle!",
    gameLink: "/Games/game5/index.html"
  },
  {
    title: "Game 6: RELEX YOUR SELF",
    duration: "8 MIN",
    thumbnail: image6, 
    views: "300K views",
    ago: "2 days ago",
    description: "Test your memory and strategy skills with this card game!",
    gameLink: "/Games/game6/index.html"
  },
  {
    title: "Game 7:HARD ROP",
    duration: "5 MIN",
    thumbnail: image7, 
    views: "5M views",
    ago: "1 week ago",
    description: "Control the snake and eat food to grow longer without hitting walls!",
    gameLink: "/Games/game7/index.html"
  },

];

  function GameModal({ selectedGame, open, handleClose }) {
    const handleGameStart = () => {
      window.open(selectedGame.gameLink, '_blank'); // Opens the game in a new tab
    };
  
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="game-modal-title"
        aria-describedby="game-modal-description"
        sx={modalBackgroundStyle}
      >
        <Box sx={style}>
          <h2 id="game-modal-title">{selectedGame.title}</h2>
          <p id="game-modal-description">{selectedGame.description}</p>
          <img src={selectedGame.thumbnail} alt={selectedGame.title} width="100%" />
          <p>{selectedGame.duration} of gameplay</p>
          
          <Button onClick={handleGameStart} sx={buttonStyle} style={{marginRight:"30px"}}>Play Now</Button>
          <Button onClick={handleClose} sx={buttonStyle}>Close</Button>
        </Box>
      </Modal>
    );
  }

export default function GameListModal() {
  const [openParent, setOpenParent] = React.useState(false); // For parent modal
  const [openChild, setOpenChild] = React.useState(false); // For child modal
  const [selectedGame, setSelectedGame] = React.useState(games[0]); // Default game

  const handleParentOpen = () => setOpenParent(true);
  const handleParentClose = () => setOpenParent(false);

  const handleChildOpen = (game) => {
    setSelectedGame(game); // Set selected game
    setOpenChild(true); // Open child modal
  };
  const handleChildClose = () => setOpenChild(false);

  return (
    <div>
      <Button onClick={handleParentOpen} id="model_button" sx={buttonStyle}>
        Game List
      </Button>
      <Modal
        open={openParent}
        onClose={handleParentClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={modalBackgroundStyle}
      >
        <Box sx={{ ...style, width: 500 }} id="model">
          <div className="game-list">
            <h2>Available Games</h2>

            {games.map((game, index) => (
              <div
                className="game-card"
                key={index}
                onClick={() => handleChildOpen(game)} // Open child modal on click
                style={{ cursor: "pointer", marginBottom: '20px', display: 'flex' }}
              >
                <img src={game.thumbnail} alt={game.title} style={{ width: '150px', marginRight: '20px', borderRadius: '8px' }} />
                <div className="game-info">
                  <h3 style={{ color: '#fff', fontSize: '16px' }}>{game.title}</h3>
                  <p style={{ color: '#aaa' }}>{game.duration} of gameplay</p>
                  <p style={{ color: '#aaa' }}>{game.views} • {game.ago}</p>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Modal>

      {/* Child Modal */}
      <GameModal
        selectedGame={selectedGame}
        open={openChild}
        handleClose={handleChildClose}
      />
    </div>
  );
}
