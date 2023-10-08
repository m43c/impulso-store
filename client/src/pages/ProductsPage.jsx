import { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
    const { readProducts, products } = useProducts();

    if (products.length == 0) {
        return <h1 className={styles.noProducts}>There are no products yet</h1>;
    }

    useEffect(() => {
        readProducts();
    }, []);

    return (
        <div className={styles.container}>
            {products.map((product) => (
                <ProductCard product={product} key={product._id} />
            ))}
        </div>
    );
}

export default ProductsPage;
