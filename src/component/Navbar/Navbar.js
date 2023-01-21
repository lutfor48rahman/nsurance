import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <p>
            {" "}
            <i class="fa-brands fa-mandalorian"></i> nsurance
          </p>
        </div>
        <div id="toggle" className="items">
          <ul>
            <Link
              onClick={() => myFunction(2)}
              className="decoration"
              to="#personal"
            >
              <li>Personal</li>
            </Link>
            <Link
              onClick={() => myFunction(2)}
              className="decoration"
              to="#business"
            >
              <li>Business</li>
            </Link>
            <Link
              onClick={() => myFunction(2)}
              className="decoration"
              to="#employee"
            >
              <li>Employee</li>
            </Link>
            <Link
              onClick={() => myFunction(2)}
              className="decoration"
              to="#bounds"
            >
              <li>Bounds</li>
            </Link>
          </ul>
        </div>
        <div className="navButton">
          <button>
            Get a Goute <i class="fa-solid fa-angle-right size"></i>
          </button>
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
