import Role from "../models/roleModel.js";

export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) {
            return;
        }

        const values = await Promise.all([
            new Role({ name: "admin" }).save(),
            new Role({ name: "user" }).save(),
        ]);

        return console.log(values);
    } catch (error) {
        return console.error(error);
    }
};
