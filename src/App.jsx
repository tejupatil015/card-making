
import {
    Routes,
    Route
} from "react-router-dom";

import "./App.css";

import Home from "./Home.jsx";
import Cart from "./components/Cart.jsx";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/cart"
                element={<Cart />}
            />
        </Routes>
    );
}

export default App;
