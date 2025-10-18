import React, { useState } from 'react'
import Images from '../../utilits/Images/Images'
import MobileMenu from '../MobileMenu/MobileMenuLayout';

const SubHeader = () => {
  const[isOpen,setIsOpen]=useState(false);
  const toggleMenu =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div className='w-full  bg-slate-100 md:hidden overflow-x-hidden' >
      <div className="max-w-13xl px-3 md:px-6 mx-auto">
        <div className="flex h-10 items-center justify-between">
         <div className="logo">
           <img className='max-w-22' src={Images.Logo} alt="" />
         </div>
         <div className="menu flex items-center space-x-4">
          <img className='max-w-7' src={Images.Plus} alt="" />
          <img className='max-w-7' src={Images.Search} alt="" />
          <img className='max-w-7' src={Images.Menu} alt="" onClick={toggleMenu} /> 
         </div>

        </div>

      </div>

    </div>
    <MobileMenu isOpen={isOpen} onClose={toggleMenu}/>
    </>
  )
}

export default SubHeader