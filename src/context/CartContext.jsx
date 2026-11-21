import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {

        setCart((prevCart) => {

            const alreadyAdded = prevCart.find(
                (item) => item.id === product.id
            );

            if (alreadyAdded) {
                return prevCart;
            }

            return [...prevCart, product];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== id)
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;