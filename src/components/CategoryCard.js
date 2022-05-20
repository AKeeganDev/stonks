import PropTypes from 'prop-types';
import '../styles/categoryCard.css';
import { GrTechnology } from 'react-icons/gr';
import { AiFillCar } from 'react-icons/ai';
import { IoFastFoodOutline } from 'react-icons/io5';

const CategoryCard = (props) => {
  const { category } = props;
  const toMap = category;

  const iconMap = {
    Technology: <GrTechnology className="categoryIcon" />,
    Automotive: <AiFillCar className="categoryIcon" />,
    FoodFranchise: <IoFastFoodOutline className="categoryIcon" />,
  };

  return (
    <div className="categoryCardItem">
      <div>{iconMap[toMap.replace(/\s/g, '')]}</div>
      <div className="categoryName">{category}</div>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryCard;
