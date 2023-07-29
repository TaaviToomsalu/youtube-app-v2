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

            <h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
            <p>{video.snippet.channelTitle}</p>
            <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoDetail