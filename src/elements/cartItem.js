import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increaseQuantity, decrementQuantity, removeFromCart } from "../redux/handleCart"

const CartItem = ({bike}) => {
  const cartItem = useRef(null)
  const dispatch = useDispatch()
  const { cartContents, quantities } = useSelector((state) => state.handleCart)

  function removeCartItem(bike) {
    cartItem.current.classList.add("cart-item-leaving")
    setTimeout(() => {
      dispatch(removeFromCart(bike))
    }, 550)
  }

  return (
    <div ref={cartItem} key={cartContents[bike].name} className="cart-item">
      <button className="remove-cart-item" onClick={() => removeCartItem(bike)}>X</button>
      <img className="cart-item-img" src={cartContents[bike].images[0]} alt="cart item" />
      <div className="cart-item-info">
        <p className="cart-item-title">{cartContents[bike].name}</p>
        <p className="cart-item-desc">{cartContents[bike].description}</p>
        <p className="cart-item-price">${cartContents[bike].price}</p>
      </div>
      <div className="quantity-div">
        <p onClick={() => dispatch(increaseQuantity(bike))} className="quantity-changer">+</p>
        <p className="item-quantity">{quantities[bike]}</p>
        <p onClick={() => dispatch(decrementQuantity(bike))} className="quantity-changer">-</p>
      </div>
    </div>
  )
}

export default CartItem