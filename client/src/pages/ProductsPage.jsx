import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const { user } = useAuth();
  const { readProducts, products } = useProducts();
  const localUser = JSON.parse(localStorage.getItem("user"));
  const userRoleName = localUser?.roles[0]?.name || user?.roles[0]?.name;

  useEffect(() => {
    readProducts();
  }, []);

  return (
    <div className="mt-[48px] w-full min-h-screen p-4 text-gryTxt">
      {products.length == 0 ? (
        <>
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-3xl">
            There are no products yet
          </h1>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {products.map((product) => (
              <ProductCard
                product={product}
                key={product._id}
                userRoleName={userRoleName}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductsPage;
