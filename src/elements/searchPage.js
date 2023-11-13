import "../styles/search.css"

const SearchPage = () => {
  const searchTerms = ["full suspension", "hardtail", "cross country", "trail", "enduro", "downnhill", "fat bikes", "5010 carbon c r mountain bike", "ripley xt factory mountain bike", "trek remedy 9.9 mountain bike - 2019, 19.5", "chameleon mx d mountain bike", "specialized 2022 rockhopper comp 29 hardtail mountain bike", "diamondback 2022 hook 27.5 inch hardtail mountain bike", "chameleon mx s mountain bike", "2023 polygon xtrada 6 1x11 - mountain bike", "vitus rapide fs crx mountain bike", "trail 429 pro xt/xtr mountain bike", "ripmo xt mountain bike", "mtr 8.9", "sb160 c1 slx mountain bike", "slash 9.9 xx1 flight attendant", "specialized enduro pro mountain bike - 2018, large", "2022 canyon sender cfr mullet underdog bike", "demo expert", "rocky mountain slayer carbon 50 29 bike 2022", "salsa mukluk deore 11 fat-tire bike", "farley 9.6", "specialized 2020 fatboy"]
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
//<li className="search-list-item">This is our most sold bike</li>
export default SearchPage