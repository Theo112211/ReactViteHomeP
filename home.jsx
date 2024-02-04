import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const openMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const cross = document.querySelector(".cross");
    const translucent = document.querySelector(".translucent");

    menu.style.right = "0";
    menu.style.opacity = "100";
    hamburger.style.display = "none";
    cross.style.display = "block";
    translucent.style.display = "block";
  };

  const closeMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const cross = document.querySelector(".cross");
    const translucent = document.querySelector(".translucent");

    menu.style.right = "-60%";
    menu.style.opacity = "0";
    hamburger.style.display = "block";
    cross.style.display = "none";
    translucent.style.display = "none";
  };

  return (
    <div>
      <div className="translucent"></div>

      <div className="canvas">
        <div className="nav">
          <svg width="65" height="40" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.016 39.2c.317 0 .574-.093.77-.28.196-.187.294-.457.294-.812v-1.82c0-.448.033-.84.098-1.176.065-.336.145-.663.238-.98l5.09-18.122 4.822 18.57c.112.384.193.682.243.895l.023.099c.047.215.07.453.07.714v1.82c0 .355.098.625.294.812.196.187.453.28.77.28h10.696c.299 0 .55-.093.756-.28.205-.187.308-.457.308-.812v-1.82c0-.373.023-.705.07-.994.047-.29.135-.677.266-1.162L54.04 7.224c.299-1.25.765-2.254 1.4-3.01.635-.756 1.363-1.311 2.184-1.666l.672-.308c.336-.168.574-.331.714-.49.14-.159.21-.369.21-.63 0-.336-.117-.607-.35-.812C58.637.103 58.287 0 57.82 0h-8.904c-.467 0-.817.103-1.05.308-.233.205-.35.476-.35.812 0 .261.06.471.182.63.121.159.313.303.574.434l.616.224c1.12.41 1.871.999 2.254 1.764s.453 1.661.21 2.688l-5.535 23.486-6.477-25.81c-.133-.58-.17-1.018-.11-1.31l.026-.104c.093-.29.317-.49.672-.602l1.232-.336c.299-.112.518-.257.658-.434a.986.986 0 0 0 .21-.63c0-.355-.112-.63-.336-.826C41.468.098 41.122 0 40.656 0H24.78c-.448 0-.789.098-1.022.294-.233.196-.35.471-.35.826 0 .224.06.415.182.574.121.159.322.294.602.406l1.176.42c.261.093.462.243.602.448.14.205.294.607.462 1.204l1.751 6.742-5.553 19.475L16.128 4.48c-.147-.49-.194-.898-.14-1.223l.028-.135c.093-.345.327-.574.7-.686l1.456-.336c.504-.168.756-.504.756-1.008 0-.336-.112-.602-.336-.798C18.368.098 18.022 0 17.556 0H1.344C.896 0 .56.098.336.294.112.49 0 .756 0 1.092c0 .224.056.434.168.63.112.196.29.35.532.462l1.232.392c.355.13.625.308.812.532.187.224.345.579.476 1.064l7.84 30.408c.112.43.191.751.238.966.047.215.07.462.07.742v1.82c0 .355.103.625.308.812.205.187.467.28.784.28h10.556Zm34.804.7c1.195 0 2.263-.29 3.206-.868a6.338 6.338 0 0 0 2.24-2.338c.55-.98.826-2.04.826-3.178 0-1.157-.275-2.212-.826-3.164a6.325 6.325 0 0 0-2.24-2.282c-.943-.57-2.011-.854-3.206-.854-1.157 0-2.207.285-3.15.854a6.325 6.325 0 0 0-2.24 2.282c-.55.952-.826 2.007-.826 3.164 0 1.139.275 2.198.826 3.178.55.98 1.297 1.76 2.24 2.338.943.579 1.993.868 3.15.868Z"
              fill="#00001A"
            />
          </svg>{" "}
          <div className="links">
            <a className="link">Home</a>
            <a className="link">New</a>
            <a className="link">Popular</a>
            <a className="link">Trending</a>
            <a className="link">Categories</a>
          </div>
          <div className="hamburger" onClick={openMenu}>
            <svg
              className="hamburger"
              width="40"
              height="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#00001A" fillRule="evenodd">
                <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
                <path d="M0 0h40v3H0z" />
              </g>
            </svg>
          </div>
        </div>

        <div className="menu">
          <svg
            className="cross"
            onClick={closeMenu}
            width="32"
            height="31"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#00001A" fillRule="evenodd">
              <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
              <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
            </g>
          </svg>
          <a className="menu-link" href="#">
            Home
          </a>
          <a className="menu-link" href="#">
            New
          </a>
          <a className="menu-link" href="#">
            Popular
          </a>
          <a className="menu-link" href="#">
            Trending
          </a>
          <a className="menu-link" href="#">
            Categories
          </a>
        </div>

        <div className="Bcolumns">
          <div className="hero">
            <img
              src="/assets/images/image-web-3-desktop.jpg"
              alt=""
              className="home"
            />

            <div className="column">
              <p1 className="web">The Bright Future of Web 3.0?</p1>
            </div>

            <div className="column">
              <p1 className="fade1">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p1>
              <br />
              <button className="readMore">READ MORE</button>
            </div>
          </div>
          <div className="column headlineCL">
            <div className="head">New</div>

            <div className="headlines">
              <h3 className="heading">Hydrogen VS Electric Cars</h3>
              <p1 className="fades">
                {" "}
                Will hydrogen-fueled cars ever catch up to EVs?
              </p1>
            </div>

            <div className="headlines">
              <h3 className="heading">The Downsides of AI Artistry</h3>
              <p1 className="fades">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p1>
            </div>

            <div className="headlines">
              <h3 className="heading">Is VC Funding Drying Up?</h3>
              <p1 className="fades">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p1>
            </div>
          </div>

          <div className="card">
            <img
              src="./assets/images/image-retro-pcs.jpg"
              alt=""
              className="ad"
            />
            <p1 className="fade2 bCard">
              <h1 className="numb">01</h1>
              <h3 className="heading1">Reviving Retro PCs</h3>
              What happens when old PCs are given modern upgrades?
            </p1>
          </div>

          <div className="card">
            <img
              src="./assets/images/image-top-laptops.jpg"
              alt=""
              className="ad"
            />
            <p1 className="fade2 bCard">
              <h1 className="numb">02</h1>
              <h3 className="heading1">Top 10 Laptops of 101</h3>
              Our best picks for various needs and budgets.
            </p1>
          </div>

          <div className="card">
            <img
              src="./assets/images/image-gaming-growth.jpg"
              alt=""
              className="ad"
            />
            <p1 className="fade2 bCard">
              <h1 className="numb">03</h1>
              <h3 className="heading1">The Growth of Gaming</h3>
              How the pandemic has sparked fresh opportunities.
            </p1>
          </div>
        </div>
      </div>

      <div className="attribution fade3">
        Challenge by{" "}
        <a
          className="lastLink"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="lastLink" href="#">
          {" "}
          Appiah Theophilus Boadi
        </a>
        .
      </div>
    </div>
  );
};

export default Home;
