import "../styles/search.css"

const SearchPage = () => {
  return (
    <div className="icon-container">
      <div className="search-input-container">
        <input autoFocus className="search-bar" type="search" placeholder="Search..."/>
      </div>
      <div className="search-list-div">
        <ul className="search-list">
        </ul>
      </div>
    </div>
  )
}

export default SearchPage