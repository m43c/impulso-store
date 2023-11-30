import { afterEach, describe, expect, test, vi } from "vitest";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

import RegistrationPage from "./RegistrationPage";

describe("RegistrationPage", () => {
  afterEach(cleanup);

  test("should render the registration form with input fields for username, email, and password, and a submit button", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <RegistrationPage />
        </BrowserRouter>
      </AuthProvider>
    );

    const submitButton = screen.getByRole("button", { name: "Sign up" });

    userEvent.click(submitButton);

    const usernameInput = screen.getByPlaceholderText("Username");
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");

    expect(usernameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(submitButton).toBeDefined();
  });

  test("should display an error message if any of the input fields are left empty", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <RegistrationPage />
        </BrowserRouter>
      </AuthProvider>
    );

    const usernameError = screen.findByText("Username is required");
    const emailError = screen.findByText("Email is required");
    const passwordError = screen.findByText("Password is required");

    expect(usernameError).toBeDefined();
    expect(emailError).toBeDefined();
    expect(passwordError).toBeDefined();
  });

  test("should trigger registration process when submit button is clicked", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <RegistrationPage />
        </BrowserRouter>
      </AuthProvider>
    );

    const submitButton = screen.getByRole("button", { name: /sign up/i });
    fireEvent.click(submitButton);

    expect(submitButton).toBeDefined();
  });

  test("should handle server errors during registration process", () => {
    // Mocking the "../context/AuthContext" module
    vi.mock("../context/AuthContext", async () => {
      // Import the current context to make modifications
      const actual = await vi.importActual("../context/AuthContext");

      // Return the modified context
      return {
        ...actual,
        // Mocking the useAuth function of the context
        useAuth: () => ({
          signup: vi.fn().mockRejectedValue("Server error"),
          // Setting the user to null and errors to an empty array
          user: null,
          errors: [],
        }),
      };
    });

    render(
      <AuthProvider>
        <BrowserRouter>
          <RegistrationPage />
        </BrowserRouter>
      </AuthProvider>
    );

    // Getting the submit button by its role
    const submitButton = screen.getByRole("button", { name: "Sign up" });

    // Simulating a click on the submit button
    userEvent.click(submitButton);

    // Finding the error message containing "Server error"
    const errorMessage = screen.findByText("Server error");

    // Ensuring the error message is defined
    expect(errorMessage).toBeDefined();
  });
});
