import React from 'react'
import { Link } from 'react-router'
import Images from '../../utilits/Images/Images'
import MobileNavlink from '../../data/MobileMenuNavData'

// যদি lucide-react ব্যবহার না করেন, তবে X-এর জায়গায় আপনার Images.Close বাটন ব্যবহার করুন।

const MobileMenu = ({ isOpen, onClose }) => { 
    return (
        <div 
            // এই ক্লাসে পরিবর্তন করা হয়েছে
            className={`
                fixed top-0 right-0 h-full w-full bg-slate-100 shadow-2xl z-50 
                transform transition-transform duration-300 ease-in-out
                md:hidden 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
            `}
        >
            <div className="flex flex-col items-center p-4 h-full overflow-y-auto">
               
               <div className="closebtn w-full flex justify-between items-center mb-8" onClick={onClose}>
                  <img className='max-w-12' src={Images.LogoTwo} alt="" />
                  <img className='max-w-8' src={Images.Close} alt="" />
               </div>

                {/* Menu Links */}
                <div className="mobile-menu w-full flex flex-col space-y-2">
                    <div className="profiles p-4  mobile-menu-nav flex items-center">
                     <Link className='' to="/profile">
                     <img className='profile-img' src={Images.profile} alt="Home" /></Link>
                     <h4 className='ml-2 font-semibold text-teal-500'>Muhammad Zobayer</h4>
                    </div>
                    
                    <div className=" p-4  mobile-menu-nav flex items-center">
                     <Link className='' to=''>
                     <img className=' w-8 h-8 ' src={Images.Love} alt="Friends" /></Link>
                     <h4 className='ml-2 font-medium text-slate-500'>Invite friends</h4>
                    </div>
                 
                

                <div className="grid-link grid grid-cols-2 gap-2">

                    {MobileNavlink.map(item =>(
                        <div className="f-1 mobile-menu-nav p-4">
                         <Link className='' to={item.name}>
                         <img className='w-7' src={item.img} alt="" />
                         <h5 className='text-slate-500 font-normal'>{item.name}</h5>
                         </Link>
                    </div> 
                    ))}
                     
                </div>

                <div className=" p-4  mobile-menu-nav flex items-center">
                     <Link className='' to=''>
                     <img className=' w-8 h-8 ' src={Images.Setting} alt="Friends" /></Link>
                     <h4 className='ml-2 font-medium text-slate-500'>Setting</h4>
                    </div>

                    <div className=" p-4  mobile-menu-nav flex items-center">
                     <Link className='' to=''>
                     <img className=' w-8 h-8 ' src={Images.Help} alt="Friends" /></Link>
                     <h4 className='ml-2 font-medium text-slate-500'>Help & support</h4>
                    </div>
                  <div className=" p-4  mobile-menu-nav flex items-center">
                     <Link className='' to=''>
                     <img className=' w-8 h-8 ' src={Images.Logout} alt="Friends" /></Link>
                     <h4 className='ml-2 font-medium text-slate-500'>Logout</h4>
                    </div> 

                </div>
               
            </div>
        </div>
    )
}

export default MobileMenu