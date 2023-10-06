import "../styles/cart.css"
import FilledCart from "./filledCart"

const Cart = ({items}) => {
  return (
    <div className="icon-container">
      <p className="cart-title">My Cart</p>
      {items.length > 0 ? <FilledCart items={items}/> : <p className="empty-cart-p">There Are No Items In Your Cart. Start Shopping To Add Items</p>}
    </div>
  )
}

export default Cart