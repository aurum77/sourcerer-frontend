import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroPage, LoginPage, NotFoundPage, RegisterPage } from './pages';
import { Footer } from './components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
