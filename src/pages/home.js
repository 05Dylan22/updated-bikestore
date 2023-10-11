import LargeHeader from "../elements/largeHeader"
import SmallHeader from "../elements/smallHeader"
import { useState, useEffect, useContext } from "react"
import { imagesIcons } from "../App"
import "../styles/home.css"
import ScrollingBanner from "../elements/scrollingBanner"
import ShopPopular from "../elements/shopPopular"
import BlogPost from "../elements/blogPost"
import DataContext from "../context/DataContext"

const Home = () => {
  const [heartHover, setHeartHover] = useState(imagesIcons.heartOutline)
  const {state} = useContext(DataContext)

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

  return (
    <section className="home-page">
      {largeScreen ? <LargeHeader fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/> : <SmallHeader fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/>}
      <section className="hero-home">
        <div className="hero-content-div">
          <h1 className="home-hero-heading">Bikes Built To Release Your True Potential</h1>
          <h2 className="home-hero-subhead">All our bikes and products have been carefully designed to give you the best experience on and off the trails or roads.</h2>
          <button className="home-hero-cta">Start Shopping</button>
        </div>
      </section>
      <ScrollingBanner/>
      <ShopPopular/>
      <h3 className="blogs-section-title">Feautured Blogs</h3>
      <BlogPost/>
      <p className="mission-statement-title">Our Mission</p>
      <p className="mission-statement">At Everything Bikes we aspire to bring quality biking experiences to people just like you world wide. We also teach any newcomers in the world of cycling everything there is to know through our blog and Youtube videos.</p>
      {state.displayIconEl}
    </section>
  )
}

export default Home