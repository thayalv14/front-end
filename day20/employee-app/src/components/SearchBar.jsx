function SearchBar({ search, setSearch }) {

  return (

    <div className="search-container">

      <input
        id="employeeSearch"
        type="text"
        placeholder="🔍 Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

    </div>

  );

}

export default SearchBar;