import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
    const { user } = useAuth();
    const { readProducts, products } = useProducts();
    const localUser = JSON.parse(localStorage.getItem("user"));
    const userRoleName = localUser?.roles[0]?.name || user?.roles[0]?.name;

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
                            <ProductCard
                                product={product}
                                key={product._id}
                                userRoleName={userRoleName}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}

export default ProductsPage;
