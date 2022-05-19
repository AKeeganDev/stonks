import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoriesPage from './pages/Categories';
import './App.css';
import NavBar from './components/NavBar';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Dropdown />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:stonk_name" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
