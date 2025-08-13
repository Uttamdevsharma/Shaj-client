import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCards from '../shop/ProductCards'
// import products from "../../data/products.json"
import { useFetchAllProdutsQuery } from '../../redux/features/products/productsApi';
import Loading from '../../components/Loading';

const CategoryPage = () => {
    const {categoryName} = useParams();
    console.log("Category name from URL:", categoryName);
    console.log("Category name sent to API:", categoryName.toLowerCase());
    // const [filteredProducts, setFilteredProducts] = useState([])

    const { data: productsData = {}, error, isLoading } = useFetchAllProdutsQuery({
        category: categoryName.toLowerCase(),
        color: '',
        minPrice: '',
        maxPrice: '',
        page: 1,
        limit: 100
    });

    if (isLoading) return <Loading />;
    if (error) return <div>Error loading products!</div>;

    const products = productsData?.data?.products || [];

    // useEffect(()=> {
    //     const filtered =  products.filter((product) => product.category === categoryName.toLowerCase());
    //     setFilteredProducts(filtered)
    // }, [categoryName])
  
  return (
    <>
        <section className='section__container bg-primary-light'>
           <h2 className='section__header capitalize'>{categoryName}</h2>
           <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>
        </section>

        {/* Products card */}
        <div className='section__container'>
        {products.length > 0 ? (
            <ProductCards products={products}/>
        ) : (
            <p className='text-center text-lg'>No products found in this category.</p>
        )}
        </div>
    </>
  )
}

export default CategoryPage