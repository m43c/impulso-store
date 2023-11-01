import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product, userRoleName }) {
    const { deleteProduct } = useProducts();

    return (
        <article key={product._id} className={styles.product}>
            <img src={product.image} className={styles.image} />
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.description}>{product.description}</p>
            <span className={styles.price}>{`${product.price}$`}</span>
            <div className={styles.buttons}>
                {userRoleName === "admin" ? (
                    <>
                        <button
                            className={`${styles.button} ${styles.deleteBtn}`}
                            onClick={() => {
                                deleteProduct(product._id);
                            }}
                        >
                            Delete
                        </button>
                        <Link
                            className={`${styles.button} ${styles.editBtn}`}
                            to={`/add-product/${product._id}`}
                        >
                            Edit
                        </Link>
                    </>
                ) : (
                    <>
                        <button
                            className={`${styles.button} ${styles.reserveBtn}`}
                        >
                            <a href="#" className={styles.link}>
                                Reserve
                            </a>
                        </button>
                    </>
                )}
            </div>
        </article>
    );
}

export default ProductCard;
