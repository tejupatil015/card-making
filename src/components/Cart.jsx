import { useCart } from "../context/useCart";

function Cart() {

    const { cart, removeFromCart } = useCart();

    return (

        <div className="cart-page">

            <h1>My Cart</h1>

            {cart.length === 0 ? (

                <p>Your cart is empty.</p>

            ) : (

                cart.map((product) => (

                    <div
                        className="cart-card"
                        key={product.id}
                    >

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                        <div>

                            <h3>
                                {product.name}
                            </h3>

                            <p>
                                ${product.price}
                            </p>

                            <button
                                onClick={() =>
                                    removeFromCart(product.id)
                                }
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                ))

            )}

        </div>
    );
}

export default Cart;