import React from 'react'
import Images from '../../utilits/Images/Images'
import Profile from '../../utilits/ProfileCard'
import { Link } from 'react-router'

const Composser = () => {
  return (
    <div className={` bg-white shadow-2xl  block md:hidden`}>
        <div className="post-card  overflow-y-hidden">
            <div className="post-action px-2 flex justify-between">
                <div className="flex items-center justify-center py-2">
               <Link to="/"> <img className='w-8' src={Images.Back} alt="" /> </Link>
                <h5 className='ml-2 font-semibold text-gray-500'>Create Post</h5>
                </div>
               <button className='font-bold text-md text-teal-500'>Post</button>
            </div>
            <div className="border-b-1 border-gray-300  "></div>
            <div className="about-post-creator mt-2 flex items-center px-2">
                                 <Profile/>
                <div className="ml-3 flex flex-col ">
                <h6 className=''>Muhammad Zobayer</h6>
                <button className='mt-1 w-fit bg-slate-100 text-sm rounded-lg p-1 px-3'>Frineds</button>
                </div>
                
            </div>
            <div className="post mt-6 px-2">
              <textarea name="" id="" className='input bg-slate-100 border-none shadow-md shadow-slate-200 h-50'></textarea>
             <div className="post-activity mt-10 px-2">
              <div className="image flex items-center">
                <img className='w-6' src={Images.Photo} alt="" />
                <h6 className='ml-2 font-semibold text-gray-700'>Photos/videos</h6>
              </div>
              <div className="image flex items-center mt-3">
                <img className='w-6' src={Images.Happy} alt="" />
                <h6 className='ml-2 font-semibold text-gray-700'>Feelings/activity</h6>
              </div>
              <div className="image flex items-center mt-3">
                <img className='w-6' src={Images.Live} alt="" />
                <h6 className='ml-2 font-semibold text-gray-700'>Go live</h6>
              </div>
              <div className="image flex items-center mt-3">
                <img className='w-6' src={Images.Event} alt="" />
                <h6 className='ml-2 font-semibold text-gray-700'>Create Event</h6>
              </div>
               

             </div>
             <button className='w-full submit-btn mt-10 rounded-md py-2 text-white font-semibold text-lg'>Post</button>
            </div>

        </div>
    </div>
  )
}

export default Composser