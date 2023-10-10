import { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
    const { readProducts, products } = useProducts();

    useEffect(() => {
        readProducts();
    }, []);

    return (
        <div className={styles.container}>
            {products.length == 0 ? (
                <>
                    <h1 className={styles.noProducts}>
                        There are no products yet
                    </h1>
                </>
            ) : (
                <>
                    <div className={styles.productsContainer}>
                        {products.map((product) => (
                            <ProductCard product={product} key={product._id} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductsPage;
