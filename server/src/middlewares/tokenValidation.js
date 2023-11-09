import jwt from "jsonwebtoken";
import { tokenSecret } from "../config.js";

export const validateToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  jwt.verify(token, tokenSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = user;

    return next();
  });
};
