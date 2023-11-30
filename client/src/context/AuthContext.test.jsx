import { afterEach, describe, expect, test } from "vitest";

import { cleanup, renderHook } from "@testing-library/react";

import { AuthProvider, useAuth } from "./AuthContext";

describe("AuthContext", () => {
  afterEach(cleanup);

  test("should initialize the authentication state to false", () => {
    // Create a wrapper component with AuthProvider
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;

    // Render useAuth hook inside the wrapper
    const { result } = renderHook(() => useAuth(), { wrapper });

    // Check isAuthenticated state in hook is false
    expect(result.current.isAuthenticated).toBe(false);
  });
});
