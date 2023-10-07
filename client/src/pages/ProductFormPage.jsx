import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import styles from "./ProductFormPage.module.css";

function ProductFormPage() {
    const { register, handleSubmit } = useForm();
    const { createProduct } = useProducts();

    const onSubmit = handleSubmit((data) => {
        createProduct(data);
    });

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>New Product</h1>

            <form className={styles.formContainer} onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    className={styles.formInput}
                    autoFocus
                    {...register("name")}
                />

                <input
                    type="text"
                    placeholder="Image URL"
                    className={styles.formInput}
                    {...register("image")}
                />

                <textarea
                    rows="3"
                    placeholder="Description"
                    className={`${styles.formInput} ${styles.formInputTextarea}`}
                    {...register("description")}
                ></textarea>

                <input
                    type="text"
                    placeholder="Price"
                    className={styles.formInput}
                    {...register("price")}
                />

                <div className={styles.formButtons}>
                    <Link
                        className={`${styles.formBtn} ${styles.formBtnCancel}`}
                        to="/products"
                    >
                        Cancel
                    </Link>

                    <button
                        type="reset"
                        className={`${styles.formBtn} ${styles.formBtnReset}`}
                    >
                        Reset
                    </button>

                    <button
                        className={`${styles.formBtn} ${styles.formBtnSave}`}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductFormPage;
