/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <section>
      <nav className="flex gap-2 justify-center">
        <NavLink className="text-white navLink" to="/">Home</NavLink>
        <NavLink className="text-white navLink" to="/to-do-list">To Do List</NavLink>
        <NavLink className="text-white navLink" to="/copyright">Copyright</NavLink>
      </nav>
    </section>
  );
}

export default Navbar;
