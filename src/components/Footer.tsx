import { footerlinks } from '../constants';

const Footer = (): JSX.Element => {
  return (
    <footer className="fixed inset-x-0 w-full bottom-0 flex flex-row gap-4 p-10 text-base text-slate-300">
      <div className="flex flex-col sm:static sm:my-0 sm:flex-row">
        <div>&#169; 2022 Sourcerer &#8482; &nbsp;</div>
        <div>All rights reserved</div>
      </div>
      <ul className="flex flex-1 flex-col justify-end text-right sm:flex-row">
        {footerlinks.map((link) => (
          <li className="cursor-pointer px-2 hover:underline" key={link.id}>
            {link.title}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
