import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";

function ProductFormPage() {
    const { register, handleSubmit } = useForm();
    const { createProduct } = useProducts();

    const onSubmit = handleSubmit((data) => {
        createProduct(data);
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    autoFocus
                    {...register("name")}
                />

                <input
                    type="text"
                    placeholder="Image"
                    {...register("image")}
                />

                <textarea
                    rows="3"
                    placeholder="Description"
                    {...register("description")}
                ></textarea>
                <input type="text" placeholder="Price" {...register("price")} />

                <button>Save</button>
            </form>
        </div>
    );
}

export default ProductFormPage;
