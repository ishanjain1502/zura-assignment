import React from 'react'
import CarouselWrapper from '../offers/CarouselWrapper'
import styles from './product.module.css'

const ProductCard = ({product}) => {

    // console.log(product.options);

    return product ? (
        <div className={styles.container}>
            <CarouselWrapper images={product.listOfImages} className={styles.images} />
            <p>
                {product.desc}
            </p>
            <br/>
            <p>
                {product.brandName}
            </p>
            <select className={styles.dropdown} id="options">
                {
                    product.options.map((option) => <option key={option} value={option}>{option}</option>)
                }
            </select> 
        </div>
    ) : null
}

export default ProductCard