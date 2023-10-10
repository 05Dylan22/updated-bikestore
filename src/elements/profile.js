import "../styles/profilePopup.css"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const Profile = () => {
  const {dispatch} = useContext(DataContext)
  return (
    <section className="profile-wrapper">
      <p onClick={() => dispatch({payload: {identifier: "PROFILE"}})} className="profile-close-x">X</p>
      <div className="profile-container">
        <div className="profile-top-sect">
          <img loading="lazy" className="profile-collage-img1" src={require("../images+icons/profile-collageimg.jpg")} alt="Mountain Biker riding downhill" />
          <img loading="lazy" className="profile-collage-img2" src={require("../images+icons/profile-collageimg2.jpg")} alt="Road biker riding uphill" />
          <div className="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
        <p className="profile-heading">Sign Up For Exclusive Deals</p>
        <p className="profile-subhead">Get access to deals on your favorite items PLUS free shipping on all purchases!</p>
        <p className="profile-sign-up-p">Log In or Sign Up (It's free!)</p>
        <div className="quick-login-icons">
            <img loading="lazy" className="signin-icons" src={require("../images+icons/google-icon.png")} alt="google logo"/>
            <img loading="lazy" className="signin-icons" src={require("../images+icons/apple-icon.png")} alt="apple logo"/>
            <img loading="lazy" className="signin-icons" src={require("../images+icons/facebook-icon.png")} alt="facebook logo"/>
            <img loading="lazy" className="signin-icons" src={require("../images+icons/yahoo-icon.png")} alt="yahoo logo"/>
        </div>
        <input type="email" className="profile-input" placeholder="EMAIL ADDRESS"/>
        <input type="text" className="profile-input" placeholder="PASSWORD"/>
        <div className="checkbox-div">
          <input title="checkbox" type="checkbox" className="checkbox" defaultChecked/>
          <label htmlFor="checkbox">Keep me logged in</label>
        </div>
        <button className="login-btn">
          <p className="continue-txt">Continue</p>
          <p className="login-arrow">	&rarr;</p>
        </button>
        <p className="legal-txt">
            Sign me up to the Everything Bikes Community, featuring exclusive Everything Bikes offers and news.
            By clicking the “Continue” button, you are joining our community, will
            receive emails with the latest news and updates, and agree to the
            TERMS OF USE and community TERMS AND CONDITIONS and acknowledge you
            have read the EVERYTHING BIKES PRIVACY POLICY. If you are a New York resident,
            the Everything Bikes membership may be considered a financial incentive. Please
            see the Financial Incentives section of our NEW YORK PRIVACY NOTICE
            for details.
          </p>
      </div>
    </section>
  )
}

export default Profile