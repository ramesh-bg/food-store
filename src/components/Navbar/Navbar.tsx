import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuList = [
    { label: "Home", id: "home" },
    { label: "Menu", id: "menu" },
    { label: "Mobile App", id: "mobile-app" },
    { label: "Contact Us", id: "contact-us" },
  ];

  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" alt="logo" />
      <ul className="navbar-menu">
        {menuList.map((el) => {
          return (
            <li
              key={el.id}
              className={menu === el.id ? "active" : ""}
              onClick={() => setMenu(el.id)}
            >
              {el.label}
            </li>
          );
        })}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
