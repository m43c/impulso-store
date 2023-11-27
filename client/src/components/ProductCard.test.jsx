import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../context/ProductsContext";

import ProductCard from "./ProductCard";

let deleteProductMock;

describe("ProductCard", () => {
  afterEach(cleanup);

  test("should render the product card with the correct information", () => {
    const product = {
      _id: "1",
      name: "Product 1",
      description: "This is product 1",
      image: "https://product1.jpg",
      price: 10,
    };
    const userRoleName = "admin";

    render(
      <ProductProvider>
        <BrowserRouter>
          <ProductCard product={product} userRoleName={userRoleName} />
        </BrowserRouter>
      </ProductProvider>
    );

    expect(screen.getByText(product.name)).toBeDefined();
    expect(screen.getByText(product.description)).toBeDefined();
    expect(screen.getByText(`${product.price}$`)).toBeDefined();
  });

  test('should show the "Delete" and "Edit" buttons for admin users', () => {
    const product = {
      _id: "1",
      name: "Product 1",
      description: "This is product 1",
      price: 10,
      image: "product1.jpg",
    };
    const userRoleName = "admin";

    render(
      <ProductProvider>
        <BrowserRouter>
          <ProductCard product={product} userRoleName={userRoleName} />
        </BrowserRouter>
      </ProductProvider>
    );

    expect(screen.getByText("Delete")).toBeDefined();
    expect(screen.getByText("Edit")).toBeDefined();
  });

  test('should show the "Reserve" button for non-admin users', () => {
    const product = {
      _id: "1",
      name: "Product 1",
      description: "This is product 1",
      image: "https://product1.jpg",
      price: 10,
    };
    const userRoleName = "user";

    render(
      <ProductProvider>
        <BrowserRouter>
          <ProductCard product={product} userRoleName={userRoleName} />
        </BrowserRouter>
      </ProductProvider>
    );

    expect(screen.getByText("Reserve")).toBeDefined();
  });

  test('should delete the product when the "Delete" button is clicked by an admin user', () => {
    const product = {
      _id: "1",
      name: "Product 1",
      description: "This is product 1",
      price: 10,
      image: "product1.jpg",
    };
    const userRoleName = "admin";
    deleteProductMock = vi.fn();

    vi.mock("../context/ProductsContext", async () => {
      const actual = await vi.importActual("../context/ProductsContext");

      return {
        ...actual,
        useProducts: () => ({
          deleteProduct: deleteProductMock,
        }),
      };
    });

    render(
      <ProductProvider>
        <BrowserRouter>
          <ProductCard product={product} userRoleName={userRoleName} />
        </BrowserRouter>
      </ProductProvider>
    );

    fireEvent.click(screen.getByText("Delete"));

    expect(deleteProductMock).toHaveBeenCalledWith(product._id);
  });
});
