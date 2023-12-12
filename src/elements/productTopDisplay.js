import { useLocation } from "react-router-dom"
import { imagesIcons } from "../App"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../redux/handleWishlist"
import { useState, useRef, useEffect } from "react"

const ProductTopDisplay = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const slider = useRef(null)
  const bike = location.state
  const wishlistContents = useSelector((state) => state.handleWishlist.wishlistContents)
  const [startPos, setStartPos] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [stateOfHeart, setStateOfHeart] = useState()
  const prevTranslate = currentIndex * -window.innerWidth


  useEffect(() => {
    if (wishlistContents[bike.name]) {
      setStateOfHeart(imagesIcons.solidHeart)
    } else {
      setStateOfHeart(imagesIcons.heartOutline)
    }
  }, [wishlistContents, bike.name])

  useEffect(() => {
    const dots = Array.from(document.getElementsByClassName("slider-dot"))
    if (dots.length > 0) dots[currentIndex].classList.toggle("active-dot")
    slider.current.style.transform = `translateX(${currentIndex * -window.innerWidth}px)`
  }, [currentIndex])

  useEffect(() => {
    slider.current.style.transform = `translateX(${currentTranslate}px)`
  }, [currentTranslate])

  function forwardOneProduct() {
    const dots = Array.from(document.getElementsByClassName("slider-dot"))
    if (currentIndex < 2) {
      setCurrentIndex((prev) => prev + 1)
      dots[currentIndex].classList.toggle("active-dot")
    }
  }

  function backOneProduct() {
    const dots = Array.from(document.getElementsByClassName("slider-dot"))
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      dots[currentIndex].classList.toggle("active-dot")
    }
  }

  function grabStart(event, index) {
    setIsDragging(true)
    setCurrentIndex(index)
    setStartPos(event.pageX)
  }

  function sliding(event) {
    if (!isDragging) return
    const currentPosition = event.pageX
    setCurrentTranslate(prevTranslate + currentPosition - startPos)
  }

  function grabEnd() {
    setIsDragging(false)
    const movedBy = currentTranslate - prevTranslate
    if (movedBy < -100 && currentIndex < 2) {
      forwardOneProduct()
      return
    }

    if (movedBy > 100 && currentIndex > 0) {
      console.log(currentIndex)
      backOneProduct()
      return
    }

    setCurrentTranslate(prevTranslate)
    setIsDragging(false)
  }

  function handleMouseLeft() {
    setCurrentTranslate(prevTranslate)
    setIsDragging(false)
  }

  function hoverProductHeart() {
    setStateOfHeart(imagesIcons.solidHeart)
  }

  function clickedProductHeart() {
    if (!wishlistContents[bike.name]) {
      dispatch(addItem(bike))
    } else {
      dispatch(removeItem(bike))
    }
  }

  function leftProductHeart() {
    if (!wishlistContents[bike.name]) setStateOfHeart(imagesIcons.heartOutline)
  }
  return (
    <>
      <div className="product-heart-container">
        <img onMouseLeave={leftProductHeart} onMouseDown={clickedProductHeart} onMouseOver={hoverProductHeart} className="product-heart" src={stateOfHeart} alt="wishlist heart" />
      </div>
      <div ref={slider} className="slider-container">
        {bike.images.map((image, index) => (
          <div key={index} onMouseLeave={() => handleMouseLeft()} onMouseUp={grabEnd} onDragEnd={grabEnd} onMouseMove={(event) => sliding(event)} onMouseDown={(event) => grabStart(event, index)} className="slide">
            <img draggable={false} src={image} alt={bike.name} className="slide-img" />
          </div>
        ))}
      </div>
      <div className="slider-nav-buttons">
        <button onClick={backOneProduct} className="arrow1">&#60;</button>
        <button onClick={forwardOneProduct} className="arrow2">&#62;</button>
        <div className="slider-dot"></div>
        <div className="slider-dot"></div>
        <div className="slider-dot"></div>
      </div>
    </>
  )
}

export default ProductTopDisplay