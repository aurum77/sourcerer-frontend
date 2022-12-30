import { mars } from '../assets';

const Hero = (): JSX.Element => {
  return (
    <div className="mx-2 my-6 flex flex-row place-content-between overflow-hidden p-4">
      <div className="mx-4 flex flex-col gap-1 bg-gradient-to-r from-blue-600 via-pink-500 to-orange-500 bg-clip-text text-5xl font-bold text-transparent sm:text-7xl">
        <div>Easy</div>
        <div>Tasks?</div>
        <div>That's</div>
        <div>Sourcerer</div>
      </div>
      <img src={mars} className="max-w-sm" />
    </div>
  );
};

export default Hero;
