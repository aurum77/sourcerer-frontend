import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header, Welcome } from "./components";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
