import { useState, useRef, useEffect } from "react"
import "../styles/search.css"
import { Link } from "react-router-dom"
import useDetectOutsideClick from "../hooks/detectOutsideClick"

const SearchPage = () => {
  const [matchedTerms, setMatchedTerms] = useState([])
  const popup = useRef(null)
  const inputRef = useRef(null)
  const [searchTerms, setSearchTerms] = useState()

  useDetectOutsideClick(popup)

  useEffect(() => {
    fetch("http://localhost:5000/").then(res => res.json()).then(data => {
      setSearchTerms([
        {term: "full suspension", sendTo: "/shoppingCategory", state: {categoryName: "fullsuspensionbikes", heroTerm: "fullSuspensionHero"}},
        {term: "hardtail", sendTo: "/shoppingCategory", state: {categoryName: "hardtailbikes", heroTerm: "hardtailHero"}},
        {term: "cross country", sendTo: "/shoppingCategory", state: {categoryName: "crosscountrybikes", heroTerm: "crosscountryHero"}},
        {term: "trail", sendTo: "/shoppingCategory", state: {categoryName: "trailbikes", heroTerm: "trailHero"}},
        {term: "enduro", sendTo: "/shoppingCategory", state: {categoryName: "endurobikes", heroTerm: "enduroHero"}},
        {term: "downnhill", sendTo: "/shoppingCategory", state: {categoryName: "downhillbikes", heroTerm: "downhillHero"}},
        {term: "fat bikes", sendTo: "/shoppingCategory", state: {categoryName: "fatbikes", heroTerm: "fatHero"}},
        {term: "5010 carbon c r mountain bike", sendTo: "/productPage", state: data.allBikes.fullsuspensionbikes[0]},
        {term: "ripley xt factory mountain bike", sendTo: "/productPage", state: data.allBikes.fullsuspensionbikes[1]}, {term: "trek remedy 9.9 mountain bike - 2019, 19.5", sendTo: "/productPage", state: data.allBikes.fullsuspensionbikes[2]},
        {term: "chameleon mx d mountain bike", sendTo: "/productPage", state: data.allBikes.hardtailbikes[0]},
        {term: "specialized 2022 rockhopper comp 29 hardtail mountain bike", sendTo: "/productPage", state: data.allBikes.hardtailbikes[1]},
        {term: "diamondback 2022 hook 27.5 inch hardtail mountain bike", sendTo: "/productPage", state: data.allBikes.hardtailbikes[2]},
        {term: "chameleon mx s mountain bike", sendTo: "/productPage", state: data.allBikes.crosscountrybikes[0]}, {term: "2023 polygon xtrada 6 1x11 - mountain bike", sendTo: "/productPage", state: data.allBikes.crosscountrybikes[1]},
        {term: "vitus rapide fs crx mountain bike", sendTo: "/productPage", state: data.allBikes.crosscountrybikes[2]}, {term: "trail 429 pro xt/xtr mountain bike", sendTo: "/productPage", state: data.allBikes.trailbikes[0]}, {term: "ripmo xt mountain bike", sendTo: "/productPage", state: data.allBikes.trailbikes[1]},
        {term: "mtr 8.9", sendTo: "/productPage", state: data.allBikes.trailbikes[2]},
        {term: "sb160 c1 slx mountain bike", sendTo: "/productPage", state: data.allBikes.endurobikes[0]},
        {term: "slash 9.9 xx1 flight attendant", sendTo: "/productPage", state: data.allBikes.endurobikes[1]}, {term: "specialized enduro pro mountain bike - 2018, large", sendTo: "/productPage", state: data.allBikes.endurobikes[2]},
        {term: "2022 canyon sender cfr mullet underdog bike", sendTo: "/productPage", state: data.allBikes.downhillbikes[0]},
        {term: "demo expert", sendTo: "/productPage", state: data.allBikes.downhillbikes[1]},
        {term: "rocky mountain slayer carbon 50 29 bike 2022", sendTo: "/productPage", state: data.allBikes.downhillbikes[2]},
        {term: "salsa mukluk deore 11 fat-tire bike", sendTo: "/productPage", state: data.allBikes.fatbikes[0]},
        {term: "farley 9.6", sendTo: "/productPage", state: data.allBikes.fatbikes[1]},
        {term: "specialized 2020 fatboy", sendTo: "/productPage", state: data.allBikes.fatbikes[2]}])
    })
  }, [])

  function findMatchedTerms(e) {
    const newMatched = []
    searchTerms.forEach((searchTerm) => {
      if (searchTerm.term.includes(e.target.value.toLowerCase())) newMatched.push(searchTerm)
    })
    setMatchedTerms(newMatched)
  }

  return (
    <div ref={popup} className="icon-container">
      <div className="search-input-container">
        <input ref={inputRef} onInput={(e) => findMatchedTerms(e)} autoFocus className="search-bar" type="search" placeholder="Search..."/>
      </div>
      <div className="search-list-div">
        <ul className="search-list">
          {matchedTerms.map((result) => <Link key={result.term} state={result.state} to={result.sendTo} className="search-list-item"><li>{result.term}</li></Link>)}
        </ul>
      </div>
    </div>
  )
}

export default SearchPage