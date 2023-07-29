import React from 'react'

import VideoItem from './VideoItem'



const VideoList = ({ videos, onVideoSelect }) => {
    
    const listOfVideos = videos.map((video) => (
        <VideoItem key={video.id} video={video} onVideoSelect={onVideoSelect} />
    ));


    return (
        <div>
            {listOfVideos}
        </div>
    )
}

export default VideoList