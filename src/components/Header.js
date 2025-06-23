import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <header className='py-6' >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='/'>
            <img width='75' src={logo} alt='Logo Personal' />
          </a>
          <Link to='contact'
            className='text-gradient btn-link cursor-pointer'
            activeClass='active'
            smooth={true}
            spy={true}>
            <button className='btn btn-sm'>Contacto</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
