const FilledCart = ({items}) => {
  const totalPrice = items.reduce((total, amount) => {
    return total + amount.price
  }, 0)
  
  return (
    <>
    {items.map((item) => (
        <div key={item.name} className="cart-item">
          <img className="cart-item-img" src={item.img} alt="cart item" />
          <div className="cart-item-info">
            <p className="cart-item-title">{item.name}</p>
            <p className="cart-item-desc">{item.desc}</p>
            <p className="cart-item-price">${item.price}</p>
          </div>
          <div className="quantity-div">
            <p className="quantity-changer">+</p>
            <p className="item-quantity">{item.quantity}</p>
            <p className="quantity-changer">-</p>
          </div>
        </div>
      ))}
      <div className="cart-totals-div">
        <div className="cart-costs">
          <p className="cart-total-item">Total: ${totalPrice}</p>
          <p className="cart-total-item">Taxes: $placeholdere</p>
          <p className="cart-subtotal">Subtotal: ${totalPrice}</p>
        </div>
        <button className="cart-checkout">Checkout <span>&rarr;</span></button>
      </div>
    </>
  )
}

export default FilledCart