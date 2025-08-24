import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  // useState varibale should be write within component body and you can't write it within condition or loop
  const [buttonName, setButtonName] = useState("Login");

  // If no dependency array => useEffect is called on every render
  // If dependency array is empty = [] => useEffect is called on inital render(just once)
  // If the dependecy array is [buttonName] => called everytime buttonName is updated
  useEffect(() => {
    console.log("useEffect called");
    return () => {};
  }, [buttonName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="no-underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="no-underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="no-underline">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setButtonName(buttonName === "Login" ? "Logout" : "Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
