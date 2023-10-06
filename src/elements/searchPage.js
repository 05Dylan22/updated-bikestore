import "../styles/search.css"

const SearchPage = () => {
  return (
    <div className="icon-container">
      <div className="search-input-container">
        <input className="search-bar" type="search" placeholder="Search..."/>
      </div>
      <ul className="search-list">
        <li className="search-list-item">This Is A Bike</li>
      </ul>
    </div>
  )
}

export default SearchPage