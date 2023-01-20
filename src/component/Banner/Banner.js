import React from "react";
import "./Banner.css";
import house from "../images/house.png";
import family from "../images/family (2).jpg";
import man from "../images/man.jpg";
import man1 from "../images/man1.jpg";
import man2 from "../images/man2.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container background">
        <div className="head">
          <p>Your safety is priority</p>
        </div>
        <div className="title">
          <p>
            <span>Protect</span> Yourself And Your Assets From The worst
            Possible For Securing Your <span>Future</span>
          </p>
        </div>
        <div className="row g-5">
          <div className="col-12 col-lg-3 col-xl-3">
            <img className="image1" src={house} alt="" />
          </div>
          <div className="col-12 col-lg-6 col-xl-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              eaque porro accusantium, repellat saepe magnam fuga doloremque
              molestiae reprehenderit nisi sed at nobis assumenda est, hic rem
              tempora a quo?
            </p>
            <div className="midCol">
              <div className="images">
                <img className="img1" src={man} alt="" />
                <img className="img2" src={man1} alt="" />
                <img className="img3" src={man2} alt="" />
                <img className="img4" src={man} alt="" />
                <img className="img5" src={man1} alt="" />
              </div>
              <div className="number">
                <p>+457843784</p>
              </div>
              <div className="bannerButton">
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-xl-3">
            <img className="image2" src={family} alt="" />
          </div>
        </div>
      </div>
      <div className="footerShadow">
        <div className="shadowContent">
          <p className="title">Name</p>
          <input type='text' placeholder='Enter Your name' />
        </div>
        <div className="shadowContent">
          <p className="title">Email</p>
          <input type='text' placeholder='Enter Your Email' />
        </div>
        <div className="shadowContent">
          <p className="title">Phone Number</p>
          <input type='text' placeholder='Enter Your phone' />
        </div>
        <div className="shadowButton">
          <button>Get Guote</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
