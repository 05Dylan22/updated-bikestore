import "../styles/home.css"
import ScrollingBanner from "../elements/scrollingBanner"
import ShopPopular from "../elements/shopPopular"
import BlogPost from "../elements/blogPost"
import { useLayoutEffect, useRef } from "react"

const Home = () => {
  const loaded = useRef(false)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.addEventListener("DOMContentLoaded", () => {
    loaded.current = true
  })
  
  return (
    <section className="home-page">
      <section className="hero-home">
        <div className="hero-content-div">
          <h1 className="home-hero-heading">Bikes Built To Release Your True Potential</h1>
          <h2 className="home-hero-subhead">All our bikes and products have been carefully designed to give you the best experience on and off the trails or roads.</h2>
        </div>
      </section>
      <ScrollingBanner/>
      <ShopPopular/>
      <h3 className="blogs-section-title">Feautured Blogs</h3>
      <BlogPost/>
      <p className="mission-statement-title">Our Mission</p>
      <p className="mission-statement">At Everything Bikes we aspire to bring quality biking experiences to people just like you world wide. We also teach any newcomers in the world of cycling everything there is to know through our blog and Youtube videos.</p>
    </section>
  )
}

export default Home