import React from "react";
import "./App.css";

function Card() {
  const handleOnClick = () => {};
  return (
    <>
      <div className="cardWrapper">
        <div className="hero"></div>
        <div className="bottom">
          <h1 className="title">Order summary</h1>
          <h5 className="context">
            you can now listen to millions of songs ,<br /> audio books , and
            podcasts on any device
            <br /> anywhere you like!
          </h5>
          <div className="music_wrapper">
            <span className="music_icon"></span>

            <div className="item2">
              <div style={{ color: "#414d60", fontWeight: "800" }}>
                Annual Plan
              </div>
              <div style={{ color: "#9394a6" }}>$59.99/year</div>
            </div>
            <a className="item3" href="/#">
              Change
            </a>
          </div>
          <button className="proceed_btn">Proceed to Payment</button>
          <button className="canal_btn">Cancel Order</button>
        </div>
      </div>
    </>
  );
}

export default Card;
