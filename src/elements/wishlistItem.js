const WishlistItem = ({ name, price }) => {
  //ADD BUTTON TO RIGHT OF PRICE TO ADD TO CART
  return (
    <div className="wishlist-item">
      <img loading="lazy" className="wishlist-item-img" src={require("../images+icons/profile-collageimg2.jpg")} alt="temp" />
      <div className="item-info">
        <p className="wishlist-item-title">Here Is A More Bike</p>
        <p className="wishlist-item-desc">This is where the description goes. it will need to be capped off at some point. more text pladfasf</p>
        <p className="wishlist-item-price">${price}</p>
      </div>
    </div>
  )
}

export default WishlistItem