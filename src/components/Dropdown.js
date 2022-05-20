import '../styles/dropdown.css';

const Dropdown = () => (
  <label htmlFor="standard-select">
    <div className="select">
      <select name="filter" id="filter">
        <option value="Technology">Technology</option>
        <option value="Food Franchise">Food Franchise</option>
        <option value="Automobile">Automobile</option>
      </select>
    </div>
  </label>
);

export default Dropdown;
