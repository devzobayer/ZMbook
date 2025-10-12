import React from 'react'
import Images from '../../utilits/Images/Images'
import Profile from '../../utilits/Profile'

const PostCard = ({postOpen, togglePost}) => {
  return (
    <div className={`fixed  top-0 left-0 h-full w-full bg-white shadow-2xl z-10 
                transform transition-transform duration-300 ease-in-out
                ${postOpen ? 'translate-x-0' : 'translate-x-[-100%]' } block md:hidden
    `}>
        <div className="post-card px-2">
            <div className="post-action flex justify-between">
                <div className="flex items-center">
                <img className='w-8' src={Images.Back} alt=""  onClick={togglePost}/> 
                <h5 className='ml-2 font-semibold text-gray-500'>Create Post</h5>
                </div>
               <button className='font-semibold text-xl text-teal-500'>Post</button>
            </div>
            <div className="border-b-1 border-gray-300 my-4 "></div>
            <div className="about-post-creator flex items-center">
                                 <Profile/>
                <div className="ml-3 flex flex-col ">
                <h6 className=''>Muhammad Zobayer</h6>
                <button className='mt-1 w-fit bg-slate-100 text-sm rounded-lg p-1 px-3'>Frineds</button>
                </div>
                
            </div>
            <div className="post mt-3">
              <textarea name="" id="" className='input bg-slate-100 border-none shadow-md shadow-slate-200 h-30'></textarea>
             <div className="post-activity mt-4">
              <div className="image flex items-center">
                <img className='w-6' src={Images.Photo} alt="" />
                <h6 className='ml-2 font-semibold text-gray-700'>Photos/videos</h6>
              </div>
              <div className="image flex items-center mt-2">
                <img className='w-6' src={Images.Event} alt="" />
                <h6 className='ml-2 font-semibold text-gray-700'>Create Event</h6>
              </div>

             </div>
            </div>

        </div>
    </div>
  )
}

export default PostCard