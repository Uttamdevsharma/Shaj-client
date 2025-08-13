import React from 'react'
import category1 from "../../assets/category-1.jpg"
import category2 from "../../assets/category-2.jpg"
import category3 from "../../assets/category-3.jpg"
import category4 from "../../assets/category-4.jpg"
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        { id: 1, name: "Formal Dress", path: 'formal dress', image: category1 },
{ id: 2, name: "Casual Dress", path: 'casual dress', image: category2 },
{ id: 3, name: "Sports Dress", path: 'sports dress', image: category3 },
{ id: 4, name: "Grooming", path: 'grooming', image: category4 },
    ]
    return (
        <section className="product__grid">
            {
                categories.map((category, index) => (
                    <Link key={index} className="categories__card" to={`/categories/${category.path}`}>
                        <img src={category.image} alt="Accessories" />
                        <h4>{category.name}</h4>
                    </Link>
                ))
            }


        </section>
    )
}

export default Categories