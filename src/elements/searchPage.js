import { useState, useRef } from "react"
import "../styles/search.css"
import { Link } from "react-router-dom"
import useDetectOutsideClick from "../hooks/detectOutsideClick"

const SearchPage = () => {
  const [matchedTerms, setMatchedTerms] = useState([])
  const popup = useRef(null)

  useDetectOutsideClick(popup)

  const searchTerms = [{term: "full suspension", sendTo: "/shoppingCategory"}, {term: "hardtail", sendTo: "/shoppingCategory"}, {term: "cross country", sendTo: "/shoppingCategory"}, {term: "trail", sendTo: "/shoppingCategory"}, {term: "enduro", sendTo: "/shoppingCategory"}, {term: "downnhill", sendTo: "/shoppingCategory"}, {term: "fat bikes", sendTo: "/shoppingCategory"}, {term: "5010 carbon c r mountain bike", sendTo: "/productPage"}, {term: "ripley xt factory mountain bike", sendTo: "/productPage"}, {term: "trek remedy 9.9 mountain bike - 2019, 19.5", sendTo: "/productPage"}, {term: "chameleon mx d mountain bike", sendTo: "/productPage"}, {term: "specialized 2022 rockhopper comp 29 hardtail mountain bike", sendTo: "/productPage"}, {term: "diamondback 2022 hook 27.5 inch hardtail mountain bike", sendTo: "/productPage"}, {term: "chameleon mx s mountain bike", sendTo: "/productPage"}, {term: "2023 polygon xtrada 6 1x11 - mountain bike", sendTo: "/productPage"}, {term: "vitus rapide fs crx mountain bike", sendTo: "/productPage"}, {term: "trail 429 pro xt/xtr mountain bike", sendTo: "/productPage"}, {term: "ripmo xt mountain bike", sendTo: "/productPage"}, {term: "mtr 8.9", sendTo: "/productPage"}, {term: "sb160 c1 slx mountain bike", sendTo: "/productPage"}, {term: "slash 9.9 xx1 flight attendant", sendTo: "/productPage"}, {term: "specialized enduro pro mountain bike - 2018, large", sendTo: "/productPage"}, {term: "2022 canyon sender cfr mullet underdog bike", sendTo: "/productPage"}, {term: "demo expert", sendTo: "/productPage"}, {term: "rocky mountain slayer carbon 50 29 bike 2022", sendTo: "/productPage"}, {term: "salsa mukluk deore 11 fat-tire bike", sendTo: "/productPage"}, {term: "farley 9.6", sendTo: "/productPage"}, {term: "specialized 2020 fatboy", sendTo: "/productPage"}]

  function findMatchedTerms(e) {
    const newMatched = []
    searchTerms.forEach((term) => {
      if (term.term.includes(e.target.value.toLowerCase())) newMatched.push(term)
    })
    setMatchedTerms(newMatched)
  }

  return (
    <div ref={popup} className="icon-container">
      <div className="search-input-container">
        <input onInput={(e) => findMatchedTerms(e)} autoFocus className="search-bar" type="search" placeholder="Search..."/>
      </div>
      <div className="search-list-div">
        <ul className="search-list">
          {matchedTerms.map((result) => <Link to={result.sendTo} className="search-list-item"><li key={result.term}>{result.term}</li></Link>)}
        </ul>
      </div>
    </div>
  )
}

export default SearchPage