import ProductTopDisplay from "../elements/productTopDisplay"
import "../styles/productPage.css"
import { useLocation } from "react-router-dom"


const ProductPage = () => {
  const location = useLocation()
  const bike = location.state

  //IDEA FOR STARS: ALL ENTITIES FOR TOP REVIEW AND HAVE A DIV THAT WILL COVER STARS UP BASED ON AVG RATING...
  return (
    <>
      <ProductTopDisplay/>
      <div className="product-display-info">
        <div className="product-info-left">
          <p className="product-page-name">{bike.name}</p>
          <div className="product-top-rating">
            <div className="star-rating-div">
              <p className="product-review-star">&#11088;</p>
              <p className="product-review-star">&#11088;</p>
              <p className="product-review-star">&#11088;</p>
              <p className="product-review-star">&#11088;</p>
              <p className="product-review-star">&#11088;</p>
            </div>
            <p className="product-page-reviews">5 out of 5 stars | 4,329 reviews</p>
          </div>
          <p className="product-page-price">${bike.price}</p>
        </div>
        <p className="product-page-description">{bike.description}</p>
      </div>
      <div className="product-pick-color">
        <p className="pick-color-title">Pick A Color:</p>
        <div className="product-colors">
          <div id="black" className="empty-product-color-div"></div>
          <div id="silver" className="empty-product-color-div"></div>
          <div id="red" className="empty-product-color-div"></div>
        </div>
      </div>
      <p className="product-size-title">Pick A Size</p>
      <div className="product-pick-size">
        <div className="product-size">XS</div>
        <div className="product-size">S</div>
        <div className="product-size">M</div>
        <div className="product-size">L</div>
        <div className="product-size">XL</div>
      </div>
    </>
  )
}

export default ProductPage