import { useSelector } from 'react-redux';
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

  const handleRedirect = (stonk) => {
    window.location.href = `/${stonk}`;
  };

  const categories = stonks.filter((stonk) => catList.includes(stonk.misc.category));

  return (
    <>
      <div className="categoryCardContainer">
        <ul className="categoryList">
          {categories.map((stonk) => (
            <li key={stonk.misc.category}>
              <button className="categoryCard" onClick={() => { handleRedirect(stonk.misc.category); }} type="button">
                <CategoryCard category={stonk.misc.category} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
