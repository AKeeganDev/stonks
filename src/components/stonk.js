import { useSelector } from 'react-redux';
import { AiFillApple } from 'react-icons/ai';
import { SiStarbucks, SiFord } from 'react-icons/si';
// import { GrTechnology } from 'react-icons/gr';
// import { IoFastFoodOutline } from 'react-icons/io5';

const Stonk = () => {
  const data = useSelector((state) => state.stonks.stonks)
    .filter((stonk) => window.location.pathname.replace('%20', ' ').replace('/', '')
      .includes(stonk.misc.category));

  const {
    symbol, price, volume, misc,
  } = data[0];
  const {
    stonkName, category,
  } = misc;

  const cashFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const iconMap = {
    Apple: <AiFillApple className="categoryIcon" />,
    Ford: <SiFord className="categoryIcon" />,
    Starbucks: <SiStarbucks className="categoryIcon" />,
  };

  // const categoryIconMap = {
  //   Technology: <GrTechnology className="categoryIcon" />,
  //   Automotive: <AiFillCar className="categoryIcon" />,
  //   FoodFranchise: <IoFastFoodOutline className="categoryIcon" />,
  // };

  const numberFormatter = new Intl.NumberFormat('en-US');

  console.log(stonkName);
  console.log(category);
  console.log(symbol);
  const priceFormatted = cashFormatter.format(price);
  const volumeFormatted = numberFormatter.format(volume);
  const greeting = `${stonkName} Stonk Information`;
  const intro = `Company Name: ${stonkName} | Symbol: '${symbol}'`;
  const stonkDetails = `Market Price: ${priceFormatted} | Volume: ${volumeFormatted}`;

  return (
    <>
      <div className="homeDiv">
        <div className="totalStonks">
          <div className="logo">
            {iconMap[stonkName.replace('%20', ' ')]}
          </div>
          <div className="totalDetails">
            <span className="totalText">
              {stonkName}
            </span>
          </div>
        </div>
        <div className="categoryCardContainer">
          <span className="filterText">{greeting}</span>
          <ul className="categoryList">
            <li className="detail">
              <div className="top">
                {intro}
              </div>
            </li>
            <li className="detail">
              <div className="price">
                {stonkDetails}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Stonk;
