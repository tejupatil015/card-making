import products from "../data/Product"
import Card from './Card'

const Products = () => {
    return (
        <div className="products">
            {products.map((product) =>
                <Card
                    key={product.id}
                    product={product}
                />
            )}
        </div>
    )
}

export default Products