import User from "../models/userModel.js";
import Role from "../models/roleModel.js";

export const validateRole = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      return next();
    }
  }

  return res.status(403).json({ message: "Require admin role" });
};
