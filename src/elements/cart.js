import "../styles/cart.css"
import FilledCart from "./filledCart"
import { useSelector } from "react-redux"
import { useRef } from "react"
import useDetectOutsideClick from "../hooks/detectOutsideClick"

const Cart = () => {
  const cartContents = useSelector((state) => state.handleCart.cartContents)
  const popup = useRef(null)

  useDetectOutsideClick(popup)
  
  return (
    <div ref={popup} id="cart" className="icon-container">
      <p className="cart-title">My Cart</p>
      {Object.keys(cartContents).length > 0 ? <FilledCart/> : <p className="empty-cart-p">There Are No Items In Your Cart. Start Shopping To Add Items</p>}
    </div>
  )
}

export default Cart