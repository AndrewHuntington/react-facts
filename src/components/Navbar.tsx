import React from 'react';
import icon from '../images/react-icon-small.png';

export default function Navbar() {
  return (
    <nav className="flex py-8 px-6 bg-[#21222A] items-center">
      <img className="w-[29px]" src={icon} alt="logo" />
      <h3 className="text-xl font-bold ml-1 mr-auto text-[#61DAFB]">
        ReactFacts
      </h3>
      <h4 className="text-base font-semibold text-[#DEEBF8]">
        React Course - Project 1
      </h4>
    </nav>
  );
}
