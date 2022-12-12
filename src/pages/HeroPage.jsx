import { Navbar, Hero, Footer } from "../components";
import { navlinks } from "../constants";

export const HeroPage = () => {
  return (
    <>
      <Navbar>{navlinks}</Navbar>
      <Hero />
      <Footer />
    </>
  );
};
