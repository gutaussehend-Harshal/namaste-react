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
    <div className="flex justify-between bg-gray-200 shadow-lg">
      <div>
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
