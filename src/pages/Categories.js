import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiFillApple, AiFillCar } from 'react-icons/ai';
import { SiStarbucks, SiFord } from 'react-icons/si';
import { GrTechnology } from 'react-icons/gr';
import { IoFastFoodOutline } from 'react-icons/io5';
import '../styles/categoriesPage.css';

const CategoriesPage = () => {
  const handleRedirect = (category, stonk) => `/${category}/${stonk}`;

  const navigate = useNavigate();

  const categoryName = window.location.pathname.replace('%20', ' ').replace('/', '');

  const data = useSelector((state) => state.stonks.stonks)
    .filter((stonk) => window.location.pathname.replace('%20', ' ').replace('/', '')
      .includes(stonk.misc.category));

  const listText = `All ${categoryName} Stonks: ${data.length}`;

  const iconMap = {
    Apple: <AiFillApple className="categoryIcon" />,
    Ford: <SiFord className="categoryIcon" />,
    Starbucks: <SiStarbucks className="categoryIcon" />,
  };

  const categoryIconMap = {
    Technology: <GrTechnology className="categoryIcon" />,
    Automotive: <AiFillCar className="categoryIcon" />,
    FoodFranchise: <IoFastFoodOutline className="categoryIcon" />,
  };
  return (
    <>
      <div className="homeDiv">
        <div className="totalStonks">
          <div className="logo">
            {categoryIconMap[data[0].misc.category.replace(' ', '')]}
          </div>
          <div className="totalDetails">
            <span className="totalText">
              {data[0].misc.category}
            </span>
          </div>
        </div>
        <div className="categoryCardContainer">
          <span className="filterText">{listText}</span>
          <ul className="categoryList">
            {data.map((stonk) => (
              <li key={stonk.misc.stonkName}>
                <button onClick={() => { navigate(handleRedirect(stonk.misc.category, stonk.misc.stonkName)); }} type="button" className="category">
                  <div className="basicStonk">
                    <span className="stonkIcon">{iconMap[stonk.misc.stonkName]}</span>
                    <span className="stonkCategoryText">{stonk.misc.stonkName}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
