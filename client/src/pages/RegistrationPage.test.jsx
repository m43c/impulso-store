import { afterEach, describe, expect, test } from "vitest";

import { cleanup, render, screen } from "@testing-library/react";
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
});
