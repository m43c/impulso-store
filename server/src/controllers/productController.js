import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
    const { name, imgURL, description, price } = req.body;

    const newProduct = new Product({
        name,
        imgURL,
        description,
        price,
    });

    const savedProduct = await newProduct.save();
    return res.json(savedProduct);
};

export const readProducts = async (req, res) => {
    const products = await Product.find();
    return res.json(products);
};

export const readProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    return res.json(product);
};

export const updateProduct = async (req, res) => {
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
};

export const deleteProduct = async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
    }

    return res.json(deletedProduct);
};
