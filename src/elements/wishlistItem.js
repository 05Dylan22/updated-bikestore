const WishlistItem = ({ name, price, desc }) => {
  //ADD BUTTON TO RIGHT OF PRICE TO ADD TO CART
  return (
    <div className="wishlist-item">
      <img loading="lazy" className="wishlist-item-img" src={require("../images+icons/profile-collageimg2.jpg")} alt="temp" />
      <div className="item-info">
        <p className="wishlist-item-title">{name}</p>
        <p className="wishlist-item-desc">{desc}</p>
        <p className="wishlist-item-price">{price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default WishlistItem