import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function ProductCard({ product, userRoleName }) {
    const { deleteProduct } = useProducts();

    return (
        <div
            key={product._id}
            className=" max-w-[300px] mx-auto p-4 space-y-3 rounded text-center text-dark font-semibold bg-dark-aqua"
        >
            <img className="max-h-[300px]" src={product.image} />

            <h1 className="font-bold text-2xl">{product.name}</h1>

            <p className="max-h-[50px] text-center overflow-auto">
                {product.description}
            </p>

            <span className="inline-block">{`${product.price}$`}</span>

            <div className="flex justify-between space-x-4">
                {userRoleName === "admin" ? (
                    <>
                        <button
                            className="product-btn bg-light-red"
                            onClick={() => {
                                deleteProduct(product._id);
                            }}
                        >
                            Delete
                        </button>

                        <Link
                            className="product-btn bg-light-yellow"
                            to={`/add-product/${product._id}`}
                        >
                            Edit
                        </Link>
                    </>
                ) : (
                    <>
                        <button className="product-btn bg-foreground">
                            <a href="#">Reserve</a>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
