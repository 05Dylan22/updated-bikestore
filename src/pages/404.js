import "../styles/404.css"

const NotFound = () => {
  return (
    <section className="notfound-section">
      <h1 className="notfound-title">Hmm... The Page You're Searching For Couldn't Be Found.</h1>
      <h3 className="notfound-subtitle">If you'd like to get started with your shopping, click on the button below. Or use the header above to navigate to your desired destination.</h3>
      <button className="notfound-cta">Start Shopping</button>
    </section>
  )
}

export default NotFound