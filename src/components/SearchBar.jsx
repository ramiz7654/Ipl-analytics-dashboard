function SearchBar({
  value,
  onChange,
  suggestions,
  onSuggestionClick,
  onSearch,
}) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">🔍</span>

      <input
        type="text"
        placeholder="Search questions... e.g. most runs"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <button
          className="clear-search"
          onClick={() => onChange("")}
        >
          ×
        </button>
      )}

      <button
        className="search-button"
        onClick={onSearch}
      >
        Search
      </button>

      {value.trim() && suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.slice(0, 6).map((question) => (
            <button
              key={question.id}
              className="suggestion-item"
              onClick={() => onSuggestionClick(question)}
            >
              <div className="suggestion-title">
                {question.title}
              </div>

              <div className="suggestion-description">
                {question.description}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;