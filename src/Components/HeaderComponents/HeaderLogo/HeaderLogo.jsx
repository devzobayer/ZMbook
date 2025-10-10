import React from 'react'
import Images from '../../../utilits/Images/Images'
import { Link } from 'react-router'

const HeaderLogo = ({searchOpen}) => {
  return (
   <div className="logo-img flex items-start">
    <Link className='font-semibold zmbook nunito-sans'>
      <img className='max-w-28 hidden md:block' src={Images.Logo} alt="" />
        <img
        className={`max-w-12 transform transition-all duration-300 ease-in-out
          ${searchOpen ? 'opacity-0 -translate-x-5  w-0 overflow-hidden scale-95' : 'opacity-100 translate-x-0 w-12 scale-100'}
          md:hidden`}
        src={Images.LogoTwo}
        alt="Logo"
      />
    </Link>
  </div>
  )
}

export default HeaderLogo