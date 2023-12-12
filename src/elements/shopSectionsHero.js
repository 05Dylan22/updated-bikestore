import { useEffect, useState } from "react"
import {useLocation, Link} from "react-router-dom"
import "../styles/shoppingHero.css"
import { imagesIcons } from "../App"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../redux/handleWishlist"


const ShopSectionHero = () => {
  const wishlist = useSelector((state) => state.handleWishlist.wishlistContents)
  const dispatch = useDispatch()
  const [myData, setMyData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const heroTerm = location.state.heroTerm
  const categoryName = location.state.categoryName

  async function getData() {
    const data = await fetch("http://localhost:5000/")
    const response = await data.json()
    setMyData(response)
    setIsLoading(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    getData()
  }, [heroTerm])

  function changeHeart(e, product) {
    if (wishlist[product.name]) {
      e.target.style.backgroundImage = `url(${imagesIcons.heartOutline})`
      dispatch(removeItem(product))
    } else {
      e.target.style.backgroundImage = `url(${imagesIcons.solidHeart})`
      dispatch(addItem(product))
    }
  }

  function entered(e, product) {
    if (wishlist[product.name]) return
    e.target.style.backgroundImage = `url(${imagesIcons.solidHeart})`
  }

  function left(e, product) {
    if (!wishlist[product.name]) {
      e.target.style.backgroundImage = `url(${imagesIcons.heartOutline})`
    }
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
                  <div onMouseLeave={(e) => left(e, product)} onMouseEnter={(e) => entered(e, product)} onClick={(e) => changeHeart(e, product)} className="heart-img" style={wishlist[product.name] && {backgroundImage: `url(${imagesIcons.solidHeart})`}}/>
                  <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="price-type">{product.make} &#124; {product.price}</p>
                    <Link to={"/productPage"} state={product} className="shop-item-link"><button className="view-product">View Bike</button></Link>
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