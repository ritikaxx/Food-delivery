import React from 'react'
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket} from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { app } from "../firebase.config";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const login = async () => {
    const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
  };
  return (
    
    <header className='fixed z-50 w-screen p-6 px-16'>
      
      {/* desktop tablet*/}

      <div className="hidden md:flex w-full h-full items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="w-8 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold"> Foodys</p>
        </Link>

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
        
        <div className="relative">
        <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
        />
      </div>
      </div>
  </div>
      
      {/* MOBILE*/}
      <div className="flex items-center justify-between md:hidden w-full h-full ">

      </div>
    </header>
  )
}

export default Header;
