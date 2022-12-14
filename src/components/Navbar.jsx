import { menu, close } from '../assets';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="flex flex-row text-base items-center px-10 py-8">
        <div className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-orange-500 cursor-pointer">
          SOURCERER
        </div>
        <ul className="sm:flex flex-1 flex-row justify-end hidden">
          {children.map((child) => (
            <li
              className="rounded-lg p-2 transition-colors hover:bg-orange-600 hover:rounded-lg hover:cursor-pointer"
              key={child.id}
            >
              <a href={child.id}>{child.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="cursor-pointer w-6"
            src={toggle ? close : menu}
            onClick={() => setToggle((toggle) => !toggle)}
          />
        </div>
      </nav>
      <div className={` sm:flex flex-1 flex-col ${toggle ? '' : 'hidden'}`}>
        <ul className="flex flex-1 flex-col text-center sm:hidden sm:justify-end">
          {children.map((child) => (
            <li
              className="p-2 transition-colors hover:bg-orange-600 hover:cursor-pointer"
              key={child.id}
            >
              <a href={child.id}>{child.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
