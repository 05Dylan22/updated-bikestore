import { useSelector } from "react-redux"

const FilledCart = () => {
  const cartContents = useSelector((state) => state.handleCart.cartContents)
  const cartItems = Object.keys(cartContents)
  let totalPrice = 0

  cartItems.map((bike) => {
    return totalPrice += Number(cartContents[bike].price.replace(",", ""))
  })

  function findTaxes(total) {
    total = total * 0.08
    return total.toLocaleString("en-US", {minimumFractionDigits: 2})
  }

  const displayableTotal = totalPrice.toLocaleString("en-US", {minimumFractionDigits: 2})

  return (
    <>
    {cartItems.map((bike) => (
        <div key={cartContents[bike].name} className="cart-item">
          <img className="cart-item-img" src={cartContents[bike].img} alt="cart item" />
          <div className="cart-item-info">
            <p className="cart-item-title">{cartContents[bike].name}</p>
            <p className="cart-item-desc">{cartContents[bike].desc}</p>
            <p className="cart-item-price">${cartContents[bike].price}</p>
          </div>
          <div className="quantity-div">
            <p className="quantity-changer">+</p>
            <p className="item-quantity">{cartContents[bike].quantity}</p>
            <p className="quantity-changer">-</p>
          </div>
        </div>
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