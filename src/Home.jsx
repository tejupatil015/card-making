import Navbar from "./components/Navbar";
import Products from "./components/Products";

function Home() {
    return (
        <>
            <Navbar />
            <main id="collection">
                <Products />
            </main>
        </>
    );
}

export default Home;
