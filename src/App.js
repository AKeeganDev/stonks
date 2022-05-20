import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoriesPage from './pages/Categories';
import Stonk from './components/stonk';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/stonks" element={<Home />} />
          <Route path="/:category_name" element={<CategoriesPage />} />
          <Route path="/:category_name/:stonk_name" element={<Stonk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
