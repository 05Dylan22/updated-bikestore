import { useEffect } from "react";
import { clickedHeart } from "../redux/headerHearts";
import { useDispatch } from "react-redux";
import { handleIcons } from "../redux/handleIcons";

const useDetectOutsideClick = (popup) => {
  const dispatch = useDispatch()
  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.classList[0] === "large-wishlist-icon" || event.target.classList[0] === "small-wishlist-icon") return
      if (popup.current && !popup.current.contains(event.target)) {
        dispatch(clickedHeart())
        dispatch(handleIcons({type: "close"}))
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [popup, dispatch])
}

export default useDetectOutsideClick