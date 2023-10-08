import { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
    const { readProducts, products } = useProducts();

    useEffect(() => {
        readProducts();
    }, []);

    return (
        <div className={styles.container}>
            {products.map(({ _id, name, image, description, price }) => (
                <div key={_id} className={styles.product}>
                    <img src={image} className={styles.image} />
                    <h1 className={styles.name}>{name}</h1>
                    <p className={styles.description}>{description}</p>
                    <span className={styles.price}>{`${price}$`}</span>
                </div>
            ))}
        </div>
    );
}

export default ProductsPage;
