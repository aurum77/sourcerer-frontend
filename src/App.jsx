import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroPage } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element=<HeroPage /> />
      </Routes>
    </Router>
  );
}

export default App;
