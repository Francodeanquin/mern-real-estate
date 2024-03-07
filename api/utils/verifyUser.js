import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("Error verifying token:", err); // Agregar este log para verificar errores de verificación

      return next(errorHandler(403, "Forbidden"));
    }
    req.user = user; //guardo el user en la request, para llamarlo en la siguiente funcion de la ruta
    next();
  });
};
