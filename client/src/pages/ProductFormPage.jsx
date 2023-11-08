import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
        <div className="form-container w-[300px] sm:w-[350px]">
            <h1 className="form-title">{title}</h1>

            <form onSubmit={onSubmit}>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Name"
                    autoFocus
                    required
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <p className="form-input-error">Name is required</p>
                )}

                <input
                    className="form-input"
                    type="text"
                    placeholder="Image URL"
                    {...register("image", { required: true })}
                />
                {errors.image && (
                    <p className="form-input-error">Image is required</p>
                )}

                <textarea
                    className="form-input max-h-[100px]"
                    placeholder="Description"
                    {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                    <p className="form-input-error">Description is required</p>
                )}

                <input
                    className="form-input"
                    type="text"
                    placeholder="Price"
                    {...register("price", { required: true })}
                />
                {errors.price && (
                    <p className="form-input-error">Price is required</p>
                )}

                <div className="flex justify-center space-x-4">
                    <Link
                        className="form-btn bg-orgBg hover:bg-orgHvr"
                        to="/products"
                    >
                        Back
                    </Link>

                    <button
                        className="form-btn bg-grnBg hover:bg-grnHvr"
                        type="reset"
                    >
                        Reset
                    </button>

                    <button className="form-btn bg-bluBg hover:bg-bluHvr">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductFormPage;
