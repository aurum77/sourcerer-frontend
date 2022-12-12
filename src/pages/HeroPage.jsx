import { Navbar, Hero, Footer } from "../components";
import { navlinks } from "../constants";

const HeroPage = () => {
  return (
    <>
      <Navbar>{navlinks}</Navbar>
      <Hero />
      <Footer />
    </>
  );
};

export default HeroPage;
