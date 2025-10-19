import React from 'react'
import Profile from '../utilits/Profile'
import { videoData } from '../data/videoData'

const Videos = () => {
  return (
    <div className='mb-2 max-w-13xl px-2 md:px-6 mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" md:col-span-1 settings hidden md:block">
                hello
            </div>
            <div className=" md:col-span-2 flex flex-col items-center justify-center">
                {videoData.map((video)=> (
            <div className="video-card max-w-4xl w-full bg-slate-100 mt-6 shadow-lg rounded-xl ">
                <div className="profile flex items-center">
                    <Profile/>
                    <div className="flex-col ml-2">
                        <h6 className=''>{video.name}</h6>
                        <div className="flex justify-between w-25">
                            <p className='text-slate-500'>{video.date}</p>  
                          
                        </div>
                        
                    </div>
                </div>
                <div className="video-descripstion mt-4">
                    <p>{video.description}</p>
                </div>
               <div className="relative w-full mt-4" style={{ paddingTop: "56.25%" }}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                </div>

            </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Videos