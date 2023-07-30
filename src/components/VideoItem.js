import React from 'react'

const  VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="video-item" >
            <img 
                className="video-thumbnail" 
                alt='thumbnail' 
                src={video.snippet.thumbnails.medium.url} 
                onClick={() => onVideoSelect(video)}
                style={{ cursor: 'pointer' }}
            />
            <div className='video-info'>
                <p 
                    className="video-title"
                    onClick={() => onVideoSelect(video)}
                    style={{ cursor: 'pointer' }}
                >
                    {video.snippet.title}
                </p>
            </div>
        </div>
    )
}

export default VideoItem