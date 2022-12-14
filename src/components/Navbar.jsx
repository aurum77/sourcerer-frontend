import { menu, close } from '../assets';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="flex flex-row items-center px-10 py-8 text-base">
        <div className="cursor-pointer bg-gradient-to-r from-blue-600 via-pink-500 to-orange-500 bg-clip-text text-2xl font-extrabold text-transparent">
          SOURCERER
        </div>
        <ul className="hidden flex-1 flex-row justify-end sm:flex">
          {children.map((child) => (
            <li
              className="rounded-lg p-2 transition-colors hover:cursor-pointer hover:rounded-lg hover:bg-orange-600"
              key={child.id}
            >
              <a href={child.id}>{child.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            className="w-6 cursor-pointer"
            src={toggle ? close : menu}
            onClick={() => setToggle((toggle) => !toggle)}
          />
        </div>
      </nav>
      <div className={` flex-1 flex-col sm:flex ${toggle ? '' : 'hidden'}`}>
        <ul className="flex flex-1 flex-col text-center sm:hidden sm:justify-end">
          {children.map((child) => (
            <li
              className="p-2 transition-colors hover:cursor-pointer hover:bg-orange-600"
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
