import { useSelector } from "react-redux"
import WishlistItem from "./wishlistItem"

const FilledWishlist = () => {
  const wishlistContents = useSelector((state) => state.handleWishlist.wishlistContents)
  const bikes = Object.keys(wishlistContents)
  const totalItems = bikes.length
  return (
    <div className="icon-container">
      <p className="wishlist-title">My Wishlist</p>
      <p className="wishlist-subtitle">You Have {totalItems} Item(s) In Your Wishlist</p>
      {bikes.map(bike => <WishlistItem key={bike.id} name={bike.name} price={bike.price}/>)}
    </div>
  )
}

//      {Object.keys(items).map((bike) => {
//  console.log(items.bike)
//  return "hi"
//})}
//{items.map(item => <WishlistItem key={item.key} name={item.name} price={item.price}/>)}
//
export default FilledWishlist