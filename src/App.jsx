import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroPage, LoginPage, NotFoundPage } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" component={NotFoundPage} />
        <Route path="/" component={HeroPage} />
        <Route path="/login" component={LoginPage} />
      </Routes>
    </Router>
  );
}

export default App;
