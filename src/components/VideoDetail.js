import React from 'react'

const VideoDetail = ({ video }) => {
    if(!video) return <div>Loading...</div>

    console.log(video)

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="video-container">
                <iframe title='Video Player' src={videoSrc}/>       
            </div>

            <h3 id='title'>{video.snippet.title} - {video.snippet.channelTitle}</h3>
            <h4 id='channelTitle'>{video.snippet.channelTitle}</h4>
            <p id='description'>{video.snippet.description}</p>
        </div>
    )
}

export default VideoDetail