import React from 'react';
// import icons from  react-icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsLaptopFill } from 'react-icons/bs';
//Link
import { Link } from 'react-scroll';
//
const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1
      text-white/50 '>
        <Link
          to='home'
          activeClass='active'
          smooth={true}
          offset={-180}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
        >
          <BiHomeAlt />
        </Link>
        {/* <Link
          to='about'
          activeClass='active'
          smooth={true}
          // offset={+20}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
        >
          <BiUser />
        </Link> */}
        <Link to='services'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
        >
          <BsClipboardData />
        </Link  >
        <Link to='work'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsBriefcase />
        </Link>

        <Link to='experience'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsLaptopFill />
        </Link>
        
        <Link to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsChatSquare />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
