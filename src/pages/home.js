import LargeHeader from "../elements/largeHeader"
import SmallHeader from "../elements/smallHeader"
import { useState, useEffect, useReducer } from "react"
import { imagesIcons } from "../App"
import "../styles/home.css"
import ScrollingBanner from "../elements/scrollingBanner"
import ShopPopular from "../elements/shopPopular"
import BlogPost from "../elements/blogPost"

const Home = () => {
  const [heartHover, setHeartHover] = useState(imagesIcons.heartOutline)
  const [state, dispatch] = useReducer(reducer, {open: false, currentOpen: null, displayIconEl: null})

  function fillHeart () {
    setHeartHover(imagesIcons.solidHeart)
  }

  function emptyHeart () {
    setHeartHover(require("../images+icons/heart.png"))
  }

  const [largeScreen, setLargeScreen] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 1199) setLargeScreen(true)
  }, [])

  function checkScreenSize () {
    if (window.innerWidth > 1199) {
      setLargeScreen(true)
      return
    }
    setLargeScreen(false)
  }

  window.addEventListener("resize", checkScreenSize)

  function reducer (state, action) {
    if (!state.open) {
      return {open: true, currentOpen: action.payload.identifier, displayIconEl: action.payload.component}
    }
    if (state.open && state.currentOpen === action.payload.identifier) {
      return {open: false, currentOpen: null, displayIconEl: null}
    }
    if (state.open && state.currentOpen !== action.payload.identifier) {
      return {...state, currentOpen: action.payload.identifier, displayIconEl: action.payload.component}
    }
  }

  return (
    <section className="home-page">
      {largeScreen ? <LargeHeader dispatch={dispatch} fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/> : <SmallHeader dispatch={dispatch} fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/>}
      <section className="hero-home">
        <div className="hero-content-div">
          <h1 className="home-hero-heading">Bikes Built To Release Your True Potential</h1>
          <h2 className="home-hero-subhead">All our bikes and products have been carefully designed to give you the best experience on and off the trails or roads.</h2>
          <button className="home-hero-cta">Start Shopping</button>
        </div>
      </section>
      <ScrollingBanner/>
      <ShopPopular/>
      <h3>Feautured Blogs</h3>
      <BlogPost/>
      {state.displayIconEl}
    </section>
  )
}

export default Home