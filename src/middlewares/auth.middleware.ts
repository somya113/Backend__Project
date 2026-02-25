import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";



export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  console.log("AUTH HEADER:", authHeader);
  console.log("JWT SECRET:", process.env.JWT_SECRET);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    next();
  } catch (err) {
    console.log("JWT ERROR:", err);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};