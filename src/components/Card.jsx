import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { useCart } from "../context/useCart";

function Card({ product }) {

    const [showMore, setShowMore] = useState(false);

    const { addToCart } = useCart();

    return (
        <div className="card">

            <div className="card-image-wrap">

                <img
                    src={product.image}
                    alt={product.name}
                />

                <span className="card-label">
                    New arrival
                </span>

                {/* BAG */}
                <IoBagOutline
                    className="bag-icon"
                    onClick={() => addToCart(product)}
                />

                {/* HEART */}
                <IoIosHeartEmpty
                    className="heart-icon"
                />

            </div>

            <h3>
                {product.name}
            </h3>

            <div className="card-price">
                <p>${product.price}</p>
            </div>


            {!showMore && (

                <button
                    onClick={() => setShowMore(true)}
                >
                    Quick See
                </button>

            )}


            {showMore && (

                <div className="more-info">

                    <div className="card-image-wrapp">

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                        <span className="card-label">
                            New arrival
                        </span>

                    </div>


                    <h3>
                        {product.name}
                    </h3>


                    <div className="card-price">
                        <p>${product.price}</p>
                    </div>


                    <div>
                        {product.category}
                    </div>


                    <div>
                        {product.description}
                    </div>


                    <div>
                        {product.sale}
                    </div>


                    {/* ADD TO CART */}

                    <button
                        onClick={() => addToCart(product)}
                    >
                        Add To Cart
                    </button>


                    <button
                        onClick={() => setShowMore(false)}
                    >
                        Show Less
                    </button>

                </div>

            )}

        </div>
    );
}

export default Card;