// home page filter

function Filter() {
  return (
     <div className="filter-container">
        <label className="filter-label">Filter:</label>
        <select className="filter-dropdown">
          <option value="popular">Popular</option>
          <option value="upcoming">Upcoming</option>
          <option value="new-release">New Release</option>
        </select>
      </div>
  );
}

export default Filter;