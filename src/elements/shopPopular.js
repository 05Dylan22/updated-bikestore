import {Link} from "react-router-dom"

const ShopPopular = () => {
  return (
    <>
      <h3 className="shop-pop-title">Shop Popular Categories</h3>
      <Link state={{category: "Downhill"}} to={"/shoppingCategory"} className="popular-section pop1">
        <p>Downhill</p>
      </Link>
      <Link state={{category: "Full Suspension"}} to={"/shoppingCategory"} className="popular-section pop2">
        <p>Full Suspension</p>
      </Link>
      <Link state={{category: "Cross Country"}} to={"/shoppingCategory"} className="popular-section pop3">
        <p>Cross Country</p>
      </Link>
      <Link state={{category: "Trail"}} to={"/shoppingCategory"} className="popular-section pop4">
        <p>Trail</p>
      </Link>
    </>
  )
}

export default ShopPopular