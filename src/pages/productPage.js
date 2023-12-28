import ReviewSection from "../elements/ReviewSection"
import ProductTopDisplay from "../elements/productTopDisplay"
import "../styles/productPage.css"
import { useLocation } from "react-router-dom"
import { useState, useRef, useEffect } from "react"


const ProductPage = () => {
  const location = useLocation()
  const bike = location.state
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState(null)
  const black = useRef(null)
  const silver = useRef(null)
  const red = useRef(null)
  const xs = useRef(null)
  const s = useRef(null)
  const m = useRef(null)
  const l = useRef(null)
  const xl = useRef(null)
  const coverStars = useRef(null)

  //WIDTHS FOR TOP STARS
  //0 === 164.8125
  //0.25 === 152.571875
  //0.5 === 148.33125
  //0.75 === 144.090625
  ///1 === 131.85
  //1.25 === 119.609375
  //1.5 === 115.36875
  //1.75 === 111.128125
  //2 === 98.8875
  //2.25 === 86.646875
  //2.5 === 82.40625
  //2.75 === 78.165625
  //3 === 65.925
  //3.25 === 53.684375
  //3.5 === 49.44375
  //3.75 === 45.203125
  //4 === 32.9625
  //4.25 === 20.721875
  //4.5 === 16.48125
  //4.75 === 12.240625
  //5 === 0

  useEffect(() => {
    const widthsForShowingStars = {
      "0": 164.8125,
      "0.25": 152.571875,
      "0.5": 148.33125,
      "0.75": 144.090625,
      "1": 131.85,
      "1.25": 119.609375,
      "1.5": 115.36875,
      "1.75": 111.128125,
      "2": 98.8875,
      "2.25": 86.646875,
      "2.5": 82.40625,
      "2.75": 78.165625,
      "3": 65.925,
      "3.25": 53.684375,
      "3.5": 49.44375,
      "3.75": 45.203125,
      "4": 32.9625,
      "4.25": 20.721875,
      "4.5": 16.48125,
      "4.75": 12.240625,
      "5": 0
    }

    const totalRating = bike.reviews.reduce((totalStars, review) => {
      return totalStars += review.rating
    }, 0)

    let avgRating = totalRating / bike.reviews.length
    avgRating = (Math.round(avgRating * 4) / 4).toFixed(2)
    coverStars.current.style.width = `${widthsForShowingStars[avgRating]}px`
  }, [bike])


  function cartAnimation(e) {
    e.target.disabled = true
    const child = e.target.children[0]
    child.style.animation = "addCartClicked 0.70s ease-in-out"
    e.target.previousElementSibling.style.animation = "showItemAdded 0.75s ease-in-out"
    setTimeout(() => {
      child.style.animation = ""
      e.target.previousElementSibling.style.animation = ""
      e.target.disabled = false
    }, 750)
  }

  function selectColor(e) {
    setSelectedColor(e.target.id)
  }

  function selectSize(e) {
    if (selectedSize === "xs") xs.current.classList.remove("product-size-selected")
    if (selectedSize === "s") s.current.classList.remove("product-size-selected")
    if (selectedSize === "m") m.current.classList.remove("product-size-selected")
    if (selectedSize === "l") l.current.classList.remove("product-size-selected")
    if (selectedSize === "xl") xl.current.classList.remove("product-size-selected")
    setSelectedSize(e.target.id)
  }

  useEffect(() => {
    switch (selectedColor) {
      case "black":
        red.current.classList.remove("color-div-selected")
        silver.current.classList.remove("color-div-selected")
        black.current.classList.add("color-div-selected")
        break
      case "silver":
        red.current.classList.remove("color-div-selected")
        black.current.classList.remove("color-div-selected")
        silver.current.classList.add("color-div-selected")
        break
      case "red":
        black.current.classList.remove("color-div-selected")
        silver.current.classList.remove("color-div-selected")
        red.current.classList.add("color-div-selected")
        break
      default:
        return
    }
  }, [selectedColor])

  useEffect(() => {
    switch (selectedSize) {
      case "xs":
        xs.current.classList.add("product-size-selected")
        break
      case "s":
        s.current.classList.add("product-size-selected")
        break
      case "m":
        m.current.classList.add("product-size-selected")
        break
      case "l":
        l.current.classList.add("product-size-selected")
        break
      case "xl":
        xl.current.classList.add("product-size-selected")
        break
      default:
        return
    }
  }, [selectedSize])

  return (
    <>
      <ProductTopDisplay/>
      <div className="product-display-info">
        <div className="product-info-left">
          <p className="product-page-name">{bike.name}</p>
          <div className="product-top-rating">
            <div className="star-rating-div">
              <div ref={coverStars} className="cover-stars-div">
              </div>
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
          <div ref={black} onClick={(e) => selectColor(e)} id="black" className="empty-product-color-div"></div>
          <div ref={silver} onClick={(e) => selectColor(e)} id="silver" className="empty-product-color-div"></div>
          <div ref={red} onClick={(e) => selectColor(e)} id="red" className="empty-product-color-div"></div>
        </div>
      </div>
      <p className="product-size-title">Pick A Size:</p>
      <div className="product-pick-size">
        <div id="xs" ref={xs} onClick={(e) => selectSize(e)} className="product-size">XS</div>
        <div id="s" ref={s} onClick={(e) => selectSize(e)} className="product-size">S</div>
        <div id="m" ref={m} onClick={(e) => selectSize(e)} className="product-size">M</div>
        <div id="l" ref={l} onClick={(e) => selectSize(e)} className="product-size">L</div>
        <div id="xl" ref={xl} onClick={(e) => selectSize(e)} className="product-size">XL</div>
      </div>
      <div className="cart-btn-container">
        <p className="item-added-p">Item Added To Cart</p>
        <button onClick={(e) => cartAnimation(e)} className="add-to-cart"><div></div>Add To Cart</button>
      </div>
      <ReviewSection/>
    </>
  )
}

export default ProductPage