import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./ProductFormPage.module.css";

function ProductFormPage() {
    const {
        formState: { errors },
        handleSubmit,
        register,
        setValue,
    } = useForm();
    const { createProduct, readProduct, updateProduct } = useProducts();
    const [title, setTitle] = useState("New Product");
    const params = useParams();
    const notifySuccess = () =>
        toast.success("Saved successfully!", {
            style: {
                borderRadius: "5px",
                color: "#282828",
                background: "#ebdbb2",
            },
        });

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateProduct(params.id, data);
            notifySuccess();
        } else {
            createProduct(data);
            notifySuccess();
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

                setTitle("Edit Product");
            }
        }

        loadProduct();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>

            <form className={styles.form} onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    autoFocus
                    required
                    className={styles.input}
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <p className={styles.inputError}>Name is required</p>
                )}

                <input
                    type="text"
                    placeholder="Image URL"
                    className={styles.input}
                    {...register("image", { required: true })}
                />
                {errors.image && (
                    <p className={styles.inputError}>Image is required</p>
                )}

                <textarea
                    placeholder="Description"
                    className={`${styles.input} ${styles.textareaInput}`}
                    {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                    <p className={styles.inputError}>Description is required</p>
                )}

                <input
                    type="text"
                    placeholder="Price"
                    className={styles.input}
                    {...register("price", { required: true })}
                />
                {errors.price && (
                    <p className={styles.inputError}>Price is required</p>
                )}

                <div className={styles.buttons}>
                    <Link
                        className={`${styles.button} ${styles.buttonCancel}`}
                        to="/products"
                    >
                        Back
                    </Link>

                    <button
                        type="reset"
                        className={`${styles.button} ${styles.buttonReset}`}
                    >
                        Reset
                    </button>

                    <button className={`${styles.button} ${styles.buttonSave}`}>
                        Save
                    </button>
                </div>
                <Toaster position="top-center" reverseOrder={false} />
            </form>
        </div>
    );
}

export default ProductFormPage;
