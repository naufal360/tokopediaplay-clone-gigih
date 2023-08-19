import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import VideoCard from '../components/VideoCard';
import axios from 'axios';
import { base_url } from '../config';

function Home() {
    const videoUrl = base_url + "/videos";

    const [videos, setVideos] = useState([]);

    function renderVideoResult() {
        return(
            <>
                {
                    videos.map((video) => (
                        <VideoCard key={video._id} _id={video._id} name={video.name} url_thumbnail={video.url_thumbnail}/>
                    ))
                }
            </>
        )
    }

    useEffect(() => {
        axios.get(videoUrl).then((res) => {
            setVideos(res.data.data);
        });
    }, []);


  return (
    <div className='pb-64'>
        <Navbar />
        <div className='flex flex-row gap-4 flex-wrap px-5 py-5'>
            {videos.length > 0 && renderVideoResult()}
        </div>
    </div>
  )
}

export default Home