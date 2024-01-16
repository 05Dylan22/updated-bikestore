import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../redux/handleWishlist"
import { imagesIcons } from "../App"
import { Link } from "react-router-dom"

const ShoppingPageProducts = ({data}) => {
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.handleWishlist.wishlistContents)

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
    <section>
      {
        data.map((product) => {
          return (
            <div className="showcase-product-div" key={product.id}>
              <img className="showcase-img" src={product.images[0]} alt="bike name"/>
              <div onMouseLeave={(e) => left(e, product)} onMouseEnter={(e) => entered(e, product)} onClick={(e) => changeHeart(e, product)} className="heart-img" style={wishlist[product.name] && {backgroundImage: `url(${imagesIcons.solidHeart})`}}/>
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="price-type">{product.make} &#124; ${product.price}</p>
                <Link to={"/productPage"} state={product} className="shop-item-link"><button className="view-product">View Bike</button></Link>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default ShoppingPageProducts