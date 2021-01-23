import React from 'react'
import "./CheckoutProduct.css"
import StarIcon from "@material-ui/icons/Star"

function CheckoutProduct({id, title, price, rating, image}) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><StarIcon /></p>
                        ))
                    }
                </div>
                <button>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
