import { useSelector } from 'react-redux';
import { GiChart } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import '../styles/home.css';

const Home = () => {
  const catList = [
    'Technology',
    'Food Franchise',
    'Automotive',
  ];
  const stonks = useSelector(
    (state) => state.stonks.stonks,
  );

  const navigate = useNavigate();

  const stonksText = `Total Stonks: ${stonks.length}`;

  const handleRedirect = (category) => `/${category}`;

  const categories = stonks.filter((stonk) => catList.includes(stonk.misc.category));

  return (
    <>
      <div className="homeDiv">
        <div className="totalStonks">
          <div className="logo">
            <GiChart className="largeIcon" />
          </div>
          <div className="totalDetails">
            <span className="totalText">
              {stonksText}
            </span>
          </div>
        </div>
        <div className="categoryCardContainer">
          <span className="filterText">Stonks by category</span>
          <ul className="categoryList">
            {categories.map((stonk) => (
              <li className="categoryLI" key={stonk.misc.category}>
                <button className="categoryCard" onClick={() => { navigate(handleRedirect(stonk.misc.category)); }} type="button">
                  <CategoryCard category={stonk.misc.category} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
