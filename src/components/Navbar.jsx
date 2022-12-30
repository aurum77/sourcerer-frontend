import { menu, close } from '../assets';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ children }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="flex flex-row items-center px-10 py-8 text-base">
        <div className="cursor-pointer bg-gradient-to-r from-blue-600 via-pink-500 to-orange-500 bg-clip-text text-2xl font-extrabold text-transparent">
          SOURCERER
        </div>
        <div className="hidden flex-1 flex-row justify-end sm:flex">
          {children.map((child) => (
              <div className="rounded-lg p-2 transition-colors hover:cursor-pointer hover:rounded-lg hover:bg-orange-600" onClick={() => navigate(child.id)} href={child.id}>{child.title}</div>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            className="w-6 cursor-pointer"
            src={toggle ? close : menu}
            onClick={() => setToggle((toggle) => !toggle)}
          />
        </div>
      </nav>
      <div className={` flex-1 flex-col sm:flex ${toggle ? '' : 'hidden'}`}>
        <div className="flex flex-1 flex-col text-center sm:hidden sm:justify-end">
          {children.map((child) => (
              <div className="p-2 transition-colors hover:cursor-pointer hover:bg-orange-600" onClick={() => navigate(child.id)} href={child.id}>{child.title}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
