function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;