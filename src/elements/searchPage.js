import "../styles/search.css"

const SearchPage = () => {
  return (
    <div className="icon-container">
      <div className="search-input-container">
        <input autoFocus className="search-bar" type="search" placeholder="Search..."/>
      </div>
      <div className="search-list-div">
        <ul className="search-list">
          <li className="search-list-item">This is our most sold bike</li>
        </ul>
      </div>
    </div>
  )
}

export default SearchPage