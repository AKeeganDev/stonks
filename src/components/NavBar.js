import '../styles/navBar.css';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navBar">
      <button className="backButton" onClick={() => navigate(-1)} type="button"><IoIosArrowBack className="backButtonIcon" role="button" aria-label="settings button" /></button>
      <div className="screenView">Stonks!</div>
      <button className="settingsButton" type="button"><IoIosSettings className="settingsButtonIcon" role="button" aria-label="settings button" /></button>
    </nav>
  );
};

export default NavBar;
