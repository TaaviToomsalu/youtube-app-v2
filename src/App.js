import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import youtube from './api/youtube'
import VideoDetail from "./components/VideoDetail";


const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        handleSubmit('Dark Knight')
    }, [])

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    }

    const handleSubmit = async (searchTerm) => {
        try {
          const response = await youtube.get('search', {
            params: {
              part: 'snippet',
              maxResults: '5',
              key: 'AIzaSyAwePyRcd4FIphWlv00OAZ2EQiZJxtf2m8',
              q: searchTerm
            }
          });
    
          setVideos(response.data.items);
          setSelectedVideo(response.data.items[0]);
    
        } catch (error) {
          console.error('Error occurred:', error);
        }
      };


    return (
        <>
            <SearchBar />
            <VideoDetail video={selectedVideo}/>
        </>
    )
}

export default App