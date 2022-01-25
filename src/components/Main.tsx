import React from 'react';
import './main.css';

export default function Main() {
  return (
    <main className="pt-14 pb-3 bg-no-repeat bg-right-bottom text-white">
      <h1 className="ml-7 font-bold text-[40px] tracking-tighter mb-11">
        Fun facts about React
      </h1>
      <ul className="list-disc ml-14 marker:text-2xl marker:text-[#61DAFB]">
        <li className="pl-3 mb-5 w-[390px] text-base leading-5">
          Was first released in 2013
        </li>
        <li className="pl-3 mb-5 w-[390px] text-base leading-5">
          Was originally created by Jordan Walke
        </li>
        <li className="pl-3 mb-5 w-[390px] text-base leading-5">
          Has well over 100K starts on GitHub
        </li>
        <li className="pl-3 mb-5 w-[390px] text-base leading-5">
          Is maintained by Facebook
        </li>
        <li className="pl-3 mb-5 w-[390px] text-base leading-5">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
}
