import { footerlinks } from '../constants';

const Footer = () => {
  return (
    <footer className="flex flex-row text-base p-10 text-slate-300 gap-4 fixed inset-x-0 bottom-0">
      <div className="flex flex-col sm:flex-row sm:static sm:my-0">
        <div>&#169; 2022 Taskify &#8482; &nbsp;</div>
        <div>All rights reserved</div>
      </div>
      <ul className="flex flex-1 sm:flex-row flex-col text-right justify-end">
        {footerlinks.map((link) => (
          <li className="hover:underline px-2 cursor-pointer" key={link.id}>
            {link.title}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
