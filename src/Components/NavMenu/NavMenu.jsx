import React from 'react'
import Images from '../../utilits/Images/Images'
import { Link } from 'react-router'

const NavMenu = ({css}) => {
  return (
    <div className={`menu ${css} items-center space-x-7 md:space-x-15 lg:space-x-25 `}>
             <Link><img className='menu-logo' src={Images.Home} alt="" /></Link>
             <Link><img className='menu-logo' src={Images.Friend} alt="" /></Link>
             <Link><img className='menu-logo' src={Images.Videos} alt="" /></Link>
             <Link><img className='menu-logo' src={Images.Notify} alt="" /></Link>
              </div>
  )
}

export default NavMenu