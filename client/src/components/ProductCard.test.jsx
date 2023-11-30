import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../context/ProductsContext";

import ProductCard from "./ProductCard";

let deleteProductMock;

describe("ProductCard", () => {
  afterEach(cleanup);

  test("should render the product card with the correct information", () => {
    // Define the product object
    const product = {
      _id: "1",
      name: "Product 1",
      description: "This is product 1",
      image: "https://product1.jpg",
      price: 10,
    };

    // Define the user role name
    const userRoleName = "admin";

    // Render the ProductCard component with the product and userRoleName props
    render(
      <ProductProvider>
        <BrowserRouter>
          <ProductCard product={product} userRoleName={userRoleName} />
        </BrowserRouter>
      </ProductProvider>
    );

    // Assert that the product name is rendered
    expect(screen.getByText(product.name)).toBeDefined();

    // Assert that the product description is rendered
    expect(screen.getByText(product.description)).toBeDefined();

    // Assert that the product price is rendered
    expect(screen.getByText(`${product.price}$`)).toBeDefined();
  });

  test('should show the "Delete" and "Edit" buttons for admin users', () => {
    // Define the product object
    const product = {
      _id: "1",
      name: "Product 1",
      description: "This is product 1",
      price: 10,
      image: "product1.jpg",
    };

    // Define the user role name
    const userRoleName = "admin";

    // Render the ProductCard component with the product and userRoleName props
    render(
      <ProductProvider>
        <BrowserRouter>
          <ProductCard product={product} userRoleName={userRoleName} />
        </BrowserRouter>
      </ProductProvider>
    );

    // Assert that the "Delete" button is rendered
    expect(screen.getByText("Delete")).toBeDefined();

    // Assert that the "Edit" button is rendered
    expect(screen.getByText("Edit")).toBeDefined();
  });

  test('should show the "Reserve" button for non-admin users', () => {
    // Define the product object
    const product = {
      _id: "1",
      name: "Product 1",
      description: "This is product 1",
      image: "https://product1.jpg",
      price: 10,
    };

    // Define the user role name
    const userRoleName = "user";

    // Render the ProductCard component with the product and userRoleName props
    render(
      <ProductProvider>
        <BrowserRouter>
          <ProductCard product={product} userRoleName={userRoleName} />
        </BrowserRouter>
      </ProductProvider>
    );

    // Assert that the "Reserve" button is rendered
    expect(screen.getByText("Reserve")).toBeDefined();
  });

  test('should delete the product when the "Delete" button is clicked by an admin user', () => {
    // Sample product data
    const product = {
      _id: "1",
      name: "Product 1",
      description: "This is product 1",
      price: 10,
      image: "product1.jpg",
    };

    // User role set to admin
    const userRoleName = "admin";

    // Mock deleteProduct function
    deleteProductMock = vi.fn();

    // Inject test version of deleteProduct into context
    vi.mock("../context/ProductsContext", async () => {
      // Import the current context to make modifications
      const actual = await vi.importActual("../context/ProductsContext");

      // Return the modified context
      return {
        ...actual,
         // Mocking the signup function to simulate a server error
        useProducts: () => ({
          deleteProduct: deleteProductMock,
        }),
      };
    });

    // Render component
    render(
      <ProductProvider>
        <BrowserRouter>
          <ProductCard product={product} userRoleName={userRoleName} />
        </BrowserRouter>
      </ProductProvider>
    );

    // Click delete button
    fireEvent.click(screen.getByText("Delete"));

    // Assert deleteProduct was called
    expect(deleteProductMock).toHaveBeenCalledWith(product._id);
  });
});
