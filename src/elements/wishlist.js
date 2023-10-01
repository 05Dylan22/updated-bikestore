import FilledWishlist from "./filledWishlist"
import EmptyWishlist from "./emptyWishlist"

const Wishlist = ({ items }) => {
  return (
    <>
      {items.length > 0 ? <FilledWishlist items={items} /> : <EmptyWishlist/>}
    </>
  )
}

export default Wishlist