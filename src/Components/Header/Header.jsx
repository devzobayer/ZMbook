import React, { useState } from 'react'
import Images from '../../utilits/Images/Images'
import { Link } from 'react-router'
import NavMenu from '../NavMenu/NavMenu'
import MobileMenu from '../MobileMenu/MobileMenu'


const Header = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false); 
   const [searchOpen, setSearchOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleSearch =()=>{
       setSearchOpen(!searchOpen);
    }
  return (
    <>
    <nav className='bg-slate-100 border-b-1 border-teal-100 w-full  '>
           <div className="max-w-13xl px-3 md:px-6 mx-auto ">
        <div className='h-16 flex items-center justify-between  '>
          
        <div className="logo flex items-center justify-center">
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

  <div className="search-bar mt-2 ml-2  flex items-center">
    <img src={Images.Search} alt="" className='max-w-6 block md:hidden'  onClick={toggleSearch} />
    <input 
      type="text" 
      className={`rounded-4xl p-2 px-1 md:px-6 input border-gray-300 bg-white transition duration-2000 
        ${searchOpen ? 'block' : 'hidden'} md:block`} 
      placeholder='Search ZMbook'
    />
  </div>
</div>

          

          

           <NavMenu css={'hidden md:flex lg:flex xl:flex'}/>

          <div className="Account  flex items-center"> 
            <div className="account-img relative">
                <img className='profile-img border-2 border-teal-500 ' src={Images.profile} alt="" />
                <img className='dropdown absolute bottom-0 right-0' src={Images.Down} alt="" />  
            </div>             
          <div className="mobile-menu block md:hidden lg:hidden xl:hidden ml-3"  onClick={toggleMenu}><img className='w-8' src={Images.Menu} alt="" /></div>
              </div>
            
              
              </div>          
          </div>
          </nav>

            {/* Side Drawer Component */}
            <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
          
          </>
  )
}

export default Header