import { useForm } from "react-hook-form";

function ProductFormPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    autoFocus
                    {...register("title")}
                />

                <input
                    type="text"
                    placeholder="Image URL"
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
