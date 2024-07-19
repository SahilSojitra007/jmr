import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';
import video from '../../assets/vid.mp4';

const VideoPlayer = ({ playState, setplayState }) => {
  const videoRef = useRef(null);

  const closePlayer = (e) => {
    if (e.target === videoRef.current.parentNode) {
      setplayState(false);
    }
  };

  useEffect(() => {
    if (playState) {
      videoRef.current.play().catch(error => {
        console.error('Error attempting to play:', error);
      });
    } else {
      videoRef.current.pause();
    }
  }, [playState]);

  return (
    <div
      className={`video-player ${playState ? '' : 'hide'}`}
      onClick={closePlayer}>
      <video ref={videoRef} src={video} muted controls></video>
    </div>
  );
};

export default VideoPlayer;
