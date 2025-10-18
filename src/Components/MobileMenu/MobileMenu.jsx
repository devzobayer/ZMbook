import React from 'react'
import Images from '../../utilits/Images/Images'
import { Link } from 'react-router'

const MobileMenu = () => {
  return (
     <div className="flex items-center space-x-14 md:hidden overflow-x-hidden">
  <Link><img className="max-w-6 mb-1" src={Images.Home} alt="" /></Link>
  <Link><img className="max-w-7" src={Images.Videos} alt="" /></Link>
  <Link><img className="max-w-7" src={Images.Friend} alt="" /></Link>
  <Link><img className="max-w-7" src={Images.Msg} alt="" /></Link>
  <Link><img className="max-w-7" src={Images.Notify} alt="" /></Link>
</div>

  )
  
}

export default MobileMenu