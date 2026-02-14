// home page filter

function Filter({ currentFilter, updateFilter }) {
  const handleFilter = (current) => {
    updateFilter(current);
  };

  return (
    <>
      <div className="filter-container">
        <label className="filter-label">Filter:</label>
        <select
          className="filter-dropdown"
          onChange={(e) => handleFilter(e.target.value)}
          value={currentFilter}
        >
          <option value="upcoming">Upcoming</option>
          <option value="top_rated">Top Rated</option>
          <option value="popular">Popular</option>
          <option value="now_playing">Now Playing</option>
        </select>
      </div>

      {/* Filter Pills*/}
      <div className="filter-pills">
        <button
          className={
            "upcoming" === currentFilter ? "pill-button active" : "pill-button"
          }
          onClick={() => handleFilter("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={
            "top_rated" === currentFilter ? "pill-button active" : "pill-button"
          }
          onClick={() => handleFilter("top_rated")}
        >
          Top Rated
        </button>
        <button
          className={
            "popular" === currentFilter ? "pill-button active" : "pill-button"
          }
          onClick={() => handleFilter("popular")}
        >
          Popular
        </button>
        <button
          className={
            "now_playing" === currentFilter
              ? "pill-button active"
              : "pill-button"
          }
          onClick={() => handleFilter("now_playing")}
        >
          Now Playing
        </button>
      </div>
    </>
  );
}

export default Filter;
