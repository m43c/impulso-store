import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
    try {
        const { name, imgURL, description, price } = req.body;

        const newProduct = new Product({
            name,
            imgURL,
            description,
            price,
        });

        const savedProduct = await newProduct.save();
        return res.json(savedProduct);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
};

export const readProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
};

export const readProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json(product);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json(updatedProduct);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json(deletedProduct);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
};
