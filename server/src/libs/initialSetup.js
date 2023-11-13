import Role from "../models/roleModel.js";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count === 0) {
      const values = await Promise.all([new Role({ name: "admin" }).save(), new Role({ name: "user" }).save()]);
    }
  } catch (error) {
    console.error(error);
  }
};
