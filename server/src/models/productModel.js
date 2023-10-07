import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Product", productSchema);
