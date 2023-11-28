import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { ProductProvider } from "../context/ProductsContext";

import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should toggle the menu visibility when the button is clicked", () => {
    // Render the component
    const { rerender } = render(
      <AuthProvider>
        <ProductProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </ProductProvider>
      </AuthProvider>
    );

    // Get menu element and verify it starts out hidden
    let menu = screen.getByRole("navigation");
    expect(menu.classList.contains("translate-x-full")).toBe(true);

    // Click on the menu toggle button
    const button = screen.getByRole("button");
    button.click();

    // Re-render component to update internal state
    rerender(
      <AuthProvider>
        <ProductProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </ProductProvider>
      </AuthProvider>
    );

    // Now menu should be visible
    expect(menu.classList.contains("translate-x-full")).toBe(false);
  });
});
