import React from 'react'
import Images from '../../../utilits/Images/Images'
import { Link } from 'react-router'

const HeaderLogo = () => {
  return (
   <div className="logo-img flex items-start ">
    <Link className='font-semibold '>
      <img className='max-w-28 hidden md:block' src={Images.Logo} alt="" />
        <img
        className={`max-w-12 transform  md:hidden`}
        src={Images.LogoTwo}
        alt="Logo"
      />
    </Link>
  </div>
  )
}

export default HeaderLogo