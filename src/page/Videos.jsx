import React from 'react'
import Profile from '../utilits/Profile'

const Videos = () => {
  return (
    <div className='mt-4 max-w-13xl px-2 md:px-6 mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" md:col-span-1 settings hidden md:block">
                hello
            </div>
            <div className=" md:col-span-2 flex items-center justify-center">
            <div className="video-card max-w-4xl w-full bg-slate-100 shadow-lg rounded-xl p-2">
                <div className="profile flex items-center">
                    <Profile/>
                    <div className="flex-col ml-2">
                        <h6 className=''>Muhammad Zobayer</h6>
                        <div className="flex justify-between w-25">
                            <p className='text-slate-500'>today</p>  
                          
                        </div>
                        
                    </div>
                </div>
                <div className="video-descripstion mt-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, placeat.
                </div>
               <div className="relative w-full mt-4" style={{ paddingTop: "56.25%" }}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/Mg9gkMrgqro?list=PL9rMoWCNmi8aeLkLBdHlL9dtIza9QA9b9"
                    title="Surah Al-Furqan [61-77] Muhammad Al Luhaidan | ‎سورة الفرقان محمد اللحيدان"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Videos