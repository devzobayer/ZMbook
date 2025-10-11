import React from 'react'
import Images from '../../utilits/Images/Images'
import Profile from '../../utilits/Profile'

const Post = () => {
  return (
   <div className="w-full bg-slate-50 rounded-2xl mt-2 p-4 ">
            <div className="post-card flex items-center">
              <Profile/>
              <input type="text" 
              className='w-full ml-4 input border-gray-300 bg-white rounded-full font-semibold'
              placeholder="What's on your mind, Muhammad?"
               />
               <div className="img block md:hidden">
                <img className='w-15 ml-2' src={Images.Photo} alt="" />
               </div>
            </div>
            <div className="border-b-1 border-gray-300 my-4 hidden md:block"></div>

           <div className="md:grid md:grid-cols-3 gap-2 text-center hidden  ">
        <div className="activity flex justify-center items-center hover:bg-gray-100 rounded-lg p-1 cursor-pointer transition">
          <img className="w-7" src={Images.Live} alt="" />
          <h5 className="ml-1 font-semibold text-gray-600 text-sm">Live Video</h5>
        </div>

        <div className="activity flex justify-center items-center hover:bg-gray-100 rounded-lg p-1  cursor-pointer transition">
          <img className="w-7" src={Images.Photo} alt="" />
          <h5 className="ml-1 font-semibold text-gray-600 text-sm">Photo/Video</h5>
        </div>

        <div className="activity flex justify-center items-center hover:bg-gray-100 rounded-lg p-1 cursor-pointer transition">
          <img className="w-7" src={Images.Happy} alt="" />
          <h5 className="ml-1 font-semibold text-gray-600 text-sm">Feelings</h5>
        </div>
      </div>

          </div>
  )
}

export default Post