import React from 'react'
import './VideoPlayer.css'
import Video from '../../assets/college-video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
  return (
    <div className={`video-player ${playState?'':'hide'}`} >
    <video src={Video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer