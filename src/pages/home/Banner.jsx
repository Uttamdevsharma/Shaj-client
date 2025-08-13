import React from 'react'

import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <section className="section__container header__container">
    <div className="header__content z-30">
      <h4>UP TO 20% DISCOUNT ON</h4>
      <h1>Men's Fashion</h1>
      <p>
        Explore the latest trends and define your personal style with our
        Men's Fashion collection. Discover a curated selection of apparel,
        accessories, and footwear designed for every occasion and taste.
      </p>
      <button className="btn"><a href="/shop">EXPLORE NOW</a></button>
    </div>
    <div className="header__image">
      <img src={bannerImg} alt="header" />
    </div>
  </section>
  )
}

export default Banner