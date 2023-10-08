import { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";

function ProductsPage() {
    const { readProducts, products } = useProducts();

    useEffect(() => {
        readProducts();
    }, []);

    return (
        <div>
            {products.map(({ _id, name, image, description, price }) => (
                <div key={_id}>
                    <img src={image} />
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <span>{price}</span>
                </div>
            ))}
        </div>
    );
}

export default ProductsPage;
