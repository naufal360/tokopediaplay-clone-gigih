import React from 'react'

function VideoContainer({name, video_url}) {
  return (
    <div>
        <div className='h-[450px] flex flex-col  items-center'>
            <h2 className='self-start text-white text-xl mb-2'>{name}</h2>
            <iframe 
                src={video_url} 
                width="100%"
                height="450"
                title={name}
                className='rounded-xl'
                allowFullScreen
            />
        </div>
    </div>
  )
}

export default VideoContainer