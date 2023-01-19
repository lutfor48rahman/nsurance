import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(true);

  const myFunction = (e) => {
    const items = document.getElementById("toggle");

    if (show === true) {
      items.classList.add("change");
      setShow(!show);
    } else {
      items.classList.remove("change");
      setShow(!show);
    }
  };

  return (
    <div className="mainNav">
      <div className="container lists">
        <div className="brand">
          <p> <i class="fa-brands fa-mandalorian"></i> nsurance</p>
        </div>
        <div id="toggle" className="items">
          <ul>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
        <div className="navButton">
            <button>Get a Goute <i class="fa-solid fa-angle-right size"></i></button>
        </div>
        <div className="toggleIcon">
          <i
            id="iconView"
            onClick={() => myFunction(2)}
            className="fa-solid fa-bars"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
