import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/reusable/navbar/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className='mt-[90px]'>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
