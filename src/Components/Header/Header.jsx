import React, {  } from 'react'
import Images from '../../utilits/Images/Images'
import { Link } from 'react-router'
import NavMenu from '../NavMenu/NavMenu'
import SubHeader from './SubHeader'
import MobileMenu from '../MobileMenu/MobileMenu'



const Header = () => {
    
  return (
    <>
    <SubHeader/>
    <nav className='bg-slate-100 border-b-1 border-slate-200 w-full overflow-x-hidden '>
           <div className="max-w-13xl px-3 md:px-6 mx-auto ">
          
        <div className='h-16 flex items-center justify-center md:justify-between  '>
             
           <NavMenu css={'hidden md:flex lg:flex xl:flex '}/>
           <MobileMenu/>

          <div className={`Account   flex  items-center transform transition-all duration-600 ease-in-out`} > 
            <div className="account-img relative">
                <img className={`profile-img border-2 border-teal-500  hidden md:block`} src={Images.profile} alt="" />
                <img className='dropdown absolute bottom-0 right-0 hidden md:block' src={Images.Down} alt="" />  
            </div>  
              </div>
            
              
              </div>          
          </div>
          </nav>

          
          </>
  )
}

export default Header