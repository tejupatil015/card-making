import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { useCart } from "../context/useCart";

const Navbar = () => {
    const { cart } = useCart()
    return (
        <nav className="navbar">
            {/* logo */}

            <div className="logo">
                <div className="logo-circle">G</div>
                <span>Golden Rabbit</span>
            </div>

            {/* navigation */}
            <div className="nav-links">
                <a href="#collection">COLLECTION</a>
                <a href="#story">OUR STORY</a>
            </div>

            {/* Right side */}

            <div className="nav-actions">

                <div className="search-box">
                    <IoSearchOutline />
                    <input
                        type="text"
                        placeholder='Search towels'
                    />
                </div>

                <div className='wishlist'>
                    <IoIosHeartEmpty className="heart-icon" />
                    <span>0</span>
                </div>

                <div className='bag'>
                    <IoBagOutline className="bag-icon" />
                    <span>{cart.length}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar