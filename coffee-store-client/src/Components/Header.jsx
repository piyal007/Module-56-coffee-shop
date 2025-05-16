import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <>
      <nav className='w-11/12 mx-auto my-4 flex flex-row justify-center gap-4 *:font-semibold'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addcoffee">Add-Coffee</NavLink>
        <NavLink to="/updatecoffee">Update-Coffee</NavLink>
      </nav>
    </>
  );
};

export default Header;