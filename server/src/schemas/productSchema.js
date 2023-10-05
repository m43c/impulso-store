import { z } from "zod";

export const createProductSchema = z.object({
    name: z.string({
        required_error: "Title is required",
    }),
    imgURL: z.string({
        required_error: "Image is required",
    }),
    description: z.string({
        required_error: "The description must be a string",
    }),
    price: z.number({
        required_error: "The price must be a number",
    }),
});
