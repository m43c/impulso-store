import { z } from "zod";

export const signupSchema = z.object({
    username: z.string({
        required_error: "Username is required",
    }),
    email: z
        .string({
            required_error: "Email is required",
        })
        .email({
            required_error: "Invalid email",
        }),
    password: z
        .string({
            required_error: "Password is required",
        })
        .min(6, {
            message: "Password must be at least 6 characters",
        }),
});

export const signinSchema = z.object({
    email: z
        .string({
            required_error: "Email is required",
        })
        .email({
            message: "Invalid email",
        }),
    password: z
        .string({
            required_error: "Password is required",
        })
        .min(6, { message: "Password must be at least 6 characters" }),
});
