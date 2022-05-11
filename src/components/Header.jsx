import React from 'react'
import Logo from "../img/logo.png";
const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      {/* desktop tablet*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
            <img src={Logo} className="w-8 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold"> Foody</p>
        </div>

        <ul className="flex items-center gap-24 pl-auto ">
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

      </div>
      
      

      {/* MOBILE*/}
      <div className="flex items-center justify-between md:hidden w-full h-full ">

      </div>
    </header>
  )
}

export default Header;
