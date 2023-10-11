import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="newsletter-title">Join Our Newsletter</p>
      <p className="newsletter-subtitle">The Everything Bikes newsletter is your best source for updates on sales, coupon codes and each of our blogs as soon as they're published.</p>
      <div className="signup-section">
        <input className="newsletter-signup" type="email" placeholder="Enter Your Email..." />
        <button className="signup-btn">Submit</button>
      </div>
      <p className="signup-consent">By submitting this form, you consent to sending the above information to Everything Bikes, which will be stored in the United States. For a detailed explanation of Everything Bike's collection and use of personal data please see the Privacy Policy & Terms of Use.</p>
      <div className="social-links">
        <img className="social-logo" src={require("../images+icons/FacebookLogo.png")} alt="Facebook Logo" />
        <img className="social-logo" src={require("../images+icons/YouTubeLogo.png")} alt="YouTube Logo" />
        <img className="social-logo" src={require("../images+icons/InstagramLogo.png")} alt="Instagram Logo" />
        <img className="social-logo" src={require("../images+icons/TwitterLogo.png")} alt="Twitter Logo" />
      </div>
      <div className="sitemap">
        <div className="shop-footer">
          <p className="sitemap-section-title">Shop</p>
          <p  className="sitemap-item">Mountain Bikes</p>
          <p  className="sitemap-item">Road Bikes</p>
          <p  className="sitemap-item">Electric Bikes</p>
          <p  className="sitemap-item">Parts</p>
          <p  className="sitemap-item">Accessories</p>
          <p  className="sitemap-item">Apparel</p>
        </div>
        <div className="support-footer">
          <p className="sitemap-section-title">Support</p>
          <p className="sitemap-item">Customer Support</p>
          <p className="sitemap-item">Returns</p>
          <p className="sitemap-item">Shipping And Delivery</p>
          <p className="sitemap-item">Warranty</p>
        </div>
        <div className="legal-footer">
          <p className="sitemap-section-title">Legal</p>
          <p className="sitemap-item">Privacy Policy And Terms Of Use</p>
          <p className="sitemap-item">New York Transparency Act</p>
          <p className="sitemap-item">Cookie Policy</p>
          <p className="sitemap-item">Recalls</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer