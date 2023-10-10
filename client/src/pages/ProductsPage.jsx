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
        <section className={styles.mainContainer}>
            {products.length == 0 ? (
                <>
                    <h1 className={styles.messageNoProducts}>
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
        </section>
    );
}

export default ProductsPage;
