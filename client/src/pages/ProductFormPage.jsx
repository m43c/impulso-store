import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ProductFormPage.module.css";

function ProductFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createProduct, readProduct, updateProduct } = useProducts();
    const [title, setTitle] = useState("New Product");
    const params = useParams();

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateProduct(params.id, data);
        } else {
            createProduct(data);
        }
    });

    useEffect(() => {
        async function loadProduct() {
            if (params.id) {
                const product = await readProduct(params.id);
                
                setValue("name", product.name);
                setValue("image", product.image);
                setValue("description", product.description);
                setValue("price", product.price);
                
                setTitle("Edit Product")
            }
        }

        loadProduct();
    }, []);

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>{title}</h1>

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
                        Back
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
