import '../styles/navBar.css';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';

const NavBar = () => {
  const back = 'back';
  console.log(back);
  return (
    <nav className="navBar">
      <button className="backButton" type="button"><IoIosArrowBack className="backButtonIcon" role="button" aria-label="settings button" /></button>
      <div className="screenView">PlaceHolder</div>
      <button className="settingsButton" type="button"><IoIosSettings className="settingsButtonIcon" role="button" aria-label="settings button" /></button>
    </nav>
  );
};

export default NavBar;
