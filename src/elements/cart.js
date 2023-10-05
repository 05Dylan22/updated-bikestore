import "../styles/cart.css"

const Cart = ({items}) => {
  const totalPrice = items.reduce((total, amount) => {
    return total + amount.price
  }, 0)

  return (
    <div className="icon-container">
      <p className="cart-title">My Cart</p>
      {items.map((item) => (
        <div key={item.name} className="cart-item">
          <img className="cart-item-img" src={item.img} alt="cart item" />
          <div className="cart-item-info">
            <p className="cart-item-title">{item.name}</p>
            <p>{item.desc}</p>
            <p>{item.price}</p>
          </div>
          <div className="quantity-div">
            <p className="quantity-changer">+</p>
            <p>{item.quantity}</p>
            <p className="quantity-changer">-</p>
          </div>
        </div>
      ))}
      <div className="cart-totals-div">
        {totalPrice}
      </div>
    </div>
  )
}

export default Cart