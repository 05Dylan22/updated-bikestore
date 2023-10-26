import WishlistItem from "./wishlistItem"

const FilledWishlist = ({ items }) => {
  return (
    <div className="icon-container">
      <p className="wishlist-title">My Wishlist</p>
      <p className="wishlist-subtitle">You Have {items.length} Item(s) In Your Wishlist</p>
      {Object.keys(items).map((bike) => {
        console.log(items.bike)
        return "hi"
      })}
      {items.map(item => <WishlistItem key={item.key} name={item.name} price={item.price}/>)}
    </div>
  )
}

export default FilledWishlist