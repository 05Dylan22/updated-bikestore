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

  function cartAnimation(e) {
    const child = e.target.children[0]
    child.style.animation = "addCartClicked 0.65s ease-in-out"
    setTimeout(() => {
      child.style.animation = ""
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
              <div className="cover-stars-div">
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
      <button onClick={(e) => cartAnimation(e)} className="add-to-cart"><div></div>Add To Cart</button>
      <ReviewSection/>
    </>
  )
}

export default ProductPage