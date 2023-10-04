import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: string,
});

export default mongoose.model("Role", roleSchema);
