import FilledWishlist from "./filledWishlist"
import EmptyWishlist from "./emptyWishlist"

const Wishlist = ({ items }) => {
  return (
    <>
      {Object.keys(items).length > 0 ? <FilledWishlist items={items} /> : <EmptyWishlist/>}
    </>
  )
}

export default Wishlist