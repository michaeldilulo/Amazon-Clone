import React from 'react'
import "./Product.css"
import StarIcon from "@material-ui/icons/Star"

function Product({id, title, price, rating, image}) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                            <p><StarIcon /></p>
                        ))
                }
            </div>
        </div>
    )
}

export default Product
