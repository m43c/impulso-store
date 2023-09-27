import User from "../models/user.model.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = new User({
            username,
            email,
            password,
        });
        const userSaved = await newUser.save();

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
