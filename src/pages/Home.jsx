/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaReact } from 'react-icons/fa';
import Navbar from '../components/navbar/Navbar';

function Home() {
  return (
    <div className="bg-slate-900 h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-orange-400 pt-4 font-bold">To Do List in React.js</h1>
        <p className="text-7xl text-orange-400 text-center"><FaReact /></p>
        <p className="text-orange-400">A To Do list where you can add, delete and edit your favorite tasks!</p>
      </div>
    </div>
  );
}

export default Home;
