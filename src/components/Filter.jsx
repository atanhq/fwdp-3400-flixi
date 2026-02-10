// home page filter

function Filter() {
  return (
    <>
     <div className="filter-container">
        <label className="filter-label">Filter:</label>
        <select className="filter-dropdown">
          <option value="upcoming">Upcoming</option>
          <option value="top-rated">Top Rated</option>
          <option value="popular">Popular</option>
           <option value="now-playing">Now Playing</option>
        </select>
      </div>

      {/* Filter Pills*/}
      <div className="filter-pills">
        <button className="pill-button active">Upcoming</button>
        <button className="pill-button ">Top Rated</button>
        <button className="pill-button ">Popular</button>
        <button className="pill-button ">Now Playing</button>

      </div>
    </>
  );
}

export default Filter;