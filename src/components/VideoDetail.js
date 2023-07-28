import React from 'react'

const VideoDetail = ({ video }) => {
    if(!video) return <div>Loading...</div>

    console.log(video)

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <>
            <iframe style={{ border: '0px' }} height="100%" width="100%" title='Video Player' src={videoSrc}/>       
        
            <h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
            <p>{video.snippet.channelTitle}</p>
            <p>{video.snippet.description}</p>
        </>
    )
}

export default VideoDetail