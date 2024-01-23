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
      const bikesArr = []
      Object.keys(data.allBikes).forEach((bikeSection) => {
         data.allBikes[bikeSection].forEach((bike, index) => {
         bikesArr.push({state: {term: bike.name, sendTo: "/productPage", product: bike, index: index, categoryName: bikeSection}})
        })
      })

      setSearchTerms([...bikesArr,
        {state: {term: "full suspension", sendTo: "/shoppingCategory", categoryName: "fullsuspensionbikes", heroTerm: "fullSuspensionHero"}},
        {state: {term: "hardtail", sendTo: "/shoppingCategory", categoryName: "hardtailbikes", heroTerm: "hardtailHero"}},
        {state: {term: "cross country", sendTo: "/shoppingCategory", categoryName: "crosscountrybikes", heroTerm: "crosscountryHero"}},
        {state: {term: "trail", sendTo: "/shoppingCategory", categoryName: "trailbikes", heroTerm: "trailHero"}},
        {state: {term: "enduro", sendTo: "/shoppingCategory", categoryName: "endurobikes", heroTerm: "enduroHero"}},
        {state: {term: "downnhill", sendTo: "/shoppingCategory", categoryName: "downhillbikes", heroTerm: "downhillHero"}},
        {state: {term: "fat bikes", sendTo: "/shoppingCategory", categoryName: "fatbikes", heroTerm: "fatHero"}},
      ])
    })
  }, [])

  function findMatchedTerms(e) {
    const newMatched = []
    searchTerms?.forEach((searchTerm) => {
      if (searchTerm.state.term.toLowerCase().includes(e.target.value.toLowerCase())) newMatched.push(searchTerm)
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
          {matchedTerms.map((result) => <Link key={result.state.term} state={result.state.sendTo === "/productPage" ? result.state : {heroTerm: result.state.heroTerm, categoryName: result.state.categoryName}} to={result.state.sendTo} className="search-list-item"><li className="search-item-text">{result.state.term}</li></Link>)}
        </ul>
      </div>
    </div>
  )
}

export default SearchPage