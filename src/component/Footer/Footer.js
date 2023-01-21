import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div class="container">
      <footer class="py-5 ">
        <div class="row g-5 main">
        <div class="col-12 col-lg-4 col-xl-4">
              <h5>nsurance</h5>
              <p>Insurance Incorporated offers comprehensive insurance solutions to individuals, families, and businesses</p>
          </div>
          <div class="col-12 col-lg-2 ">
            <h5>Personal</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-lg-1">
            <h5>Business</h5>
            <ul class="nav flex-column">
              
            </ul>
          </div>

          <div class="col-12 col-lg-1">
            <h5>Employee</h5>
            <ul class="nav flex-column">
              
            </ul>
          </div>

          <div class="col-12 col-lg-2">
            <h5>Bounds</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
                  terms & Condition
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use href="#twitter" />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use href="#instagram" />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use href="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Footer;
