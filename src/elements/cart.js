import "../styles/cart.css"
import FilledCart from "./filledCart"
import { useSelector } from "react-redux"

const Cart = () => {
  const cartContents = useSelector((state) => state.handleCart.cartContents)

  return (
    <div className="icon-container">
      <p className="cart-title">My Cart</p>
      {Object.keys(cartContents).length > 0 ? <FilledCart/> : <p className="empty-cart-p">There Are No Items In Your Cart. Start Shopping To Add Items</p>}
    </div>
  )
}

export default Cart