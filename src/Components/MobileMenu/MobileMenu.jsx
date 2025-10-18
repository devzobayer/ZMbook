import React from 'react'
import Images from '../../utilits/Images/Images'
import { Link } from 'react-router'

const MobileMenu = () => {
  return (
    <div className="bg-slate-100 border-b-1 border-slate-200">
      <div className="max-w-13xl px-3 md:px-6 mx-auto">
     <div className=" h-10 flex items-center justify-between md:hidden overflow-x-hidden">
  <Link><img className="max-w-6 mb-1" src={Images.Home} alt="" /></Link>
  <Link><img className="max-w-7" src={Images.Videos} alt="" /></Link>
  <Link><img className="max-w-7" src={Images.Friend} alt="" /></Link>
  <Link><img className="max-w-7" src={Images.Msg} alt="" /></Link>
  <Link><img className="max-w-7" src={Images.Notify} alt="" /></Link>
</div>
</div>
</div>

  )
  
}

export default MobileMenu