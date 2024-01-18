import './App.css';
import "./styles/largeHeader.css"
import "./styles/smallHeader.css"
import "./styles/wishlist.css"
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import {DataProvider} from './context/DataContext';
import { useState, useEffect } from 'react';
import LargeHeader from './elements/largeHeader';
import SmallHeader from './elements/smallHeader';
import NotFound from './pages/404';
import Footer from './elements/footer';
import ShoppingPage from './pages/shoppingPage';
import ProductPage from './pages/productPage';
import LeaveReview from './pages/LeaveReview';

export const imagesIcons = {
  heartOutline: require("./images+icons/heart.png"),
  solidHeart: require("./images+icons/like-solid-heart-black-symbol-for-interface.png"),
  profileIcon: require("./images+icons/user.png"),
  searchIcon: require("./images+icons/search.png"),
  cartIcon: require("./images+icons/trolley.png"),
  logo: require("./images+icons/logo.png"),
  testImg: require("./images+icons/profile-collageimg.jpg")
}

function App() {
  const [largeScreen, setLargeScreen] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 1199) setLargeScreen(true)
  }, [])

  function checkScreenSize () {
    if (window.innerWidth > 1199) {
      setLargeScreen(true)
      return
    }
    setLargeScreen(false)
  }

  window.addEventListener("resize", checkScreenSize)

  return (
    <DataProvider>
    <div className="App">
        {largeScreen ? <LargeHeader/> : <SmallHeader/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shoppingCategory" element={<ShoppingPage/>}/>
          <Route path="/productPage" element={<ProductPage/>}/>
          <Route path="/leaveReview" element={<LeaveReview/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </div>
    </DataProvider>
  );
}

export default App;
