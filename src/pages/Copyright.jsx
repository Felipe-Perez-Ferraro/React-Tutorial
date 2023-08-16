import React from 'react';
import Navbar from '../components/navbar/Navbar';

function Copyright() {
  return (
    <div className="bg-slate-900 h-screen">
      <Navbar />
      <div className="flex justify-center items-center mt-10">
        <h2 className="text-orange-400 text-3xl font-semibold p-1 copy__title">All rights saved by the name of Felipe Perez Ferraro</h2>
      </div>
    </div>
  );
}

export default Copyright;
