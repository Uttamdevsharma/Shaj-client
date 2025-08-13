import React from 'react'

const Blogs = () => {
  return (
    <section className="section__container blog__container">
        <h2 className="section__header">Latest From Blog</h2>
        <p className="section__subheader">
          Elevate your style with our freshest tips, trends, and inspiration for men's fashion on our blog.
        </p>
        <div
          className="md:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <div
            className="blog__card cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mastering the Art of Men's Capsule Wardrobes"
            />
            <div className="blog__card__content">
              <h6>Timeless Elegance</h6>
              <h4>Mastering the Art of Men's Capsule Wardrobes</h4>
              <p>12th August 2022</p>
            </div>
          </div>
          <div
            className="blog__card cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <img
              src="https://images.unsplash.com/photo-1597278318687-1d7e1e4e320e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Unveiling the Hottest Men's Beachwear Trends"
            />
            <div className="blog__card__content">
              <h6>Summer Breeze</h6>
              <h4>Unveiling the Hottest Men's Beachwear Trends</h4>
              <p>18th January 2023</p>
            </div>
          </div>
          <div
            className="blog__card cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1711174131091-1d0911281e59?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Navigating the World of Men's Tailoring"
            />
            <div className="blog__card__content">
              <h6>Power Dressing</h6>
              <h4>Navigating the World of Men's Tailoring</h4>
              <p>5th January 2025</p>
            </div>
          </div>
          <div
            className="blog__card cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <img
              src="https://media.istockphoto.com/id/2004718936/photo/employees-team-presenting-variety-of-clothes-to-senior-client.jpg?s=2048x2048&w=is&k=20&c=G7ocVeLwJiosSnyQNH8CzjK4TVO9Qyoa-XydCC7Nv7E="
              alt="The World's Best Fashion Fair 2025"
            />
            <div className="blog__card__content">
              <h6>New York Times</h6>
              <h4>The World's Best Fashion Fair 2025</h4>
              <p>25th May 2025</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Blogs