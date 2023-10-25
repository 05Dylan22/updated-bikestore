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
import ShoppingCategory from './pages/shoppingCategory';

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
    <div className="App">
      <DataProvider>
        {largeScreen ? <LargeHeader/> : <SmallHeader/>}
      </DataProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shoppingCategory" element={<DataProvider><ShoppingCategory/></DataProvider>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
