import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import "../styles/shoppingHero.css"
import { imagesIcons } from "../App"

const ShopSectionHero = () => {
  const [myData, setMyData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const heroTerm = location.state.heroTerm
  const categoryName = location.state.categoryName

  async function getData(term) {
    const data = await fetch("http://localhost:5000/")
    const response = await data.json()
    setMyData(response)
    setIsLoading(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    getData(heroTerm)
  }, [heroTerm])

  function changeHeart(product) {
    console.log(product)
    //if (!insideWishlist) {
    //  e.target.style.backgroundImage = `url(${imagesIcons.solidHeart})`
    //  addToWishlist(e)
    //} else {
    //  e.target.style.backgroundImage = `url(${imagesIcons.heartOutline})`
    // removeFromWishlist(e)
    //}
  }

  function entered(e) {
    //if (insideWishlist) return
    e.target.style.backgroundImage = `url(${imagesIcons.solidHeart})`
  }

  function left(e) {
    e.target.style.backgroundImage = `url(${imagesIcons.heartOutline})`

    //if (!insideWishlist) {
    //  e.target.style.backgroundImage = `url(${imagesIcons.heartOutline})`
    //} else {keep background image as solid}
  }

  return (
    <>
      {!isLoading ? 
      <>
        <section>
          <div className="shopping-hero" style={{backgroundImage: `url(${myData?.heroData[heroTerm].img})`}}>
            <h1 className="shopping-hero-title">Shop All {myData?.heroData[heroTerm].category} Bikes</h1>
          </div>
          <p className="shopping-hero-desc">{myData?.heroData[heroTerm].description}</p>
          <h2 className="shopping-hero-explore">Explore All {myData?.heroData[heroTerm].category} Bikes</h2>
        </section>
        <section>
          {
            myData?.allBikes[categoryName].map((product) => {
              return (
                <div className="showcase-product-div" key={product.id}>
                  <img className="showcase-img" src={product.images[0]} alt="bike name"/>
                  <div onMouseLeave={(e) => left(e)} onMouseEnter={(e) => entered(e)} onClick={() => changeHeart(product)} className="heart-img"/>
                  <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="price-type">{product.make} &#124; {product.price}</p>
                    <button className="view-product">View Bike</button>
                  </div>
                </div>
              )
            })
          }
        </section>
      </>
      : <p style={{width: "100vw", height: "100vh", textAlign: "center", fontSize: "32px", marginTop: "200px"}}>Loading...</p>}
    </>
  )
}

export default ShopSectionHero