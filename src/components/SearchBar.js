import { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch, style }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <input
        type='text'
        placeholder='search..'
        value={searchTerm}
        onChange={handleChange}
      ></input>

      <button type='submit' class='searchButton' onClick={handleSearch}>
        <i class='fa fa-search'></i>
      </button>
    </>
  );
}

export default SearchBar;
