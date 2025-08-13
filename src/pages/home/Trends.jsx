import React from 'react'

import card1 from "../../assets/card-1.png"
import card2 from "../../assets/card-2.png"
import card3 from "../../assets/card-3.png"

const Trends = () => {
  return (
    <section className="section__container hero__container">
        <div className="hero__card">
          <img src={card1} alt="Womens Shirt" />
          <div className="hero__content">
            <p>2025 Trend</p>
            <h4>Men's Shirts</h4>
            <a href="#">Discover More +</a>
          </div>
        </div>
        <div className="hero__card">
          <img src={card2} alt="Womens Dresses" />
          <div className="hero__content">
            <p>2025 Trend</p>
            <h4>Men's Formal Wear</h4>
            <a href="#">Discover More +</a>
          </div>
        </div>
        <div className="hero__card">
          <img src={card3} alt="Womens Casuals" />
          <div className="hero__content">
            <p>2025 Trend</p>
            <h4>Men's Casuals</h4>
            <a href="#">Discover More +</a>
          </div>
        </div>
      </section>
  )
}

export default Trends