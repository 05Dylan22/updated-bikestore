import { useSelector } from "react-redux"
import CartItem from "./cartItem"

const FilledCart = () => {
  const { cartContents, quantities } = useSelector((state) => state.handleCart)
  const cartItems = Object.keys(cartContents)
  let totalPrice = 0

  cartItems.map((bike) => {
    return totalPrice += Number(cartContents[bike].price.replace(",", "")) * quantities[bike]
  })

  function findTaxes(total) {
    total = total * 0.08
    return total.toLocaleString("en-US", {minimumFractionDigits: 2})
  }

  const displayableTotal = totalPrice.toLocaleString("en-US", {minimumFractionDigits: 2})

  return (
    <>
    {cartItems.map((bike, index) => (
      <CartItem key={bike.name + index} bike={bike}/>
    ))}
      <div className="cart-totals-div">
        <div className="cart-costs">
          <p className="cart-total-item">Total: ${displayableTotal}</p>
          <p className="cart-total-item">Taxes: ${findTaxes(totalPrice)}</p>
          <p className="cart-subtotal">Subtotal: ${displayableTotal}</p>
        </div>
        <button className="cart-checkout">Checkout <span>&rarr;</span></button>
      </div>
    </>
  )
}

export default FilledCart