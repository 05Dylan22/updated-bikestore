import WishlistItem from "./wishlistItem"

const FilledWishlist = ({ items }) => {
  return (
    <div className="icon-container">
      {items.map(item => <WishlistItem key={item.key} name={item.name} price={item.price}/>)}
    </div>
  )
}

export default FilledWishlist