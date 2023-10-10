import { useProducts } from "../context/ProductsContext";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
    const { deleteProduct } = useProducts();

    return (
        <article key={product._id} className={styles.product}>
            <img src={product.image} className={styles.image} />
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.description}>{product.description}</p>
            <span className={styles.price}>{`${product.price}$`}</span>
            <div className={styles.buttons}>
                <button
                    className={`${styles.button} ${styles.deleteBtn}`}
                    onClick={() => {
                        deleteProduct(product._id);
                    }}
                >
                    Delete
                </button>
                <button className={`${styles.button} ${styles.editBtn}`}>
                    Edit
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
