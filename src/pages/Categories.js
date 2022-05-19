import { useSelector } from 'react-redux';
import { AiFillApple } from 'react-icons/ai';
import { SiStarbucks, SiFord } from 'react-icons/si';
import '../styles/categoriesPage.css';

const CategoriesPage = () => {
  const data = useSelector((state) => state.stonks.stonks)
    .filter((stonk) => window.location.pathname.replace('%20', ' ').replace('/', '')
      .includes(stonk.misc.category));

  const iconMap = {
    Apple: <AiFillApple className="categoryIcon" />,
    Ford: <SiFord className="categoryIcon" />,
    Starbucks: <SiStarbucks className="categoryIcon" />,
  };
  return (
    <>
      <ul className="categoryList">
        {data.map((stonk) => (
          <li key={stonk.misc.stonkName}>
            <button type="button" className="category">
              <div className="basicStonk">
                <span className="stonkIcon">{iconMap[stonk.misc.stonkName]}</span>
                <span>{stonk.misc.stonkName}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesPage;
