import React from 'react'
import { Link } from 'react-router'
import Images from '../utilits/Images/Images'

const HomePage = () => {
  return (
    
    <div className="max-w-13xl px-3 md:px-6 mx-auto">
    <div className="grid grid-cols-3  gap-2">
      <div className="utilits text-left hidden md:block">
        friends
      </div>
      <div className="post text-center ">
        <h1 className="text-center" >post</h1>
      </div>
      <div className="jm chat text-right hidden md:block">
        chat
      </div>
    </div>
    </div>
  )
}

export default HomePage