import React, { useState } from 'react'
import Images from '../../utilits/Images/Images'
import { Link } from 'react-router'
import NavMenu from '../NavMenu/NavMenu'
import MobileMenu from '../MobileMenu/MobileMenu'
import HeaderLogo from '../HeaderComponents/HeaderLogo/HeaderLogo'
import SearchBar from '../HeaderComponents/SearchBar/SearchBar'


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
    <nav className='bg-slate-100 border-b-1 border-teal-100 w-full overflow-x-hidden '>
           <div className="max-w-13xl px-3 md:px-6 mx-auto ">
        <div className='h-16 flex items-center justify-between  '>
          
        <div className="flex items-center justify-center">
       <HeaderLogo searchOpen={searchOpen}/>
       <SearchBar  toggleSearch={toggleSearch} searchOpen={searchOpen}/>

          </div>

          
           <NavMenu css={'hidden md:flex lg:flex xl:flex '}/>

          <div className={`Account overflow-x-hidden  flex items-center transform transition-all duration-600 ease-in-out ${searchOpen ? 'opacity-0 w-0 translate-x-5' : 'opacity-100 translate-x-0'}`}> 
            <div className="account-img relative">
                <img className={`profile-img border-2 border-teal-500  `} src={Images.profile} alt="" />
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