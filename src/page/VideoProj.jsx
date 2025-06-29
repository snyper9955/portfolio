import React from 'react'

const VideoProj = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-md aspect-[9/16]">
      <iframe
        className="w-[60%] h-[60%] rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/iZzk_lEZ-7k"
        title="YouTube Shorts"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  )
}

export default VideoProj
