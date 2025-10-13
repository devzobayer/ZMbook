import React from 'react'
import Images from '../../utilits/Images/Images'
import { Link } from 'react-router'

const MobileMenu = () => {
  return (
     <div className={`flex items-center  space-x-10  md:hidden `}>
             <Link><img className='max-w-8' src={Images.Home} alt="" /></Link>
             <Link><img className='max-w-8' src={Images.Videos} alt="" /></Link>
             <Link><img className='max-w-8' src={Images.Notify} alt="" /></Link>
              </div>
  )
  
}

export default MobileMenu