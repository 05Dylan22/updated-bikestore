import "../styles/footer.css"
import {Link} from "react-router-dom"

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
          <Link state={{category: "Mountain"}} to={"/shoppingCategory"} className="sitemap-item">Mountain Bikes</Link>
          <Link state={{category: "Road"}} to={"/shoppingCategory"} className="sitemap-item">Road Bikes</Link>
          <Link state={{category: "Electric"}} to={"/shoppingCategory"} className="sitemap-item">Electric Bikes</Link>
          <Link state={{category: "Parts"}} to={"/shoppingCategory"} className="sitemap-item">Parts</Link>
          <Link state={{category: "Accessories"}} to={"/shoppingCategory"} className="sitemap-item">Accessories</Link>
          <Link state={{category: "Apparel"}} to={"/shoppingCategory"} className="sitemap-item">Apparel</Link>
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