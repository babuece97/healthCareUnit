import React from 'react';

const Search = () => {
    return (
        <div className="search-team">
        <input onChange={handleChange} className="p-2" type="text" />{" "}
        <button className="btn p-2 btn-danger">Search</button>
      </div>
    );
};

export default Search;