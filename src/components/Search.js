import React from "react";

function Search({ search, searchFin}) {
 
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search for Recent Financial News"
        value={search}
        onChange={(e) => searchFin(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;