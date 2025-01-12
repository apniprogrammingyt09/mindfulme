

import React, { useState } from 'react';
import '../pages/page_css/INNER_Music.css'; // Import the CSS file
import music1 from "../music/music1.mp3";
import music2 from "../music/music2.mp3";
import music3 from "../music/music3.mp3";
import Music4 from '../music/music4.mp3';
import { IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa";
import { BiSkipPreviousCircle } from "react-icons/bi";
import { BiSkipNextCircle } from "react-icons/bi";
import image1 from "../images/player_pic.jpeg";
import image2 from "../images/player_pic2.jpeg";
import image3 from "../images/player_pic3.jpeg";
import image4 from "../images/player_pic4.jpeg";

const tracks = [
  { title: 'Deep Relaxation Music 1', src: music1 ,image:image1},
  { title: 'Tranquil Mind Meditation', src: music2 ,image:image2 },
  { title: 'Healing Soundscapes', src: music3 ,image:image3},
  { title: 'Calming Waves Meditation', src: Music4,image:image1 },
  { title: 'Shri Hanumanji bhajan ', src: Music4,image:image4 },
];

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const audio = document.getElementById('audio-player');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks.length);
  };

  const handlePrevTrack = () => {
    setCurrentTrack((prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="music-player">
    {/* Track list */}
    <div className="track-list">
      {tracks.map((track, index) => (
        <div
          key={index}
          className={`track ${index === currentTrack ? 'active' : ''}`}
          onClick={() => setCurrentTrack(index)}
        >
          <img src={track.image} alt="Track Image" className="image-item" />
          {track.title}
        </div>
      ))}
    </div>
  
    {/* Now playing section */}
    <div className="now-playing">
      <div className="current-track-info">
        {/* Image of the current track */}
        <img 
          src={tracks[currentTrack].image} 
          alt="Now Playing" 
          className="current-track-image" 
        />
        <span className="track-title">{tracks[currentTrack].title}</span>
      </div>
      
      {/* Playback controls */}
      <div className="playback-controls">
        <button onClick={handlePrevTrack}>
          <svg width="29" height="29" viewBox="0 0 29 29">
            <BiSkipPreviousCircle id="butnX" />
          </svg>
        </button>
        <button onClick={handlePlayPause}>
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <FaPause id="icon_player" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <IoPlay id="icon_player" />
            </svg>
          )}
        </button>
        <button onClick={handleNextTrack}>
          <svg width="29" height="29" viewBox="0 0 29 29">
            <BiSkipNextCircle id="butnX" />
          </svg>
        </button>
      </div>
    </div>
  
    {/* Audio Player */}
    <audio id="audio-player" src={tracks[currentTrack].src} />
  </div>
  
  );
};

export default MusicPlayer;
