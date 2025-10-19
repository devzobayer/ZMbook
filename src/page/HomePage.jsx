import React, {  } from 'react'
import Story from '../Components/Story/Story'
import DekstopPost from '../Components/Post/DekstopPost'
import MobilePost from '../Components/Post/MobilePost'



const HomePage = () => {

  return (
    <>
    <div className="  m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        
        {/* Left side (friends) */}
        <div className="utilits text-left hidden md:block">
          friends
        </div>

        {/* Center (post) */}
        <div className="post   md:px-6 text-center ">
         <DekstopPost/>
         <MobilePost/>
           <div className="border-b-1 border-slate-200  mt-2 border-double"></div>
           <Story/>
         <div className="border-b-1 border-slate-200  mt-2 border-double"></div>
        </div>

        {/* Right side (chat) */}
        <div className="jm chat text-right hidden md:block">
          chat
        </div>
      </div>
    </div>
   
    </>
  )
}

export default HomePage
