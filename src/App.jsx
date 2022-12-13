import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroPage, LoginPage, NotFoundPage } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
