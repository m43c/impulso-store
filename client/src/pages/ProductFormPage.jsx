import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./ProductFormPage.module.css";

function ProductFormPage() {
    const { register, handleSubmit, setValue } = useForm();
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
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>{title}</h1>

            <form className={styles.formContainer} onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    autoFocus
                    required
                    className={styles.formInput}
                    {...register("name", { required: true })}
                />

                <input
                    type="text"
                    placeholder="Image URL"
                    className={styles.formInput}
                    {...register("image", { required: true })}
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
                    {...register("price", { required: true })}
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
                        // onClick={notifySuccess}
                    >
                        Save
                    </button>
                </div>
                <Toaster position="top-center" reverseOrder={false} />
            </form>
        </div>
    );
}

export default ProductFormPage;
