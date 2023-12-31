import {Link} from "react-router-dom"

export const Mountain = [
  {
    text: "Full Suspension",
    heroTerm: "fullSuspensionHero",
    categoryName: "fullsuspensionbikes",
    key: "full"
  },

  {
    text: "Hardtail",
    heroTerm: "hardtailHero",
    categoryName: "hardtailbikes",
    key: "hard"
  },

  {
    text: "Cross Country",
    heroTerm: "crosscountryHero",
    categoryName: "crosscountrybikes",
    key: "cross"
  },

  {
    text: "Trail",
    heroTerm: "trailHero",
    categoryName: "trailbikes",
    key: "trail"
  },

  {
    text: "Enduro",
    heroTerm: "enduroHero",
    categoryName: "endurobikes",
    key: "enduro"
  },

  {
    text: "Downhill",
    heroTerm: "downhillHero",
    categoryName: "downhillbikes",
    key: "down"
  },

  {
    text: "Fat Bikes",
    heroTerm: "fatHero",
    categoryName: "fatbikes",
    key: "fat"
  }
]


const MiddleHeader = () => {

  return (
  <nav className="large-middle-header">
    {Mountain.map((link) => {
      return (
        <div key={link.key} className="large-links-div">
        <Link state={{heroTerm: link.heroTerm, categoryName: link.categoryName}} to={"/shoppingCategory"} className="large-header-links">{link.text}</Link>
        </div>
      )
    })}
  </nav>
  )
}

export default MiddleHeader