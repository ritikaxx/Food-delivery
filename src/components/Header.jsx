import React from 'react'
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      {/* desktop tablet*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
            <img src={Logo} className="w-8 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold"> Foody</p>
        </div>
        <div className="flex items-center gap-8">
        <ul className="flex items-center gap-24 ">
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Home
              </li>
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Menu
              </li>
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                About Us
              </li>
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Service
              </li>
        </ul>
        
        <div className="relative flex items-center justify-center ">
        <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
              <div className=" absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                </p>
              </div>
        </div>

        <img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
        />

      </div>
  </div>
      
      {/* MOBILE*/}
      <div className="flex items-center justify-between md:hidden w-full h-full ">

      </div>
    </header>
  )
}

export default Header;
