import {Link} from "react-router-dom"

const ShopPopular = () => {
  return (
    <>
      <h3 className="shop-pop-title">Shop Popular Categories</h3>
      <Link state={{heroTerm: "downhillHero", categoryName: "downhillbikes"}} to={"/shoppingCategory"} className="popular-section pop1">
        <p>Downhill</p>
      </Link>
      <Link state={{heroTerm: "fullSuspensionHero", categoryName: "fullsuspensionbikes"}} to={"/shoppingCategory"} className="popular-section pop2">
        <p>Full Suspension</p>
      </Link>
      <Link state={{heroTerm: "crosscountryHero", categoryName: "crosscountrybikes"}} to={"/shoppingCategory"} className="popular-section pop3">
        <p>Cross Country</p>
      </Link>
      <Link state={{heroTerm: "trailHero", categoryName: "trailbikes"}} to={"/shoppingCategory"} className="popular-section pop4">
        <p>Trail</p>
      </Link>
    </>
  )
}

export default ShopPopular