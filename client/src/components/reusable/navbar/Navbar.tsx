import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from './Navitems';
import logo from '../../../assets/icons/logo.jpg';

const NavBar: React.FC = () => {
  return (
    <div className='h-[90px] z-50 fixed top-0 flex bg-slate-400 items-center w-full m-auto'>
      <nav className='flex items-center h-full justify-between w-full'>
        <div className='flex justify-between items-center w-full'>
          <Link to='/' className='block'>
            <img src={logo} alt='' className='block h-8 w-8' />
          </Link>
          <NavItems />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
